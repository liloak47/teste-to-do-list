import React from "react";

// import { Container } from './styles';

const CardTask = ({ task }) => {
  return (
    <div>
      <h1>{task.titulo}</h1>
      <p>{task.descricao}</p>
    </div>
  );
};

export default CardTask;
