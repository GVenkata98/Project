import React, { useState } from "react";
import "./login.css";
import Header from "./Header";
import Footer from "./FOOTER/footer";
import Endfooter from "./FOOTER/Endfooter";
import Scheme from "./Scheme";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [logindata, updatedlogindata] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(logindata);
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindata),
    })
      .then((data) => data.json())
      .then((response) => setResponse(response));
    console.log(response.token);
    localStorage.setItem("token", response.token);
    navigate("/createorders");
    // if (response.status != "failed") {
    //   navigate("/");
    // }
  };
  return (
    <div>
      <Header />
      <div className="firstpage">
        <div className="firstmaincontent">
          <div className="firstleftmain">
            <div className="firstleftcontent">
              <h2 className="firstheading2">Laundry Service</h2>
              <p className="firstdescription1">
                Doorstep Wash and Drycelan Service
              </p>
              <p className="firsthaveaccount1">Dont Have An Account?</p>
              <Link to="/register">
                <button className="firstregister-button">Register</button>
              </Link>
            </div>
          </div>
          <div className="firstrightmain">
            <div className="firstrightcontent">
              <h2 className="firstheading3">SIGN IN</h2>
              <form className="loginform" onSubmit={handlesubmit}>
                <label className="firstemail">Email/Mobile</label>
                <br />
                <input
                  name="userdetails"
                  required
                  onChange={(e) =>
                    updatedlogindata({
                      ...logindata,
                      userdetails: e.target.value,
                    })
                  }
                />
                <p
                  style={{
                    color: "red",
                    margin: "-22px",
                    fontSize: "12px",
                    marginLeft: "220px",
                  }}
                >
                  {response.messageuser}
                </p>
                <br />
                <label className="firstpassword">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  required
                  onChange={(e) =>
                    updatedlogindata({ ...logindata, password: e.target.value })
                  }
                />
                <p
                  style={{
                    color: "red",
                    margin: "-22px",
                    fontSize: "12px",
                    marginLeft: "220px",
                  }}
                >
                  {response.messagepass}
                </p>
                <br />
                <span className="firstforget">Forget Password?</span>
                <br />
                <button
                  type="submit"
                  value="Login"
                  className="firstsigninbutton"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <Scheme />

        <Footer />
        <Endfooter />
      </div>
    </div>
  );
};

export default Login;
