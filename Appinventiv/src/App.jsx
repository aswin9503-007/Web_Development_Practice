import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./Page/HomePage"
import Navbar from "./Component/HomePage/Navbar"
import ContactUs from "./Component/Contact/ContactUs"

const App = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/contact" element={<ContactUs />}/>
            </Routes>
        </Router>
    )
}

export default App;