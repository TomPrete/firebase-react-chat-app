import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaxk2Zu2E-XRXnmXxdQ6-QSvGGATMkdjs",
  authDomain: "charlie-chat-c304d.firebaseapp.com",
  databaseURL: "https://charlie-chat-c304d-default-rtdb.firebaseio.com",
  projectId: "charlie-chat-c304d",
  storageBucket: "charlie-chat-c304d.appspot.com",
  messagingSenderId: "763819091468",
  appId: "1:763819091468:web:aea55ca07e87c646fdf029",
  measurementId: "G-FZ6K4VPB2T"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database
