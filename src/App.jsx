import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import PlansProgram from "./Pages/PlansProgram";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import CreateCourse from "./components/CreateCourse/CreateCourse";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/plansProgram" element={<PlansProgram />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin-dashboard/create-course"
          element={<CreateCourse />}
        />
      </Routes>
    </div>
  );
}

export default App;
