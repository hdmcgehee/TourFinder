import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import MapPage from './pages/MapPage';
import AddBand from './forms/AddBand';
import AddCity from './forms/AddCity';
import AddVenue from './forms/AddVenue';

class App extends Component {
  

  render(){
    return (
      <div className="App">

      <NavBar />

        <Switch>
          <Route exact path='/' component={MapPage} />
          <Route exact path='/addband' component={AddBand} />
          <Route exact path='/addcity' component={AddCity} />
          <Route exact path='/addvenue' component={AddVenue} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
