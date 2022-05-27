import { useEffect, useState } from 'react'
import './App.css';
import firebase from './firebase';
import { ref, set, onValue } from "firebase/database";

// import "firebase/compat/auth"
// import "firebase/compat/firestore"


function App() {
  const [messages, setMessages] = useState([])

  const submitMessage = (evt) => {
    evt.preventDefault();
    let name = evt.target.name.value
    let message = evt.target.message.value

    set(ref(firebase, 'message/' + messages.length), {
      message: message,
      name: name,
    });
  }

  useEffect(() => {
    const fbMessages = ref(firebase, 'message/');
      onValue(fbMessages, (snapshot) => {
        const data = snapshot.val();
        let messagesArr = []
        for (let message in data) {
          messagesArr.push(data[message])
        }
        setMessages(messagesArr)
      });
  }, [])

  const displayMessages = () => {
    return messages.map(message => {
      return (
        <div style={{backgroundColor: 'white'}}>
          <p style={{color: 'black'}}>{message.message}</p>
          <p style={{color: 'black'}}>by: {message.name}</p>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitMessage}>
          <div>
            <input name='name' placeholder='Name'></input>
          </div>
          <br />
          <div>
            <textarea name='message' placeholder='Message'></textarea>
          </div>
          <button type='submit'>Submit Message</button>
        </form>
        <div>
          {displayMessages()}
        </div>
      </header>
    </div>
  );
}

export default App;
