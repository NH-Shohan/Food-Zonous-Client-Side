import React from "react";
import image from "../../images/404.gif";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img className="mt-5 pt-5" src={image} alt="" />
      <div>
        <Link to={"/home"}>
          <button className="btn btn-warning btn-lg fw-bold mb-5 px-5">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
