import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Feedpage from './pages/feedpage/Feedpage';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ProtectedRoute from '../src/components/routes/ProtectedRoute';


function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Login/>
        </Route>
        <ProtectedRoute path="/home" component={Feedpage} isAuth={isAuth}/>
        <ProtectedRoute path="/a" component={Navbar} isAuth={isAuth}/>
      </Router>
    </div>
  );
}

export default App;