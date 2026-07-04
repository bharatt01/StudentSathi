import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDus6fGV3iDthZahO-JwGp3sTbNHnaNtDc",
  authDomain: "studentsathi-831b3.firebaseapp.com",
  projectId: "studentsathi-831b3",
  storageBucket: "studentsathi-831b3.firebasestorage.app",
  messagingSenderId: "479850917683",
  appId: "1:479850917683:web:517f8b99545c7a8347d846",
  measurementId: "G-RDGS5CGGR2"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);