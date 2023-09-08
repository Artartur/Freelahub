import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { constants } from "../utils/constants";
import "../styles/Card.scss";

interface CardProps {
  description?: string;
  modality?: string;
  title?: string;
  skills?: string;
  value?: string;
}

export default function Card({
  description,
  modality,
  skills,
  title,
  value,
}: CardProps) {
  return (
    <article className="project-item">
      <header>
        <div>
          <strong>{title}</strong>
          <span>Habilidades: {skills}</span>
        </div>
      </header>
      <main>
        <p>{description}</p>
      </main>
      <footer>
        <div>
          <span>{modality}</span>
          <strong>R$ {value}</strong>
        </div>
        <button type="button">
          <FaRegHandshake alt="Fazer proposta" size="2rem"/>
          {constants["make-proposal"]}
        </button>
      </footer>
    </article>
  );
}
