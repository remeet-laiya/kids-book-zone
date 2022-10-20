import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Kids Book Zone
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>Orders</span>
          {size != 0 ? <span>{size}</span> : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
