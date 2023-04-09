import React from 'react';
import logo from './logo.svg';
import './App.css';
import photo1 from './assets/images/photo1.png'
import { base64Photo } from './Contanst';
import deleteIcon from './DeleteIcon';

function App() {
  return (
    <div className="container">
      <div>Day la huong dan dung anh trong Reactjs</div>
      <img src={photo1} width='200' height='100' className='img' />
      <div className='require-title'>Day la anh dung require</div>
      <img src={require('./assets/images/photo1.png')} className='img2' />
      <img src='https://i.imgur.com/0BJobQo.jpg' className='img3' />
      <div className='require-title'>Day la anh dung base64</div>
      <img src={base64Photo} className='img3' />
      <img src={logo} className='img4' />
      <deleteIcon />

    </div>
  );
}

export default App;
