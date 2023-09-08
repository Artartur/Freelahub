import Header from "../components/Header";
import React from "react";

import "../styles/ProjectForm.scss";

export default function ProjectForm() {
  return (
    <div id="page-project-form" className="container">
      <Header
        description="O primeiro passo, é preencher esse formulario de inscrição de seu projeto"
        title="Que incrível que voce quer começar seu projeto conosco."
      />
      <main>
        <form>
          <fieldset>
            <legend>Seus Dados</legend>
          </fieldset>
        </form>
      </main>
    </div>
  );
}
