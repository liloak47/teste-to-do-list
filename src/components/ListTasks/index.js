import React, { useEffect, useState } from "react";
import CardTask from "../CardTask";
import api from "../../services";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    await api.get("/tarefas").then((resp) => setTasks(resp.data));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <CardTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTasks;
