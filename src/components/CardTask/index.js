import React from "react";
import EditTask from "../EditTask";
// import { Container } from './styles';

const CardTask = ({ task }) => {
  return (
    <div>
      <h1>{task.titulo}</h1>
      <EditTask task={task} />
      <p>{task.descricao}</p>
    </div>
  );
};

export default CardTask;
