import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import User from './pages/User/User';
import Index from './pages/Index/Index';
import Detail from './pages/Detail/Detail';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    
        <Router>
          <Switch>
            <Route path='/' exact component={Index}></Route>
            {/* <Route path='/index' exact component={Index}></Route> */}
            <Route path='/user' exact component={User}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
