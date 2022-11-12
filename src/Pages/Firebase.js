import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyATqbxJ2psmEf_dGods0SuKAhyZOHLBHSU',
  authDomain: 'agro-services-a96dc.firebaseapp.com',
  projectId: 'agro-services-a96dc',
  storageBucket: 'agro-services-a96dc.appspot.com',
  messagingSenderId: '445686841502',
  appId: '1:445686841502:web:945dec602a0ce2d77afb8f',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
