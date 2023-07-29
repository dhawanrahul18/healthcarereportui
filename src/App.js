import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
    return (
    <div className="page">
          <Routes>
            <Route index path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
    </div>
    );
}
export default App;
