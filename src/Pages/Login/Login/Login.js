import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const {
    signInUsingGoogle,
    toggleLogin,
    isLogin,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    handleNameChange,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="d-flex justify-content-center my-5">
      if (isLoading) ?
      {
        <div class="text-center d-none">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
      }
      :
      {
        <div className="w-md-50 bg-light rounded px-5">
          <form className="my-5" onSubmit={handleRegistration}>
            <h1 className="fs-1 text-warning">
              Please {isLogin ? "Login" : "Register"}
            </h1>
            {!isLogin && (
              <div class="mb-3 text-start">
                <label for="exampleInputtext1" class="form-label">
                  Name
                </label>
                <input
                  onBlur={handleNameChange}
                  type="text"
                  class="form-control"
                  id="exampleInputtext1"
                  required
                />
              </div>
            )}
            <div class="mb-3 text-start">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                onBlur={handleEmailChange}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3 text-start">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                onBlur={handlePasswordChange}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div class="mb-3 form-check text-start">
              <input
                onChange={toggleLogin}
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Already Registered
              </label>
            </div>
            <div className="row mb-3 text-danger">{error}</div>
            <button type="submit" className="btn btn-warning fw-bold">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-warning m-auto mb-5 d-flex align-items-center justify-content-center"
          >
            <i className="fab fa-google h-25 me-2"></i>
            <p className="fs-5 fw-bold m-auto">Google</p>
          </button>
        </div>
      }
    </div>
  );
};

export default Login;
