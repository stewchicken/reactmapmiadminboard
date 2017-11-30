import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDJCq0GEcvL1jV_-QaOxPeWfchLj5AfKgo",
    authDomain: "fir-auth-bdc41.firebaseapp.com",
    databaseURL: "https://fir-auth-bdc41.firebaseio.com",
    projectId: "fir-auth-bdc41",
    storageBucket: "fir-auth-bdc41.appspot.com",
    messagingSenderId: "527355001605"
};

const app=firebase.initializeApp(config)
const base=Rebase.createClass(app.database())

export {base}