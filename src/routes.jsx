import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/Not Found";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/register" element={ <Register /> }></Route>
                <Route path="*" element={ <NotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes