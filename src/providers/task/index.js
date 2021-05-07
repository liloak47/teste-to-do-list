import { createContext, useContext, useState } from "react";
import api from "../../services";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [titulo, setTitulo] = useState("");
  const [editTitulo, setEditTitulo] = useState("");
  const [editDescricao, setEditDescricao] = useState("");

  const [descricao, setDescricao] = useState("");

  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    api.get("/tarefas").then((resp) => setTasks(resp.data));
    console.log(tasks);
  };

  const createTask = () => {
    api
      .post("/tarefas", {
        titulo: titulo,
        descricao: descricao,
      })
      .then(() => getTasks());
  };

  const editTasks = (id) => {
    api
      .patch(`/tarefas/${id}`, { titulo: editTitulo, descricao: editDescricao })
      .then(() => getTasks());
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        getTasks,
        createTask,
        titulo,
        descricao,
        setTitulo,
        setDescricao,
        editTasks,
        setEditTitulo,
        setEditDescricao,
        editTitulo,
        editDescricao,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
