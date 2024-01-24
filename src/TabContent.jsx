import React from "react";

function TabContent(props) {
    // console.log(props.content);
    if (!props.content)
        return (
            <div
                id="tab-content"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {" "}
                Please select the Topic !
            </div>
        );
    return (
        <div id="tab-content">
            <h3>{props.content.title}</h3>
            <p>{props.content.description}</p>
            <pre>
                <code>{props.content.code}</code>
            </pre>
        </div>
    );
}

export default TabContent;
