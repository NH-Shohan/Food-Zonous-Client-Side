import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, isLoading, signInWithGoogle, registerUser } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
    console.log(e.target.checked);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    loginUser(email, password, location, history);
    e.preventDefault();
  };
  const handleRegisterSubmit = (e) => {
    registerUser(email, password, name, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      {isLoading ? (
        <div className="text-center my-5 py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="w-md-50 bg-light rounded px-5">
          <form
            className="my-5"
            onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}
          >
            <h1 className="fs-1 text-warning">
              Please {isLogin ? "Login" : "Register"}
            </h1>
            {!isLogin && (
              <div className="mb-3 text-start">
                <label for="exampleInputtext1" className="form-label">
                  Name
                </label>
                <input
                  onBlur={handleNameChange}
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                  required
                />
              </div>
            )}
            <div className="mb-3 text-start">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 text-start">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3 form-check text-start">
              <input
                onChange={toggleLogin}
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Already Registered
              </label>
            </div>
            {/* <div className="row mb-3 text-danger">{error}</div> */}
            <button type="submit" className="btn btn-warning fw-bold">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-warning m-auto mb-5 d-flex align-items-center justify-content-center"
          >
            <i className="fab fa-google h-25 me-2"></i>
            <p className="fs-5 fw-bold m-auto">Google</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
