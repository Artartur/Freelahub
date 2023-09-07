import React, { useState } from "react";

import Header from "../components/Header";
import Select from "../components/Select";

import { constants } from "../utils/constants";
import { EventType } from "../utils";
import { modality, service, skills } from "../utils/maps";

import "../styles/ProjectList.scss";

export default function ProjectList() {
  const [data, setData] = useState({
    modality: "",
    service: "",
    skills: "",
  });

  const handleChange = (e: EventType) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value);
  };

  return (
    <div id="page-project-list" className="container">
      <Header title={constants["available-projects"]}>
        <form id="search">
          <Select
            label={constants["service"]}
            name="service"
            options={service}
            onChange={handleChange}
            value={data.service}
          />

          <Select
            label={constants["modality"]}
            name="modality"
            options={modality}
            onChange={handleChange}
            value={data.modality}
          />

          <Select
            label={constants["skills"]}
            name="skills"
            options={skills}
            onChange={handleChange}
            value={data.skills}
          />
        </form>
      </Header>
    </div>
  );
}
