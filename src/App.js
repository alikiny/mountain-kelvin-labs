import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './web-socket/socket'
import Header from './components/header'
import Button from './components/button'
import {SITEKEY} from './web-socket/socket'
const axios = require('axios');

function App() {

  
  const onActivateScene=(sceneId)=>{
    axios.post(`https://api.mountkelvin.com/v1/site/${SITEKEY}/applyScene`,
    {
      id: sceneId
    })
    .then((res)=>{
      console.log('Scene activated: '+sceneId)
    })
    .catch(e=>{
      console.log(e)
    })
  }

  

  return (
    <div className="App">
      <div className="container">
        <Header />

        <div className="btn-root mt-5">


          <Button image='circle.jpg' click={onActivateScene('allOn')} text="All on" />

          <Button image='circle.jpg' click={onActivateScene('30')} text="30%" />

          <Button image='circle.jpg' click={onActivateScene('70')} text="70%" />

          <Button image='circle.jpg' click={onActivateScene('allOff')} text="All off" />


        </div>

      </div>

    </div>
  );
}

export default App;
