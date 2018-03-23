import firebase from 'firebase'
import Rebase from 're-base';

const config = {
  apiKey: "AIzaSyDJCq0GEcvL1jV_-QaOxPeWfchLj5AfKgo",
  authDomain: "fir-auth-bdc41.firebaseapp.com",
  databaseURL: "https://fir-auth-bdc41.firebaseio.com",
  projectId: "fir-auth-bdc41",
  storageBucket: "fir-auth-bdc41.appspot.com",
  messagingSenderId: "527355001605"
}

//firebase.initializeApp(config)

export const app = firebase.initializeApp(config)
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const base = Rebase.createClass(app.database())
