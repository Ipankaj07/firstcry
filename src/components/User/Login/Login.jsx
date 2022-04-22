import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./login.css";

import { loginUserData } from "../../../redux/actions/userAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

    // const data = useSelector((state) => state.user.user);
    // console.log("data ", data);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserData(email, password));
    setEmail("");
    setPassword("");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div
      style={{ backgroundColor: "#fff", minHeight: "90vh", marginTop: "-24px" }}
    >
      <div className="comm-header">
        <img
          src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
          alt="Logo"
          className="img__logo"
          onClick={() => {
            navigate("/");
          }}
        />

        <section className="login__section">
          <div className="login__div">
            <p className=" login__heading">Login</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button type="submit">Login</button>
              </div>
              <div className='l__fot dis-flex' >
                <div>If you don't have an account, please</div>
                <div
                  className="navig__signup"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Register Here
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;

/* 
 <h3>Login Page</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>


*/
