# CRITICAL FIX: Email.js Template Sender Address Error

## Error Message
"SMTP: Mail command failed: 501 <ameviaco>: sender address must contain a domain"

## Root Cause
Your Email.js template has an invalid sender email address. The "From" field is set to just "ameviaco" instead of a full email address.

## IMMEDIATE FIX REQUIRED

### Step 1: Open Your Email.js Template
1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click on template: **template_lxcrooq** (Contact Us)

### Step 2: Find and Fix the "From" Field

Look for these settings in your template:

#### Option A: Template Settings Tab
1. Click on the **Settings** tab (or gear icon)
2. Find **"From Email"** or **"From"** field
3. **CHANGE IT FROM:**
   ```
   ameviaco
   ```
   **TO:**
   ```
   solutions@amevia.co.uk
   ```

#### Option B: Email Service Settings
1. Go to: https://dashboard.emailjs.com/admin/integration
2. Click on service: **service_k8pbkfw**
3. Find **"From Email"** field
4. **CHANGE IT FROM:**
   ```
   ameviaco
   ```
   **TO:**
   ```
   solutions@amevia.co.uk
   ```

### Step 3: Check All Email Fields

Make sure ALL of these are set correctly:

- ✅ **From Email**: `solutions@amevia.co.uk` (MUST have @ and domain)
- ✅ **From Name**: `Amevia Limited` (optional, can be anything)
- ✅ **Reply To**: `{{from_email}}` or `{{email}}` (to reply to sender)

### Step 4: Save and Test

1. Click **Save** button
2. Test your contact form
3. The error should be gone!

## Why This Happens

Email.js templates can have a "From" field that's just a name like "ameviaco", but SMTP servers require a full email address with:
- Username part (before @)
- @ symbol
- Domain part (after @)

Example: `username@domain.com`

## Verification

After fixing, the email should:
- ✅ Send successfully
- ✅ Show sender as: `solutions@amevia.co.uk` or `Amevia Limited <solutions@amevia.co.uk>`
- ✅ Allow replies to go to the form submitter's email

## Still Not Working?

If you still get the error after fixing:

1. **Clear browser cache** and try again
2. **Check Email.js service settings** (not just template)
3. **Verify the email service** (Gmail, SendGrid, etc.) allows the sender address
4. **Check Email.js logs** in dashboard for more details

The fix MUST be done in the Email.js dashboard - the code cannot override this setting!

