import React, { Component } from 'react';
import './App.css';
import TopMenu from './component/menu/topMenu';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import RouterUrl from './router/routerUrl';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="_013">
          <TopMenu></TopMenu>
          <Header></Header>
          <RouterUrl></RouterUrl>
          <Footer></Footer>
        </div> 
      </BrowserRouter>
    );
  }
}
//npm install -g serve
//powershell -ExecutionPolicy Bypass -File C:\Users\ducho\AppData\Roaming\npm\serve.ps1
export default App;
