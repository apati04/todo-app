import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCe8u62hCKjbDwgaNrdMWfwrB6UmzvXHVU",
    authDomain: "osx-cms.firebaseapp.com",
    databaseURL: "https://osx-cms.firebaseio.com",
    storageBucket: "osx-cms.appspot.com",
    messagingSenderId: "302724994288"
  };
  firebase.initializeApp(config);
} catch(e) {

}
export const firebaseRef = firebase.database().ref();
export default firebase;
