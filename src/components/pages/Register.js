import React, { useState } from 'react';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebase/config";
import { Link, useHistory } from 'react-router-dom';

const events = [
  { id: 1, name: 'Event 1' },
  { id: 2, name: 'Event 2' },
  { id: 3, name: 'Event 3' },
  { id: 4, name: 'Event 4' }
];

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  let navigate = useHistory();

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedEvents([...selectedEvents, id]);
    } else {
      setSelectedEvents(selectedEvents.filter((i) => i !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match");
    }
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("Registration Successful...")
    navigate.push("/login");
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false);
  });
  };

  return (
    <>
    <ToastContainer />
    {isLoading && <loader/>}
    <div className="register">
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
      </label>
      <br />
      <h3>Select events to register for:</h3>
      {events.map((event) => (
        <div key={event.id}>
          <input
            type="checkbox"
            id={event.id}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={event.id}>{event.name}</label>
        </div>
      ))}
      <br />
      <button type="submit">Register</button>
    </form>
    </div>
    </>
  );
}

export default Register;
