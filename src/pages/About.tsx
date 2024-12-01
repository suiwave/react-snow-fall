import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About Page.</p>
            <Link to="/" className="bg-green-200">Go to Home</Link>
        </div>
    );
};

export default About;