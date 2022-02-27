import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import GlobalStyles from "./components/styles/Global";
import AppRouting from "./components/Routing/appRouting";
import { AppContextProvider } from "./Context/appContext";

function App() {
  return (
    <div>
      <GlobalStyles />
      <AppContextProvider>
      <Header />
      <AppRouting />
      </AppContextProvider>
      <Footer />
    </div>
  );
}

export default App;
