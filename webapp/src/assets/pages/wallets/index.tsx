import { useState } from "react";
import Header from "../../components/header";
import Main from "../../components/main";
import SectionTitle from "../../components/sectionTitle";
import SidebarMenu from "../../components/sidebarMenu";
import WalletsSectionCard from "./components/walletsSectionCard";
import WalletsSectionContainer from "./components/walletsSectionContainer";
import "./style.css"

function WalletsPage() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <>
            <Header setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive}/>
            <SidebarMenu isMenuActive={isMenuActive}/>
            <Main>
                <WalletsSectionContainer>
                    <SectionTitle title="Wallets"/>
                    <WalletsSectionCard title="Dividendos" assetsNumber={12} variation={7.2}/>
                    <WalletsSectionCard title="Dividendos" assetsNumber={12} variation={7.2}/>
                    <WalletsSectionCard title="Dividendos" assetsNumber={12} variation={7.2}/>
                </WalletsSectionContainer>
            </Main>
        </>
    );
}

export default WalletsPage;