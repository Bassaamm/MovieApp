import "./App.css";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/Allroutes";
import { ScrollToTop } from "./components/ScrollToTop";
function App() {
  return (
    <div className="App relative">
      <ScrollToTop />
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
