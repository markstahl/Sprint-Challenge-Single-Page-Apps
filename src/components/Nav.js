  
import React from "react";
import {Link} from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/" className="nav-link">Home </Link>
      <Link to="/characterlist" className="nav-link">Characters </Link>
      <Link to="/locationlist" className="nav-link">Locations</Link>
    </div>
  );
}