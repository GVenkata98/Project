import React, { useState, useEffect } from "react";
import{Link}  from "react-router-dom";
import List from "./order-list"
import "./Jumporder.css"
import axios from "axios";
const Jumporders = () => {
  const currToken = localStorage.getItem("token");
  const [data , setData] = useState("");
  // axios
  //   .get("http://localhost:8080/orders", {
  //     headers: {
  //       Authorization: "test " + currToken,
  //     },
  //   })
  //   .then((response) => setResponse(response));
  // console.log(response);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/orders`, {
        headers: {
          Authorization: "test " + currToken,
        },
      })
      .then((res) => {
        setData(res.data.orders);
        console.log(res.data.orders);
        console.log(res.data.orders[3].washtype);
      });
  }, []);
  const logout = (e)=>{
    console.log("hi....")
    localStorage.clear();
    // let a = 10 , b =2 ;
    // console.log(a*b);
  }

  return (
    <>
      <div className="header">
        <ui className="header-left"> <li className="header-nav"><b>LAUNDRY</b></li></ui>
        <ui className="header-right">
          <li className="light-text header-nav">pricing</li>
          <li className="light-text header-nav">career</li>
          <li className="header-nav li">
            <span><img src={'/img/more.png'} alt="dp" /></span>
            {/* <select className="logout-option">
              <option>User Name</option>
              <option ><button onClick={logout}>Log Out</button></option>
            </select> */}
            <span>User Name</span> 
            <Link to={"/"}>
              <span className="logout">             
                <button onClick={logout}>Log Out</button>
              </span>
            </Link>        
          </li>
        </ui>
      </div>

      
      <div className="sidebar">
        <ui className="sidebar-ui">
          <li className="icons home"><img src={'/img/home-run (1).png'} alt="dp" /></li>
          <li className="icons more"><img src={'/img/more.png'} alt="dp" /></li>
          <li className="icons list"><img src={'/img/list.png'} alt="dp" /></li>
        </ui>
      </div>
      <div className="main-content">
        {/* code goes here */}
        
          {data.length == 0 ?
        <div className="main-header">
          <div id="order">
            <span><b>orders</b></span> | <b>0</b>
          </div>
          <div className="search0">
            <span style={{opacity: "0.5"}}>No orders avalible</span>
            <Link to={"/createorders"}>
              <button type="submit" className="button">Create</button>
            </Link>
          </div>
          <div>
            <i className="fa fa-search" alt="icon" />
            <input type="search" className="input"></input>
          </div>
        </div>
        : <List listData = {data}/>}

      </div>
      <br></br>



      <div className="footer" >
        2022 @ Laundry
      </div>
    </>
  );
};

export default Jumporders;
