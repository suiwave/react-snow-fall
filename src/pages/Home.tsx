import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
            <Link to="/about" className="bg-yellow-200">Go to About</Link>
        </div>
    );
};

export default Home;