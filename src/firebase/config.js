import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/'

const firebaseConfig = {
    apiKey: "AIzaSyAFGpxNZ2PLFTsC1OYLUBsvKMapJz0zMVk",
    authDomain: "olx-clone-a4944.firebaseapp.com",
    projectId: "olx-clone-a4944",
    storageBucket: "olx-clone-a4944.appspot.com",
    messagingSenderId: "66782632675",
    appId: "1:66782632675:web:40e8992bebe7a6bb3e43d6",
    measurementId: "G-B1XPW3B33C"
  };

export default firebase.initializeApp(firebaseConfig)
