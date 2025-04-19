import React from "react";
import errorImage from "./../assets/error.png";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="d-flex flex-column justify-content-center  ">
      <h1 className="text-center">Page Not Found!</h1>
      <div className="text-center my-3">
        <img className="img-fluid col-3 " src={errorImage} alt="..." />
      </div>
      {/* <button className="btn btn-two align-self-center col-2 row-5"> */}
          <Link className="link-no-decoration align-self-center" to="/">
            <h2>Click Here To Back Home {">>"}</h2>
          </Link>
        
      {/* </button> */}
    </div>
  );
}

export default ErrorPage;
