import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Category from "./components/Category";
import GlobalStyles from "./components/styles/Global";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
