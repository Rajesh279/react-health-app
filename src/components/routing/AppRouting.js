import { Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import Doctors from "../Doctors/doctors";

function AppRouting() {
  return (
    <Routes>
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default AppRouting;
