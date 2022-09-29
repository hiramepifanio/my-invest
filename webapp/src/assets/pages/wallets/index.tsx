import { useState } from "react";
import Header from "../../components/header";
import SidebarMenu from "../../components/sidebarMenu";

function WalletsPage() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <>
            <Header setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive}/>
            <SidebarMenu isMenuActive={isMenuActive}/>
        </>
    );
}

export default WalletsPage;