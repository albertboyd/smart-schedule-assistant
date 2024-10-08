import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from './firebaseConfig';

// Add a new event to Firestore
export const addEvent = async (eventData) => {
  const docRef = await addDoc(collection(db, "events"), eventData);
  return docRef;
};

// Fetch all events from Firestore
export const getEvents = async () => {
  const eventsSnapshot = await getDocs(collection(db, "events"));
  return eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Delete an event from Firestore
export const deleteEvent = async (id) => {
  await deleteDoc(doc(db, "events", id));
};
