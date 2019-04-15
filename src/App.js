import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import Collection from './components/Collection'
import Painting from './components/Painting'

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
            <Route path="/" exact component={Collection} />
            <Route exact path="/gallery/:id" component={Painting} />            
            </header>
          </div>
        </Provider>
      );
    }
}

export default App;