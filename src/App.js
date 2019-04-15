import React, { Component } from 'react';
import logo from './logo.svg';
// import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import ArtGallery from './components/ArtGallery';

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <ArtGallery/>
            </header>
          </div>
        </Provider>
      );
    }
}

export default App;