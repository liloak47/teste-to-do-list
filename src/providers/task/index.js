import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    await api.get("/tarefas").then((resp) => setTasks(resp.data));
  };

  useEffect(() => {
    getTasks();
  }, [tasks]);

  console.log(tasks);
  return (
    <TaskContext.Provider value={{ tasks, setTasks, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
