import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC34_M1FmzZfPgDwDAcg4V9sgjbdFMf78U",
  authDomain: "abeshinzoexplorer.firebaseapp.com",
  projectId: "abeshinzoexplorer",
  storageBucket: "abeshinzoexplorer.appspot.com",
  messagingSenderId: "1087667636442",
  appId: "1:1087667636442:web:7f34a2edd4ab0bf7eb7de3",
  measurementId: "G-P4SKPT0RQ4"
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const db = getFirestore();