import React from "react";
import ListTasks from "../../components/ListTasks";
import SearchTask from "../../components/SearchTask";
import Create from "../../components/CreateTask";

// import { Container } from './styles';

const Home = () => {
  return (
    <div>
      <Create />
      <SearchTask />
      <ListTasks />
    </div>
  );
};

export default Home;
