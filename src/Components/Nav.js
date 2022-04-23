import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container-navigation-bar">
      <div className="navigation">
        <Link to="/home">Home</Link>
      </div>
      <div className="navigation">
        <Link to="/add">New Question</Link>
      </div>
      <div className="navigation">
        <Link to="/leaderboard">Leaderboard</Link>
      </div>
    </div>
  );
}
