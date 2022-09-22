import Footer from "./components/FOOTER/footer";
import Endfooter from "./components/FOOTER/Endfooter";
import Header from "./components/Header";
import Register from "./components/Register";
import Scheme from "./components/Scheme";
import Login from "./components/Login";
import Createorders from "./components/Createorders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/createorders" element={<Createorders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
