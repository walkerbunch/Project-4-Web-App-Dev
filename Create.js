import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Create({ adder }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const task = {
      title: taskTitle,
      detail: taskDetails,
      date: taskDate,
      id: newId,
    };
    console.log(JSON.stringify(task));
    adder(task);
    setTaskTitle("");
    setTaskDetails("");
    setTaskDate("");
  };
  return (
    <div className="create">
      <h2>New Note</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <br />
        <input
          type="text"
          required
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <br />
        <label>Body: </label>
        <br />
        <input
          type="text"
          required
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
        />
        <br />
        <label> Due Date: </label>
        <br />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <br />
        <button>Add Note</button>
      </form>
    </div>
  );
}
