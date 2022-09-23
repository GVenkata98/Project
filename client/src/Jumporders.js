import React, { useState, useEffect } from "react";
import axios from "axios";
const Jumporders = () => {
  const currToken = localStorage.getItem("token");
  // const [response, setResponse] = useState("");
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
        console.log(res);
      });
  }, []);

  return <div>Jumporders</div>;
};

export default Jumporders;
