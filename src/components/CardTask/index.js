import React from "react";
import EditTask from "../EditTask";
import { Card } from "./styles";
import { MdDone } from "react-icons/md";
import DeletTask from "../DeleteTask";
const CardTask = ({ task }) => {
  return (
    <Card>
      <div className="id-task">
        <p>{task.id}</p>
        <MdDone className="done" />
      </div>
      <DeletTask id={task.id} className="close" />
      <h2>{task.titulo}</h2>
      <p>{task.descricao}</p>
      <EditTask task={task} />
    </Card>
  );
};

export default CardTask;
