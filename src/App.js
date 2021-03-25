import React, {useState} from 'react';
import './App.css';
import Login from './pages/login/Login';
import Feedpage from './pages/feedpage/Feedpage';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProtectedRoute from '../src/components/routes/ProtectedRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const hasToken = window.localStorage.getItem("react-token") != "" ? true : false;
  console.log(hasToken)
  return (
    <div className="App">
      {window.location.pathname != "/" && <Navbar/>}
      <Router>
        <Route path="/" exact>
          <Login isAuth={isAuth} setIsAuth={setIsAuth}/>
        </Route>
        <ProtectedRoute path="/home" component={Feedpage} isAuth={hasToken}/>
        <ProtectedRoute path="/a" component={Navbar} isAuth={hasToken}/>
      </Router>
    </div>
  );
}

export default App;