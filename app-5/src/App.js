import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render (){
  return (
    <div className="App">
      <Image url = {"https://www.lego.com/cdn/cs/set/assets/blt167d8e20620e4817/DC_-_Character_-_Details_-_Sidekick-Standard_-_Batman.jpg?fit=crop&width=800&height=426&quality=80"} />
    </div>
  );
}
}


export default App;