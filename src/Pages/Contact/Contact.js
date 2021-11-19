import React from "react";
import image from "../../images/contact.png";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="mt-5 pt-5">Contact Us</h1>
      <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
      <div className="row g-3">
        <img className="col-md-6" src={image} alt="" />
        <form className="mt-md-5 pt-5 col-md-6">
          <div className="form-floating mb-3 ">
            <input
              type="text"
              className="form-control border-warning"
              id="floatingInput"
              placeholder="name"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control border-warning"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control border-warning"
              id="floatingInput"
              placeholder="Phone Number"
            />
            <label for="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control border-warning"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "160px" }}
            ></textarea>
            <label for="floatingTextarea2">Leave a comment here</label>
          </div>
          <button
            type="button"
            className="btn btn-outline-warning btn-lg mt-3 mb-5 text-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
