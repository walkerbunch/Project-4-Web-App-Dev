import "./styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import TaskDetails from "./TaskDetails";
import NotFound from "./NotFound";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const [data, setData] = useState([
    {
      title: "Finish React notes app",
      detail: "Reminder: finish Project 4 notes app in Web App Development",
      date: "2024-7-22",
      id: "0",
    },
    {
      title: "Thank You!",
      detail:
        "Thank you, Professor Gonzalez, for such an illuminating, interesting, and flexible course this summer! I truly enjoyed getting to learn web development from you. This is something I hope to carry on learning and I am extremely grateful to have had your guidance! As always, it was a pleasure taking your class. All the best! -- Walker",
      date: "2024-7-23",
      id: "1",
    },
  ]);

  const deleteTask = function (id) {
    setData((data) => data.filter((task) => task.id != id));
  };

  const addTask = function (task) {
    setData((data) => [...data, task]);
    console.log(data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <title>Notes App</title>
        <Navbar />
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home data={data} />} />
            <Route path="/create" element={<Create adder={addTask} />} />
            <Route
              path="/tasks/:taskId"
              element={<TaskDetails data={data} deleter={deleteTask} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <BottomNav />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
