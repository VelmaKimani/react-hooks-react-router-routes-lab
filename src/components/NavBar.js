import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {
  return <div className="navbar">
    <NavLink to="/">Home</NavLink> <break></break>
    <NavLink to="/actors">Actors</NavLink> <break></break>
    <NavLink to="/directors">Directors</NavLink> <break></break>
    <NavLink to="/movies">Movies</NavLink> <break></break>
  </div>;
}

export default NavBar;