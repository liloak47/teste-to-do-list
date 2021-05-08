import React, { useEffect } from "react";
import CardTask from "../CardTask";
import { useTask } from "../../providers/task";
import { List } from "./styles";

const ListTasks = () => {
  const { tasks, getTasks, tasksFiltered } = useTask();

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
