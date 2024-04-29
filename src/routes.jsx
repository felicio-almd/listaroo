import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function AppRoutes() {
    const storedUsername = localStorage.getItem("username");
    
    return (
        <BrowserRouter>
            <Routes>
                {storedUsername ? (
                    <Route path="/" element={<Home />} />
                ) : (
                    <Route path="/" element={<Navigate to="/login" />} />
                )}
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
