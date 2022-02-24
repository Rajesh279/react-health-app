import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styles/Global";
import AppRouting from "./components/routing/AppRouting";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <AppRouting />
      <Footer />
    </div>
  );
}

export default App;
