import React, { useState } from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from "./index.module.css";

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "uncompleted") {
      return !todo.completed;
    }
    return true;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <div className={styles.filterButtons}>
        <button
          className={styles.filterButton}
          onClick={() => handleFilterChange("all")}
        >
          Show all
        </button>
        <button
          className={styles.filterButton}
          onClick={() => handleFilterChange("completed")}
        >
          Show completed
        </button>
        <button
          className={styles.filterButton}
          onClick={() => handleFilterChange("uncompleted")}
        >
          Show uncompleted
        </button>
      </div>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
