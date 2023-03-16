import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
