import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./Page/HomePage"
import Navbar from "./Component/HomePage/Navbar"
import ContactUs from "./Component/Contact/ContactUs"
import InventivAIPage from "./Page/InventivAiPage"


const App = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/contact" element={<ContactUs />}/>
                <Route path="/inventiveai" element={<InventivAIPage />} />
            </Routes>
        </Router>
    )
}

export default App;