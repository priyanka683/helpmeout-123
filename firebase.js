import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCkS38egn7BqC1JFSihemxRw1gsr3qL1uU",
    authDomain: "a-db-bcf06.firebaseapp.com",
    projectId: "a-db-bcf06",
    storageBucket: "a-db-bcf06.appspot.com",
    messagingSenderId: "353966227870",
    appId: "1:353966227870:web:d0f2bb8fe311e11251968f"
  };

  const app = (!firebase.apps.length ? 
              firebase.initializeApp(firebaseConfig)
              :firebase.app());

  const db = app.firestore();
  
  export default db;