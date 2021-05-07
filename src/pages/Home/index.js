import React, { useEffect, useState } from "react";
import ListTasks from "../../components/ListTasks";
import SearchTask from "../../components/SearchTask";
import Create from "../../components/CreateTask";
import { useTask } from "../../providers/task";
import { BoxMain, Title } from "./style";

const Home = () => {
  const { tasks, getTasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <BoxMain>
      <Title>
        Um <b>novo</b> jeito simples não <b>procrastinar</b> seu dia
        <b>!</b>
      </Title>
      <div className="box-create">
        <p>
          Comece agora a se organizar, clique aqui para criar uma nova tarefa !
        </p>
        <Create />
      </div>
      <div className="group-one">
        <SearchTask />
      </div>
      <ListTasks tasks={tasks} />
    </BoxMain>
  );
};

export default Home;
