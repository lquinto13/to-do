import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import CalendarPage from "./pages/CalendarPage";
import AppLayout from "./pages/AppLayout";

function App() {
  const [task, setTask] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="today"
          index
          element={<AppLayout task={task} setTask={setTask} />}
        />
        <Route
          path="calendar"
          index
          element={<CalendarPage task={task} setTask={setTask} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
