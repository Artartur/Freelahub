import React from "react";

import { BsSearch } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPersonSearch } from "react-icons/md";

import { constants } from "../utils/constants";

import greetingImage from "../assets/greetingImage.png";
import "../styles/Greeting.scss";

export default function Greeting() {
  return (
    <div id="page-greeting" className="alignment">
      <div id="page-greeting-content" className="container">
        <div className="logo-container">
          <h1>Freelahub</h1>
          <h2>Unindo Freelancers e clientes em um só lugar!</h2>
        </div>

        <img
          alt="Plataforma de freelancer"
          className="greet-image"
          src={greetingImage}
        />

        <div id="buttons-container" className="alignment">
          <Link className="lookForProjects" to="/projectList">
            <BsSearch alt="Procurar Projetos" className="icon" size="3rem" />
            {constants["look-for-projects"]}
          </Link>
          <Link className="hire" to="/projectForm">
            <MdPersonSearch alt="Contratar" className="icon" size="3rem" />
            {constants["hire"]}
          </Link>
        </div>

        <span id="total-connections" className="alignment">
          Total de 200 projetos ja entregues
          <FaRegHandshake className="handshake-icon" size="3rem" />
        </span>
      </div>
    </div>
  );
}
