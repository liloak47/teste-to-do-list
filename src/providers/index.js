import React from "react";
import { useTask } from "./task";
// import { Container } from './styles';

const Providers = ({ children }) => {
  return (
    <>
      <useTask>{children}</useTask>
    </>
  );
};

export default Providers;
