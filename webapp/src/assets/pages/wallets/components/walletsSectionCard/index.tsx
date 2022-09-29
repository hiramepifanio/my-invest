import React from "react";
import "./style.css";

interface WalletsSectionCard {
    title: string;
    assetsNumber: number;
    variation: number;
}

function WalletsSectionCard(props: WalletsSectionCard) {
    return (
        <div className="card wallet-card">
            <div className="wallet-card__title-container">
                <h3 className="wallet-card__title">{props.title}</h3>
            </div>
            <div className="wallet-card__details">
                <span className="wallet-card__details--actives">{props.assetsNumber} assets</span>
                <span className="wallet-card__details--variation">{props.variation}%</span>
            </div>
            <div className="wallet-card__menu">
                <button className="wallet-card__menu__button wallet-card__menu__button--edit">
                    <svg className="feather feather-edit" fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button className="wallet-card__menu__button wallet-card__menu__button--delete">
                    <svg data-name="Layer 1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
                </button>
            </div>
        </div>
    );
}

export default WalletsSectionCard;