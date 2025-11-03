// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCChFBoCM0j6wlOBdI3HMGds1HZZ-nDc-w",
  authDomain: "chef-athmane.firebaseapp.com",
  projectId: "chef-athmane",
  storageBucket: "chef-athmane.firebasestorage.app",
  messagingSenderId: "131749386052",
  appId: "1:131749386052:web:7a862c72c9ed9c5a632911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const addReservation = async (reservationData) => {
  try {
    const docRef = await addDoc(collection(db, "reservations"), reservationData);
    console.log("✅ Reservation added with ID: ", docRef.id);
  } catch (e) {
    console.error("❌ Error adding reservation: ", e);
    throw e;
  }
};

export { db };