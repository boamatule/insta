import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB8tU3Wzbo7386Ihd4OO-lYV5Vg_0kiIJE',
  authDomain: 'instagram-yt-d3e9f.firebaseapp.com',
  projectId: 'instagram-yt-d3e9f',
  storageBucket: 'instagram-yt-d3e9f.appspot.com',
  messagingSenderId: '895010113398',
  appId: '1:895010113398:web:4b61eeaf7b20a50e6d9c57'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
