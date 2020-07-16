import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAAwxv7tO0S9nbCM2XngeqptvRQGls2B-U",
    authDomain: "e-commerce-db-f63cc.firebaseapp.com",
    databaseURL: "https://e-commerce-db-f63cc.firebaseio.com",
    projectId: "e-commerce-db-f63cc",
    storageBucket: "e-commerce-db-f63cc.appspot.com",
    messagingSenderId: "997108914417",
    appId: "1:997108914417:web:da9f00c046ba3e97bab150",
    measurementId: "G-6DLRRSW7QJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => { //2
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message )
        }

    }
    return userRef;
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;