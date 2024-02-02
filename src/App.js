import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import CalendarPage from "./pages/CalendarPage";
import TaskTodayPage from "./pages/TaskTodayPage";
import StickyWallPage from "./pages/StickyWallPage";
import AppLayout from "./pages/AppLayout";
import TaskPage from "./pages/TaskPage";

function App() {
  const [task, setTask] = useState([]);
  const [stickyNotes, setStickyNotes] = useState([]);
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
            element={
              <StickyWallPage
                stickyNotes={stickyNotes}
                setStickyNotes={setStickyNotes}
              />
            }
          />
          <Route
            path="calendar"
            element={<CalendarPage task={task} setTask={setTask} />}
          />
          <Route
            path="task/:date"
            element={<TaskPage task={task} setTask={setTask} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
