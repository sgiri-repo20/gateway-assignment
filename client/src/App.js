import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ItemSearch from './components/wallet-list.component';



class App extends Component{
  render(){
    return(
      <div className="container">
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="navbar-brand">Search App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Search</Link>
                </li>
                
              </ul>
            </div>
        </nav>
        
          <Route path="/" exact component={ItemSearch} />
          
        </Router>
      </div>
      
    );
  }
}

export default App;
