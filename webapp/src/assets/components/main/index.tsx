import React from "react";
import "./style.css";

function Main(props: React.PropsWithChildren) {
    return(
        <main className="main">
            {props.children}
        </main>
    );
}

export default Main;