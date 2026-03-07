import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      firstName, 
      companyName, 
      websiteAddress, 
      email, 
      contactPhone, 
      networkBandwidth, 
      networkBgpSpeed, 
      dataCenterLocation, 
      serviceDeliveryTime, 
      technicalSpecification 
    } = body;

    // Validate required fields
    if (!firstName || !companyName || !websiteAddress || !email || !contactPhone || !networkBandwidth || !networkBgpSpeed || !dataCenterLocation || !technicalSpecification) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'office@digitalhousepower.com',
      to: 'office@digitalhousepower.com',
      subject: `New Server Package Request from ${firstName} - ${companyName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #6536a1, #34bb92); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #6536a1; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Server Package Request</h2>
            </div>
            <div class="content">
              <div class="section">
                <h3 style="color: #6536a1; border-bottom: 2px solid #34bb92; padding-bottom: 10px;">Contact Information</h3>
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${firstName}</div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${companyName}</div>
                </div>
                <div class="field">
                  <div class="label">Website:</div>
                  <div class="value"><a href="${websiteAddress}">${websiteAddress}</a></div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${contactPhone}</div>
                </div>
              </div>
              
              <div class="section">
                <h3 style="color: #6536a1; border-bottom: 2px solid #34bb92; padding-bottom: 10px;">Technical Requirements</h3>
                <div class="field">
                  <div class="label">Network Bandwidth:</div>
                  <div class="value">${networkBandwidth}</div>
                </div>
                <div class="field">
                  <div class="label">BGP Speed Required:</div>
                  <div class="value">${networkBgpSpeed}</div>
                </div>
                <div class="field">
                  <div class="label">Data Center Location:</div>
                  <div class="value">${dataCenterLocation}</div>
                </div>
                ${serviceDeliveryTime ? `
                <div class="field">
                  <div class="label">Desired Service Delivery Time:</div>
                  <div class="value">${serviceDeliveryTime}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Technical Specification:</div>
                  <div class="value">${technicalSpecification.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Server Package Request

CONTACT INFORMATION
Name: ${firstName}
Company: ${companyName}
Website: ${websiteAddress}
Email: ${email}
Phone: ${contactPhone}

TECHNICAL REQUIREMENTS
Network Bandwidth: ${networkBandwidth}
BGP Speed Required: ${networkBgpSpeed}
Data Center Location: ${dataCenterLocation}
${serviceDeliveryTime ? `Desired Service Delivery Time: ${serviceDeliveryTime}\n` : ''}

Technical Specification:
${technicalSpecification}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending request:', error);
    return NextResponse.json(
      { error: 'Failed to send request' },
      { status: 500 }
    );
  }
}
