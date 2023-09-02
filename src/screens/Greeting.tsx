import React from "react";

import { FaChalkboardUser } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";

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
          <a className="study" href="">
            <GiBookmarklet alt="Estudar" className="icon" size="3rem" />
            Estudar
          </a>
          <a className="teach" href="">
            <FaChalkboardUser alt="Ensinar" className="icon" size="3rem" />
            Ensinar
          </a>
        </div>

        <span id="total-connections" className="alignment">
          Total de 200 conexoes ja realizadas
          <FaRegHandshake className="handshake-icon" size="3rem" />
        </span>
      </div>
    </div>
  );
}
