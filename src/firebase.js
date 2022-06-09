import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "long-list-of-numbers-letters",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "random-numbers",
  appId: "1:some-numbers:web:some-numbers-letters",
  measurementId: "G-some-numbers-letters"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database
