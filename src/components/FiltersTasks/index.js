import React from "react";
import { useTask } from "../../providers/task";
import { List } from "../ListTasks/styles";
import CardTask from "../CardTask";

const FiltersTasks = () => {
  const { tasksFiltered } = useTask();

  return (
    <div>
      <List>
        {tasksFiltered.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </List>
    </div>
  );
};

export default FiltersTasks;
