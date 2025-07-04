import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUs";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<AboutUS />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
