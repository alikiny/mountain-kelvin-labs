import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header'
import Button from './components/button'
import {SITEKEY} from './web-socket/socket'
import {switchScene} from './web-socket/socket'

const axios = require('axios');

const App=()=> {
  const onActivateScene=(sceneId)=>{
    axios.post(`https://api.mountkelvin.com/v1/site/${SITEKEY}/applyScene`,
    {
      id: sceneId
    })
    .then((res)=>{
      console.log('Scene activated: '+sceneId)
      switchScene(sceneId)

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


          <Button image='circle.jpg' buttonFunction={()=>onActivateScene(process.env.ALLON)} text="All on" />

          <Button image='circle.jpg' buttonFunction={()=>onActivateScene(process.env.ALLOFF)} text="30%" />

          <Button image='circle.jpg' buttonFunction={()=>onActivateScene(process.env.NIGHT)} text="70%" />

          <Button image='circle.jpg' buttonFunction={()=>onActivateScene(process.env.EVENING)} text="All off" />


        </div>

      </div>

    </div>
  );
}

export default App;
