import './App.css';
import {Message} from './components/Message/Message';
import {Counter} from './components/Example/Example'
import {Form} from './components/Form/Form'
import { useEffect, useState } from 'react';

//const text = 'Мой первый урок';
const name = 'Марина';
const msgs = [];
function App() {
  const[messages, setMessages] = useState(msgs);

  const addMesges = (newtext) => {
    setMessages([...messages, {text: newtext, author:name, Id:`message-${Date.now()}`}])
  }

useEffect(() => {
  if (messages.length && messages[messages.length - 1].author === name) {
    setTimeout(() => {
      setMessages([...messages, {text: '(´｡• ω •｡)', author:'Робот', Id:`message-${Date.now()}`}])
    }, 2000);
  }
},[messages])

  return (
    <>
       {/*  <Counter/> */}
        {messages.map((msg) =>(<Message key ={msg.Id} author={msg.author} text={msg.text}/>))}
        {/* <button onClick={addMesges}>Отправить</button> */}
        <Form onSubmit={addMesges} />
    </>  
  );
}

export default App;
