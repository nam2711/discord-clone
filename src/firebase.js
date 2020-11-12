import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDk58815hP5QgMLxhHFoMUCOP3YedTnpbo',
  authDomain: 'discord-clone-4766c.firebaseapp.com',
  databaseURL: 'https://discord-clone-4766c.firebaseio.com',
  projectId: 'discord-clone-4766c',
  storageBucket: 'discord-clone-4766c.appspot.com',
  messagingSenderId: '965989347277',
  appId: '1:965989347277:web:f3d7eeae68694229319e84'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
