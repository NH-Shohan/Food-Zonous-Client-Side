import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Registration = () => {
  const {
    signInUsingGoogle,
    toggleLogin,
    isLogin,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
  } = useAuth();
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="w-md-50 bg-light rounded px-5">
        <form className="my-5" onSubmit={handleRegistration}>
          <h1 className="fs-1 text-primary">
            Please {isLogin ? "Login" : "Register"}
          </h1>
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
          <button type="submit" className="btn btn-primary">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button
          onClick={signInUsingGoogle}
          className="btn btn-primary mb-5 px-5"
        >
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Registration;
