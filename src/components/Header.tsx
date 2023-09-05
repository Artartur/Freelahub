import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import React from "react";

import "../styles/Header.scss";

export default function Header({ children, title }: HeaderProps) {
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
        {children}
      </div>
    </header>
  );
}

type HeaderProps = {
    children?: JSX.Element | JSX.Element[] | string;
    title: string;
  };
