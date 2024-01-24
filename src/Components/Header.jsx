import ReactImg from "../assets/react-core-concepts.png";
import "./header.css";

const ReactDescription = ["Fundamental", "Crucial", "Core"];
const genRandomNum = function (max) {
    return Math.floor(Math.random() * (max + 1));
};

const Header = function () {
    const description = ReactDescription[genRandomNum(2)];
    return (
        <header>
            <img src={ReactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                <span style={{ color: "#03d5ff", textTransform: "uppercase" }}>
                    {description}
                </span>{" "}
                React concepts you will need for almost any app you are going to
                build!
            </p>
        </header>
    );
};

export default Header;
