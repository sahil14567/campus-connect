import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Job from "./pages/Job";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/student-login"
          element={<Login />}
        />

        <Route
          path="/admin-login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/Job"
          element={<Job />}
        />

        <Route
          path="/admin"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;