import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In user:", userCredential);
        navigate("/");
      })
      .catch((error) => alert(error));
  };
  const register = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Created user:", userCredential);
        navigate("/");
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h2>Sign In</h2>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            name="email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signIn" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agreed to Amazon's condition of use & sale. Please
          see our privacy notice, our cookies notice and our Interest-Based Ads
        </p>
        <button className="login__register" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
