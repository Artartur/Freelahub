import React from "react";
import Header from "../components/Header";
import "../styles/ProjectList.scss";

export default function ProjectList() {
  return (
    <div id="page-project-list" className="container">
      <Header title="Projetos disponiveis">
        <form id="search">
          <div className="input-block">
            <label htmlFor="stack">Funcao</label>
            <input id="stack" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input id="week_day" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input id="time" type="time" />
          </div>
        </form>
      </Header>
    </div>
  );
}
