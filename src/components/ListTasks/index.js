import React, { useEffect, useState } from "react";
import CardTask from "../CardTask";
import api from "../../services";
import { useTask } from "../../providers/task";
import { List, Line } from "./styles";

const ListTasks = () => {
  const { tasks, getTasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <List>
      {tasks.map((task) => (
        <CardTask key={task.id} task={task} />
      ))}
    </List>
  );
};

export default ListTasks;
