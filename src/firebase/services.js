import { db } from './config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const addDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: serverTimestamp(), // Sử dụng serverTimestamp từ Firestore
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};