import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import CalendarPage from "./pages/CalendarPage";
import TaskTodayPage from "./pages/TaskTodayPage";
import StickyWallPage from "./pages/StickyWallPage";
import AppLayout from "./pages/AppLayout";

function App() {
  const [task, setTask] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout task={task} />}>
          <Route
            path="today"
            element={<TaskTodayPage task={task} setTask={setTask} />}
          />
          <Route
            path="stickywall"
            element={<StickyWallPage task={task} setTask={setTask} />}
          />
          <Route
            path="calendar"
            element={<CalendarPage task={task} setTask={setTask} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
