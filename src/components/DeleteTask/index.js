import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTask } from "../../providers/task";

const DeleteTask = ({ id }) => {
  const { deleteTask } = useTask();
  return (
    <div className="svg-box">
      <AiOutlineCloseCircle onClick={() => deleteTask(id)} />
    </div>
  );
};

export default DeleteTask;
