import { createContext, useContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  return <TaskContext.Provider>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);
