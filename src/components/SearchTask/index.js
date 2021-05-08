import React, { useState, useEffect } from "react";
import { useTask } from "../../providers/task";
import { BsSearch } from "react-icons/bs";
const SearchTask = () => {
  const [typedText, setTypedText] = useState("");
  const { tasks, getTasks, setTasksFiltered } = useTask();

  const filteredTasks = () => {
    setTasksFiltered(
      tasks.filter((task) =>
        task.titulo?.toLowerCase().includes(typedText?.toLocaleLowerCase())
      )
    );
  };

  const verifyInput = () => {
    if (typedText === "") {
      getTasks();
    }
  };

  useEffect(() => {
    filteredTasks();
    getTasks();
    verifyInput();
  }, [typedText]);

  return (
    <div className="box-src">
      <input
        type="text"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
        placeholder="Procure uma Tarefa"
      />
      <BsSearch />
    </div>
  );
};

export default SearchTask;
