import React, { useEffect, useState } from "react";
const baseURL = "http://localhost:4000/task/";

const Alltasks = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}get_all_task`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);
  return <></>;
};

export default Alltasks;
