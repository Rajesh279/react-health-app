import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import GlobalStyles from "./components/styles/Global";
import AppRouting from "./components/Routing/AppRouting";

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
