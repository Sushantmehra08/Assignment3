import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCiEik-ZddvI1Wi47LIoD-nr1BuVzRTDcU",
  authDomain: "vue-js-ebc6f.firebaseapp.com",
  databaseURL: "vue-js-ebc6f.appspot.com"
}

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
