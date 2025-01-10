import "./App.css";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/payment"} element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
