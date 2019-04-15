import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import Start from './components/Start'
import Painting from './components/Painting'

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
            <Route path="/" exact component={Start} />
            <Route exact path="/gallery/:id" component={Painting} />            
            </header>
          </div>
        </Provider>
      );
    }
}

export default App;