import React from "react";
import EditTask from "../EditTask";
import { Card } from "./styles";
import { MdDone } from "react-icons/md";
import DeletTask from "../DeleteTask";
const CardTask = ({ task }) => {
  return (
    <Card>
      <DeletTask id={task.id} className="close" />
      <h1>
        {task.titulo} <MdDone className="done" />
      </h1>
      <p>{task.descricao}</p>
      <EditTask task={task} />
    </Card>
  );
};

export default CardTask;
