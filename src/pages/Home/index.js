import React, { useEffect, useState } from "react";
import ListTasks from "../../components/ListTasks";
import SearchTask from "../../components/SearchTask";
import Create from "../../components/CreateTask";
import { useTask } from "../../providers/task";
import "./style.scss";

const Home = () => {
  const { tasks, getTasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      <section className="box-main">
        <div className="group-one">
          <SearchTask />
          <Create />
        </div>
        <ListTasks tasks={tasks} />
      </section>
    </div>
  );
};

export default Home;
