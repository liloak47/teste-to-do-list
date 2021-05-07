import React, { useEffect, useState } from "react";
import ListTasks from "../../components/ListTasks";
import SearchTask from "../../components/SearchTask";
import Create from "../../components/CreateTask";
import { useTask } from "../../providers/task";

// import { Container } from './styles';

const Home = () => {
  const { tasks, getTasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      <Create />
      <SearchTask />
      <ListTasks tasks={tasks} />
    </div>
  );
};

export default Home;
