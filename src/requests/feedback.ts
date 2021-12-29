import {firebase} from '../config/firebase';
import {collection, addDoc, getFirestore, getDocs, limit, query, orderBy} from 'firebase/firestore';

export interface I_FeedbackRequest {
    id?: string;
    rating: number;
    message: string;
    name: string;
    contact: string;
    time: number;
}

export const FeedbackRequest = (function () {
    const COLLECTION_NAME = 'feedbacks';
    const db = getFirestore(firebase);

    return {
        post: async function (payload: I_FeedbackRequest) {
            const docRef = await addDoc(collection(db, COLLECTION_NAME), {...payload, time: new Date().getTime()});
            return docRef.id;
        },
        get: async function () {
            const querySnapshot = await getDocs(
                query(collection(db, COLLECTION_NAME), orderBy('time', 'desc'), limit(5))
            );
            const response: I_FeedbackRequest[] = [];
            querySnapshot.forEach((doc) => {
                response.push({...(doc.data() as I_FeedbackRequest), id: doc.id});
            });

            return response;
        },
    };
})();
