import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <BrowserRouter>
          <div className="workspace">
            <Route path="/" render={(prpos) => {
              return (<MainContent />)
            }} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
