import React from "react";
import EditTask from "../EditTask";
import { Card } from "./styles";
const CardTask = ({ task }) => {
  return (
    <Card>
      <h1>{task.titulo}</h1>
      <EditTask task={task} />
      <p>{task.descricao}</p>
    </Card>
  );
};

export default CardTask;
