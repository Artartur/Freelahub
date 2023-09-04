import React from "react";

import { FaChalkboardUser } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { Link } from "react-router-dom";

import greetingImage from "../assets/greetingImage.png";
import "../styles/Greeting.scss";
export default function Greeting() {
  return (
    <div id="page-greeting" className="alignment">
      <div id="page-greeting-content" className="container">
        <div className="logo-container">
          <h1>Smarthub</h1>
          <h2>Ensine e estude sem sair de casa e em um so lugar!</h2>
        </div>

        <img
          alt="Plataforma de estudos"
          className="greet-image"
          src={greetingImage}
        />

        <div id="buttons-container" className="alignment">
          <Link className="study" to="/teacherList">
            <GiBookmarklet alt="Estudar" className="icon" size="3rem" />
            Estudar
          </Link>
          <Link className="teach" to="/teacherForm">
            <FaChalkboardUser alt="Ensinar" className="icon" size="3rem" />
            Ensinar
          </Link>
        </div>

        <span id="total-connections" className="alignment">
          Total de 200 conexoes ja realizadas
          <FaRegHandshake className="handshake-icon" size="3rem" />
        </span>
      </div>
    </div>
  );
}
