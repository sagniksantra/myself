import React, { useState } from 'react';
import '../../App.css';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/config";
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setIsLoading(false);
    toast.success("Login Successful...");
    navigate.push("/"); // Navigate to home page
  })
  .catch((error) => {
    setIsLoading(false);
    toast.error(error.message)
  });

  }

  return (
    <>
    <ToastContainer />
    {isLoading && <loader/>}
    <div className="log-in">
    <form onSubmit={handleSubmit}>
      
      <label>
        Username:
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />

      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
    </>
  );
}

export default Login;
