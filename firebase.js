// ============================================
// ONE SCHOOL - CENTRAL FIREBASE INITIALIZATION
// ============================================

import { initializeApp, getApp, getApps }
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    setPersistence,
    browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import firebaseConfig from "./firebase-config.js";

// Initialize only once
const app = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Keep users logged in
setPersistence(auth, browserLocalPersistence)
    .catch(error => {
        console.error("Firebase persistence error:", error);
    });

// Firestore
const db = getFirestore(app);

// Export common services
export {
    app,
    auth,
    db
};
