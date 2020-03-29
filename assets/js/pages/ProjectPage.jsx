import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectPage = props => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then(response => response.data["hydra:member"])
      .then(data => setProject(data))
      .catch(error => console.log(error.response));
  }, []);
  const handleDelete = id => {
    console.log(id);
    axios
      .delete("http://localhost:8000/api/projects/" + id)
      .then(response => console.log(response));
  };

  return (
    <>
      <h1>Listes des projets</h1>
      <div className='jumbotron'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>id</th>
              <th>Nom du Projet</th>
              <th>Description</th>
              <th>Docker du projet</th>
              <th>Date de création du projet </th>
              <th>Date de Mise à jour du projet </th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.docker}</td>
                <td>{project.createdAt}</td>
                <td>{project.updateAt}</td>
                <td></td>
                <td>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className='btn btn-sm btn-danger'>
                    supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectPage;
