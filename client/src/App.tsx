import "./App.css";
import Navbar from "./componets/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTaskPage from "./Pages/MyTaskPage";
import NewTask from "./Pages/NewTask";
import EditTaskPage from "./Pages/EditTaskPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MyTask" element={<MyTaskPage />} />
          <Route path="/NewTask" element={<NewTask />} />
          <Route path="/EditTask" element={<EditTaskPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
