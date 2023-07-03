import React, { useState, useEffect } from "react";
import "./Home.css";
import Task from "../Task/Task";

const Home = () => {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initialArray);
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { titel, description }]);
    setTitel("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArr);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="container">
        <h1>Add Your Docunents</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="titel"
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="btn1" type="submit">
            Add
          </button>
        </form>
      </div>
      {tasks.map((item, index) => (
        <Task
          key={index}
          titel={item.titel}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </>
  );
};

export default Home;
