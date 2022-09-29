import { useState } from "react";
import "./style.css";

interface SidebarMenuProps {
    isMenuActive: boolean;
}

function SidebarMenu(props: SidebarMenuProps) {

    

    return (
        <nav className={"menu-sidebar" + (props.isMenuActive ? " menu-sidebar--active" : "")}>
            <a className="menu__link menu__link--home" href="#">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="home"><path d="M29.71,15.29l-3-3h0l-10-10a1,1,0,0,0-1.42,0l-10,10h0l-3,3a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L5,15.41V29a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V15.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,15.29ZM25,28H7V13.41l9-9,9,9Z"/></g></svg>
                Home
            </a>
            <a className="menu__link menu__link--wallets menu__link--active" href="#">
                <svg id="asd" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g><path d="M13.5 6V2.5C13.5 1.94772 13.0523 1.5 12.5 1.5L1.5 1.5C0.947716 1.5 0.5 1.94772 0.5 2.5L0.5 12.5C0.5 13.0523 0.947715 13.5 1.5 13.5L12.5 13.5C13.0523 13.5 13.5 13.0523 13.5 12.5V9M14.4307 5.5H9.5C8.39543 5.5 7.5 6.39543 7.5 7.5C7.5 8.60457 8.39543 9.5 9.5 9.5H14.4307C14.469 9.5 14.5 9.46897 14.5 9.43069V5.56931C14.5 5.53103 14.469 5.5 14.4307 5.5Z" stroke="black" fill="none"/></g></svg>
                Wallets
            </a>
            <a className="menu__link menu__link--dividends" href="#">
                <svg enable-background="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><g><path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10   S17.5,22,12,22z"/><path d="M12,7c1.1,0,2,0.9,2,2h2c0-1.9-1.3-3.4-3-3.9V4h-2v1.1C9.3,5.6,8,7.1,8,9c0,2.2,1.8,4,4,4c1.1,0,2,0.9,2,2s-0.9,2-2,2   s-2-0.9-2-2H8c0,1.9,1.3,3.4,3,3.9V20h2v-1.1c1.7-0.4,3-2,3-3.9c0-2.2-1.8-4-4-4c-1.1,0-2-0.9-2-2S10.9,7,12,7z"/></g></svg>
                Dividends
            </a>
            <a className="menu__link menu__link--orders" href="#">
                <svg enable-background="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="6" fill="none" id="XMLID_303_" r="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="5" cy="16" fill="none" id="XMLID_305_" r="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="5" cy="26" fill="none" id="XMLID_304_" r="1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" id="XMLID_29_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="28" y1="6" y2="6"/><line fill="none" id="XMLID_30_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="28" y1="16" y2="16"/><line fill="none" id="XMLID_31_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="28" y1="26" y2="26"/></svg>
                Orders
            </a>
        </nav>
    );
}

export default SidebarMenu;