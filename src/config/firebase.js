// Firebase Configuration
// You need to create a Firebase project and get these credentials from Firebase Console
// https://console.firebase.google.com/

import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// TODO: Replace with your Firebase config
// Get this from Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app)
export default app

