import react from "react";
import "./orderHeader.css";
import Profilepic from "../images/profilepic.png";

const OrderHeader = () => {
  return (
    <div className="navbar">
      <div className="navleft">Laundary</div>
      <div className="navright">
        <div className="pricecareer">
          <div>Price</div>
          <div>career</div>
        </div>

        <div className="imagenusername">
          <div className="profileimagec">
            <img className="profileimage" src={Profilepic} alt="profilepic" />
          </div>
          <div>
            <h3 className="profileuser">User name</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderHeader;
