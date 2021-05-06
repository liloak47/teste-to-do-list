import React, { useEffect, useState } from "react";
import CardTask from "../CardTask";
import api from "../../services";
import { useTask } from "../../providers/task";

const ListTasks = () => {
  const { tasks, getTasks } = useTask();

  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <CardTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTasks;
