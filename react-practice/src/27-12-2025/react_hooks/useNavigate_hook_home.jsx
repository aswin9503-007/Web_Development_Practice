
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 style={{ color: "red" }}>
                Hi Everyone This is Aswin. What to know more, then go to About.
            </h1>
            <button onClick={() => navigate("/about")}>
                About
            </button>
        </>
    );
};
export default Home;