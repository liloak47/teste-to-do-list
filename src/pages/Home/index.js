import React from "react";
import ListTasks from "../../components/ListTasks";
import SearchTask from "../../components/SearchTask";
// import { Container } from './styles';

const Home = () => {
  return (
    <div>
      <SearchTask />
      <ListTasks />
    </div>
  );
};

export default Home;
