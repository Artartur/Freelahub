import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import React from "react";

import "../styles/Header.scss";

type HeaderProps = {
  children?: JSX.Element | JSX.Element[] | string;
  description?: string;
  title: string;
};

export default function Header({ children, description, title }: HeaderProps) {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link className="alignment" id="backIcon" to="/">
          <IoIosArrowRoundBack size="4rem" />
          Voltar
        </Link>
        <h1>Freelahub</h1>
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
}
