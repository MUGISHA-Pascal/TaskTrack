import React, { useEffect } from "react";
const baseURL = "http://localhost:4000/task/";

const Alltasks = () => {
  useEffect(() => {
    fetch(`${baseURL}get_all_task`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
  return <></>;
};

export default Alltasks;
