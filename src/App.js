import { useEffect, useState } from 'react'
import './App.css';
import firebase from './firebase';
import { ref, set, onValue } from "firebase/database";


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
        <div className='message-container'>
          <p className='message'>{message.message}</p>
          <p  className='message sender'>from: {message.name}</p>

        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1><a href='https://firebase.google.com/' target="_blank;">Firebase Chat App</a></h1>
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
