# Fix: "SMTP: Mail command failed: 501 sender address must contain a domain"

## Problem
The error occurs because the Email.js template has an invalid sender email address configured.

## Solution: Update Email.js Template Settings

### Step 1: Go to Email.js Dashboard
1. Visit: https://dashboard.emailjs.com/admin/templates
2. Find and click on your Contact Us template: **template_lxcrooq**

### Step 2: Check Template Settings
1. Look for the **"From"** or **"From Name"** field
2. Make sure it's set to a **full email address**, not just a name

### Step 3: Fix the Sender Address

**❌ WRONG:**
- From: `ameviaco`
- From: `Amevia`
- From: `amevia`

**✅ CORRECT:**
- From: `solutions@amevia.co.uk`
- From: `noreply@amevia.co.uk`
- From: `contact@amevia.co.uk`

### Step 4: Update Template Settings

In your Email.js template settings, set:

1. **From Email**: `solutions@amevia.co.uk` (or your preferred email)
2. **From Name**: `Amevia Limited` (optional, this is the display name)
3. **Reply To**: `{{from_email}}` or `{{email}}` (to reply to the sender)

### Step 5: Save and Test

1. Click **Save** in the Email.js dashboard
2. Test the contact form again

## Alternative: Check Email Service Settings

If the issue persists, check your Email Service settings:

1. Go to: https://dashboard.emailjs.com/admin/integration
2. Click on your service: **service_k8pbkfw**
3. Check the **"From Email"** field
4. Make sure it's set to a full email address like `solutions@amevia.co.uk`

## Common Issues

- **Missing @ symbol**: The email must have `@` and a domain
- **Missing domain**: Must end with something like `.co.uk`, `.com`, etc.
- **Spaces in email**: Email addresses cannot contain spaces

## Example Configuration

**Template Settings:**
```
From Email: solutions@amevia.co.uk
From Name: Amevia Limited
Reply To: {{from_email}}
Subject: New Contact Form Submission - {{subject}}
```

This should resolve the error!

