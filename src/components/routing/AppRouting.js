import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Category from "../Category";

function AppRouting() {
  return (
    <Routes>
      <Route path="/category" element={<Category />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default AppRouting;
