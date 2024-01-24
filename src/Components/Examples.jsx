import React, { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "../TabContent";

const EXAMPLES = {
    components: {
        title: "Components",
        description:
            "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
        code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    jsx: {
        title: "JSX",
        description:
            "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
        code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    props: {
        title: "Props",
        description:
            "Components accept arbitrary inputs called props. They are like function arguments.",
        code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    state: {
        title: "State",
        description:
            "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
        code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
};

const exampleTitles = ["components", "jsx", "props", "state"];
function Examples() {
    const [selectedContent, setSelectedContent] = useState(null);

    const onClickHandler = function (e) {
        // console.log(e.target.value);
        setSelectedContent(e.target.value);
    };

    const data = exampleTitles.map((item) => {
        return (
            <TabButton
                key={item}
                isSelected={selectedContent === item}
                onClick={onClickHandler}
                label={item}
            ></TabButton>
        );
    });

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {/* <TabButton
                    onClick={onClickHandler}
                    label={"components"}
                ></TabButton>
                <TabButton onClick={onClickHandler} label={"jsx"}></TabButton>
                <TabButton onClick={onClickHandler} label={"props"}></TabButton>
                <TabButton onClick={onClickHandler} label={"state"}></TabButton> */}
                {data}
            </menu>
            <TabContent content={EXAMPLES[selectedContent]}></TabContent>
        </section>
    );
}

export default Examples;
