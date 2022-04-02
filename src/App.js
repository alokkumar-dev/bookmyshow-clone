import "./App.css";

import { Navbar } from "./components/navbar";
import { Router } from "./Routes/Router";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
