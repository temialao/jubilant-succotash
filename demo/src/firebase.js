import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

import { firebaseConfig, messPublicKey } from "./firebase.config";

/// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const messaging = getMessaging(app);
messaging.getToken({ vapidKey: messPublicKey });

export { auth, db, messaging };
