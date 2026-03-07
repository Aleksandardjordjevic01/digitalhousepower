import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const dateOfBirth = formData.get('dateOfBirth') as string;
    const contactPhone = formData.get('contactPhone') as string;
    const email = formData.get('email') as string;
    const education = formData.get('education') as string;
    const gender = formData.get('gender') as string;
    const motivation = formData.get('motivation') as string;
    const cv = formData.get('cv') as File | null;

    // Validate required fields
    if (!fullName || !dateOfBirth || !contactPhone || !email || !education || !motivation) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Prepare email attachments
    const attachments = [];
    if (cv && cv.size > 0) {
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cv.name,
        content: buffer,
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'office@digitalhousepower.com',
      to: 'office@digitalhousepower.com',
      subject: `New Career Application from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #6536a1, #34bb92); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #6536a1; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Career Application</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <div class="label">Date of Birth:</div>
                <div class="value">${dateOfBirth}</div>
              </div>
              <div class="field">
                <div class="label">Contact Phone:</div>
                <div class="value">${contactPhone}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Level of Education:</div>
                <div class="value">${education}</div>
              </div>
              <div class="field">
                <div class="label">Gender:</div>
                <div class="value">${gender}</div>
              </div>
              <div class="field">
                <div class="label">Why do you want to work in our company?</div>
                <div class="value">${motivation.replace(/\n/g, '<br>')}</div>
              </div>
              ${cv ? `
              <div class="field">
                <div class="label">CV Attached:</div>
                <div class="value">${cv.name} (${(cv.size / 1024).toFixed(2)} KB)</div>
              </div>
              ` : ''}
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Career Application

Full Name: ${fullName}
Date of Birth: ${dateOfBirth}
Contact Phone: ${contactPhone}
Email: ${email}
Level of Education: ${education}
Gender: ${gender}

Why do you want to work in our company?
${motivation}

${cv ? `CV Attached: ${cv.name}` : 'No CV attached'}
      `,
      attachments,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Application sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending application:', error);
    return NextResponse.json(
      { error: 'Failed to send application' },
      { status: 500 }
    );
  }
}
