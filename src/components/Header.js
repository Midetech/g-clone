import React from "react";
import "../components/header.css";

export default function Header() {
  return (
    <div className="main-header">
      <div className="navigation">
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="/">Gmail</a>
          </li>
          <li>
            <a className="nav-link" href="/">Images</a>
          </li>
        </ul>
        <img
          src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
          width="35"
          height="35"
          className="app-icon"
          alt="google apps"
        />
        <img
          src="https://lh3.googleusercontent.com/-2qVmKNbbkWQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf08XhxMW9lyB5gbcMqMo9QCemDtQ.CMID/s64-c/photo.jpg"
          width="40"
          height="40"
          className="pic-icon"
          alt="pic"
        />
      </div>
    </div>
  );
}
