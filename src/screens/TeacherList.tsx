import React from "react";
import Header from "../components/Header";
import "../styles/TeacherList.scss";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Professores disponiveis">
        <form id="search">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input id="subject" type="text" />
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
