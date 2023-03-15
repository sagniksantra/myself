import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/pages/Register';
import Events from './components/pages/Events';
import Login from './components/pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/events' component={Events} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
