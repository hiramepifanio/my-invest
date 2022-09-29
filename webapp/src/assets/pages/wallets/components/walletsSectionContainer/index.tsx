import React from "react";
import "./style.css";


function WalletsSectionContainer(props: React.PropsWithChildren) {
    return (
        <section className="wallets-section__container">
            {props.children}
        </section>
    );
}

export default WalletsSectionContainer;