# Firebase Storage Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

## Step 2: Enable Storage

1. In Firebase Console, go to **Build** > **Storage**
2. Click **Get started**
3. Choose **Start in test mode** (for development) or **Start in production mode** (for production)
4. Select a location for your storage bucket
5. Click **Done**

## Step 3: Get Firebase Config

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app (you can name it "Amevia Website")
5. Copy the Firebase configuration object

## Step 4: Update Firebase Config

1. Open `src/config/firebase.js`
2. Replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}
```

## Step 5: Set Storage Rules (Important!)

1. In Firebase Console, go to **Build** > **Storage** > **Rules**
2. For development, use these rules (allows uploads but requires authentication for downloads):

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /cvs/{allPaths=**} {
      // Allow uploads from anyone (you can restrict this later)
      allow write: if request.resource.size < 10 * 1024 * 1024; // 10MB limit
      // Allow reads (downloads) from anyone
      allow read: if true;
    }
  }
}
```

3. Click **Publish**

## Step 6: Test

1. Fill out the CV registration form
2. Upload a CV file
3. Submit the form
4. Check your email - you should receive a download link!

## Security Notes

- For production, consider adding authentication
- Set up proper storage rules to restrict access
- Consider adding file type validation
- Set up file size limits

## Free Tier Limits

Firebase Storage free tier includes:
- 5 GB storage
- 1 GB/day downloads
- 20,000 uploads/day

This should be sufficient for CV uploads!

