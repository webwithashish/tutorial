import React from "react";
import "./conceptItem.css";

const ConceptItem = (props) => {
    const data = props.renData.map((item) => {
        return (
            <li key={item.title}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>P{item.description}</p>
            </li>
        );
    });
    return data;
};

export default ConceptItem;
