# Email Body Formats

## 1. Contact Us Form Email Body
**Template ID:** `template_i2t88ve`

### Variables Available:
- `{{name}}` or `{{from_name}}` - Sender's name
- `{{email}}` or `{{from_email}}` - Sender's email address
- `{{phone}}` - Phone number
- `{{subject}}` - Subject/Inquiry type
- `{{message}}` - Message content
- `{{time}}` - Timestamp (formatted: "25 December 2025, 14:30")
- `{{to_email}}` - Recipient email (solutions@amevia.co.uk)

### Example Email Body:
```
A message by John Doe has been received. Kindly respond at your earliest convenience.

─────────────────────────────────────
👤
John Doe
25 December 2025, 14:30

Subject: Workforce Requirements

Hello,

I am interested in your staffing services for an upcoming construction project. We need 50 skilled workers for a 6-month project starting next month.

Please contact me to discuss further.

Best regards,
John Doe
─────────────────────────────────────

Contact Information:
Email: john.doe@example.com
Phone: 0203 123 4567
```

---

## 2. CV Registration Form Email Body
**Template ID:** `template_ehm0036`

### Variables Available:
- `{{first_name}}` - Candidate's first name
- `{{last_name}}` - Candidate's last name
- `{{email}}` - Candidate's email address
- `{{phone}}` - Phone number
- `{{professional_area}}` - Professional area (Site Management, Trades, Labour, Health & Safety, Other)
- `{{additional_info}}` - Additional information + CV file details
- `{{cv_file_name}}` - CV file name (if uploaded)
- `{{cv_file_size}}` - CV file size (if uploaded)
- `{{to_email}}` - Recipient email (solutions@amevia.co.uk)

### Example Email Body:
```
New CV Registration Received

Candidate Information:
─────────────────────────────────────
First Name: Jane
Last Name: Smith
Email: jane.smith@example.com
Phone: 0203 987 6543
Professional Area: Site Management

Additional Information:
I have 10 years of experience in construction site management, with expertise in health and safety compliance and project coordination. I hold a CSCS card and SMSTS certification.

📎 CV Attachment Information:
File Name: Jane_Smith_CV.pdf
File Size: 245.67 KB
File Type: application/pdf

Note: The CV file was uploaded but cannot be sent as an email attachment via Email.js. Please contact the candidate directly at jane.smith@example.com to request the CV file.
─────────────────────────────────────

Please review this candidate and respond accordingly.
```

---

## Important Notes:

1. **Contact Form**: Uses both `name`/`from_name` and `email`/`from_email` for compatibility
2. **CV Registration**: Includes file information in the email body since Email.js doesn't support file attachments
3. **Both emails** are sent to: `solutions@amevia.co.uk`
4. Make sure your Email.js templates use these exact variable names

