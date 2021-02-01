import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";

const Header = ({ auth }) => {
  const loginContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return [
          <li key="stinky-pay-me">
            <Payments />
          </li>,
          <li key="goo-goo-gaga">
            <a href="/api/logout">Logout</a>
          </li>,
          <li key="trees" style={{margin:'0 10px'}}>
            Credits: {auth.credits}
          </li>,
        ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? "/surveys" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul id="nav-mobile" className="right">
          {loginContent()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
