import React from "react";
import "./style.css";

interface SectionTitleProps {
    title: string;
}

function SectionTitle(props: SectionTitleProps) {
    return (
        <div className="section-title__container">
            <h2>{props.title}</h2>
        </div>
    );
}

export default SectionTitle;