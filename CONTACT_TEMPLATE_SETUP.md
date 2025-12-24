# Contact Us Email Template Setup

## Template ID
**template_lxcrooq**

## Variables Available in Template

The Contact form sends these variables that you can use in your Email.js template:

### Required Variables:
- `{{name}}` - Sender's name
- `{{from_name}}` - Sender's name (same as name)
- `{{email}}` - Sender's email address
- `{{from_email}}` - Sender's email address (same as email)
- `{{phone}}` - Phone number (optional)
- `{{subject}}` - Subject/Inquiry type
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email address (same as email)
- `{{time}}` - Timestamp (formatted: "25 December 2025, 14:30")

### Optional Variables:
- `{{to_email}}` - Recipient email (solutions@amevia.co.uk)
- `{{to_name}}` - Recipient name (Amevia Limited)
- `{{user_email}}` - User email (solutions@amevia.co.uk)
- `{{user_name}}` - User name (Amevia Limited)

## How to Update Your Email.js Template

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click on: **template_lxcrooq**
3. Copy the HTML from `contact-email-template.html`
4. Paste it into the template editor
5. **IMPORTANT**: Set the "From Email" field to: `solutions@amevia.co.uk`
6. Save the template

## Template Settings

### Required Settings:
- **From Email**: `solutions@amevia.co.uk` (MUST be a full email address)
- **From Name**: `Amevia Limited` (optional)
- **Reply To**: `{{reply_to}}` or `{{email}}` (to reply to sender)
- **Subject**: `New Contact Form Submission - {{subject}}`

## Example Usage in Template

```html
<p>Message from: {{name}}</p>
<p>Email: {{email}}</p>
<p>Phone: {{phone}}</p>
<p>Subject: {{subject}}</p>
<p>Message: {{message}}</p>
<p>Time: {{time}}</p>
```

## Testing

After updating the template:
1. Fill out the Contact form on your website
2. Submit the form
3. Check your email inbox
4. Verify all fields are displaying correctly

