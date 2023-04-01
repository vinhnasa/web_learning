import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserForm from './BT2/UserForm';
import Greeting from './BT2/Greeting';
import HelloWorld from './TH1/HelloWorld';
import Header from './TH2/Component';
import State from './TH3/state';
import App from './TH4/event';
import Ioc from './BT1/inc';

function Appp() {
  return (
    <div>
    <HelloWorld />
    </div>
  );
}

function App2(){
  return(
    <div>
      <Header />
    </div>
  )
}

function App3(){
  return(
    <State />
  )
}

function App4(){
  return(
    <App />
  )
}

function App5(){
  return(
  <Ioc />
  )
}

const Pp = () => {
  const [name, setName] = useState('');

  const handleFormSubmit = (name) => {
    setName(name);
  };

  return (
    <div>
      <UserForm onFormSubmit={handleFormSubmit} />
      {name && <Greeting name={name} />}
    </div>
  );
};

export default Pp;
