# Email Configuration Setup

This project uses Nodemailer to send emails from contact forms, career applications, and server package requests.

## Setup Instructions

1. **Create `.env.local` file** in the root directory (copy from `.env.local.example`):
   ```bash
   cp .env.local.example .env.local
   ```

2. **Configure your email settings** in `.env.local`:

### For Gmail:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

**Important:** For Gmail, you need to:
- Enable 2-Factor Authentication on your Google account
- Generate an App Password: https://support.google.com/accounts/answer/185833
- Use the App Password (not your regular Gmail password) in `EMAIL_PASS`

### For Other Email Providers:

Check your email provider's SMTP settings and update accordingly:

```env
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587 (or 465 for SSL)
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

## Features

- **Contact Form** (`/contact`): Sends inquiries to office email
- **Career Applications** (`/career`): Sends applications with CV attachments
- **Server Package Requests** (`/server-packages`): Sends technical requirement requests

## Security Notes

- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- Use App Passwords instead of regular passwords when possible
- Rotate credentials periodically

## Testing

To test if email configuration works, you can:
1. Fill out any form on the site
2. Check the browser console for any errors
3. Verify that emails arrive at the configured address

## Troubleshooting

**Authentication failed:**
- For Gmail: Make sure you're using an App Password, not your regular password
- Check that 2FA is enabled on your Google account

**Connection timeout:**
- Verify SMTP host and port are correct
- Check firewall settings
- Some networks block SMTP ports (try different network)

**Emails not arriving:**
- Check spam/junk folder
- Verify `EMAIL_USER` and recipient email are correct
- Check email provider's sending limits
