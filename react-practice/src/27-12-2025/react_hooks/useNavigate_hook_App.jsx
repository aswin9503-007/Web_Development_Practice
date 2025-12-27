
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./useNavigate_hook_home";
import About from "./useNavigate_hook_about";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;