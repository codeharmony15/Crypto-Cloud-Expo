import React from "react"
import styled from "styled-components"
import Card from "../../components/Card"
import Button from "../../components/Button"

const SponsorTitle = styled.div`
    text-align: center;
    font-size: 47px;
    color: #141d50;
    margin-bottom: 45px;
    margin-top: 100px;
`

const DiamondSection = styled.section`
    width: 100%;
    padding: 100px 0;
    background-color: #f8f9fc;
`
const DiamondContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`

const DiamondTitle = styled.div`
    text-align: center;
`
const DiamondButton = styled.button`
    background: linear-gradient(100.07deg, #121e52 0%, #e50134 176.51%);
    color: white;
    font-size: 20px;
    border: none;
    font-weight: bolder;
    border-radius: 10px;
    padding: 12px 30px;
`
const DiamondList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 50px;
`
const PlatinumSection = styled.section`
    width: 100%;
    margin-top: 100px;
`
const PlatinumContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`
const PlatinumTitle = styled.div`
    text-align: center;
`
const PlatinumButton = styled.button`
    background: #5a7481;
    color: white;
    font-size: 20px;
    border: none;
    font-weight: bolder;
    border-radius: 10px;
    padding: 12px 30px;
`
const GoldSection = styled.section`
    width: 100%;
    margin-top: 100px;
`
const GoldContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`
const GoldButton = styled.button`
    background: #ddb008;
    color: white;
    font-size: 20px;
    border: none;
    font-weight: bolder;
    border-radius: 10px;
    padding: 12px 30px;
`
const SilverButton = styled.button`
    background: ${props => props.bgcolor};
    color: white;
    font-size: 20px;
    border: none;
    font-weight: bolder;
    border-radius: 10px;
    padding: 12px 30px;
`
const PreviousTitle = styled.div`
    text-align: center;
    margin-bottom: 45px;
    font-size: 47px;
    color: #141d50;
    font-weight: bolder;
`
const ViewButtonContainer = styled.div`
    text-align: center;
    padding: 20px 0;
`
const ViewButton = styled.button`
    width: 150px;
    color: white;
    border: 1px solid #e50134;
    background-color: #e50134;
    line-height: 48px;
    height: 48px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: transparent;
        color: #e50134;
    }
`
const SponsorSection = styled.section`
    width: 100%;
    background-image: url("images/designs-06-1.png");
    margin-bottom: 100px;
`
const SponsorContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 0;
`
const SponsorContent = styled.div`
    display: grid;
    place-items: center;
    max-width: 100%;
    justify-content: center;
`
const SponsorBecomeTitle = styled.div`
    text-transform: uppercase;
    margin-bottom: 15px;
    line-height: 1.2;
    color: white;
    font-size: 47px;
`

const Sponsor = () => {
    return(
        <>
            <SponsorTitle>Our sponsors</SponsorTitle>
            <DiamondSection>
                <DiamondContainer>
                    <DiamondTitle>
                        <DiamondButton>Diamond Sponsors</DiamondButton>
                    </DiamondTitle>
                    <DiamondList>
                        <Card
                            src="images/Discover-Cardano-1.jpg"
                            name="DISCOVER CARDANO"
                            number="34"
                        />
                        <Card
                            src="images/EXOLO.png"
                            name="Exolo"
                            number="24"
                        />
                        <Card
                            src="images/Fastex-1.jpg"
                            name="Fastex"
                            number="39"
                        />
                        <Card
                            src="images/Phronesis.jpg"
                            name="Phronesis"
                            number="38"
                        />
                    </DiamondList>
                </DiamondContainer>
            </DiamondSection>
            <PlatinumSection>
                <PlatinumContainer>
                    <PlatinumTitle>
                        <PlatinumButton>Diamond Sponsors</PlatinumButton>
                    </PlatinumTitle>
                    <DiamondList>
                        <Card
                            src="images/Axiom4D.png"
                            name="Axiomcapital"
                            number="22"
                        />
                        <Card
                            src="images/Doric.jpg"
                            name="Doric Network"
                            number="49"
                        />
                        <Card
                            src="images/Morse.jpg"
                            name="Morse"
                            number="23"
                        />
                        <Card
                            src="images/Pooolse.jpg"
                            name="Poolse"
                            number="23"
                        />
                        <Card
                            src="images/Tradensea.jpg"
                            name="Tradensea"
                            number="23"
                        />
                        <Card
                            src="images/UNS.png"
                            name="Uns"
                            number="50"
                        />
                    </DiamondList>
                </PlatinumContainer>
            </PlatinumSection>
            <GoldSection>
                <GoldContainer>
                    <PlatinumTitle>
                        <GoldButton>Diamond Sponsors</GoldButton>
                    </PlatinumTitle>
                    <DiamondList>
                        <Card
                            src="images/Mrmint.png"
                            name="Mrmint"
                            number="11"
                        />
                    </DiamondList>
                </GoldContainer>
            </GoldSection>
            <GoldSection>
                <GoldContainer>
                    <PlatinumTitle>
                        <SilverButton bgcolor="#888">Silver Sponsors</SilverButton>
                    </PlatinumTitle>
                    <DiamondList>
                        <Card
                            src="images/3.0-Verse-1.png"
                            name="3-verse"
                            number="71"
                        />
                        <Card
                            src="images/BitFinder-2.png"
                            name="Bitfinder"
                            number="62"
                        />
                        <Card
                            src="images/CMN.png"
                            name="Cmn"
                            number="63"
                        />
                        <Card
                            src="images/EazyBot.png"
                            name="Eazybot"
                            number="75"
                        />
                        <Card
                            src="images/ISTAKAPAZA.jpg"
                            name="istakapaza"
                            number="67"
                        />
                        <Card
                            src="images/KOINPRO.jpg"
                            name="koinpro"
                            number="66"
                        />
                        <Card
                            src="images/meta-Universe-1.png"
                            name="Meta Universe"
                            number="61"
                        />
                        <Card
                            src="images/MetaVoeux.png"
                            name="Metavoeux"
                            number="65"
                        />
                        <Card
                            src="images/NNN.jpg"
                            name="nnn-community"
                            number="70"
                        />
                        <Card
                            src="images/9999.jpg"
                            name="Novemgold.com"
                            number="69"
                        />
                        <Card
                            src="images/OPES-Holding.png"
                            name="Opes Holding"
                            number="57"
                        />
                        <Card
                            src="images/Social-Loket.jpg"
                            name="Sociallocket"
                            number="64"
                        />
                    </DiamondList>
                </GoldContainer>
            </GoldSection>
            {/* -- start up section -- */}
            <GoldSection>
                <GoldContainer>
                    <PlatinumTitle>
                        <SilverButton bgcolor="#1961cd">Start Up</SilverButton>
                    </PlatinumTitle>
                    <DiamondList>
                        <Card
                            src="images/10x-Data.png"
                            name="10xdatalabs"
                            number="14"
                        />
                        <Card
                            src="images/Agri-Future.png"
                            name="Agri Future"
                            number="1"
                        />
                        <Card
                            src="images/Arabland.png"
                            name="Arabland"
                            number="17"
                        />
                        <Card
                            src="images/Arthafintech.png"
                            name="Arthafintech"
                            number="11"
                        />
                        <Card
                            src="images/TRA.png"
                            name="Assetz"
                            number="07"
                        />
                        <Card
                            src="images/Bitmoney.jpg"
                            name="Bit Money"
                            number="22"
                        />
                        <Card
                            src="images/De-green.jpg"
                            name="Decentralized Green Energy"
                            number="15"
                        />
                        <Card
                            src="images/Digi-Shares.jpg"
                            name="Digishares Inc"
                            number="18"
                        />
                        <Card
                            src="images/Dream2Earn.png"
                            name="Dream2earn"
                            number="19"
                        />
                        <Card
                            src="images/LOGECO.png"
                            name="ervoeco"
                            number="10"
                        />
                        <Card
                            src="images/Exceed-1.png"
                            name="Exceed Real Estate"
                            number="24"
                        />
                        <Card
                            src="images/SAFFRON-MOUNT.jpg"
                            name="Saffronmount"
                            number="6"
                        />
                        <Card
                            src="images/SHR.png"
                            name="shre"
                            number="13"
                        />
                        <Card
                            src="images/Vantage.png"
                            name="vantage"
                            number="8"
                        />
                    </DiamondList>
                </GoldContainer>
            </GoldSection>
            {/* -- Participating section -- */}
            <GoldSection>
                <GoldContainer>
                    <PlatinumTitle>
                        <SilverButton bgcolor="#dd4008">Participating Companies</SilverButton>
                    </PlatinumTitle>
                    <DiamondList>
                        <Card
                            src="images/Benzinga-2.png"
                            name="Benzinga"
                        />
                        <Card
                            src="images/Bitcoin-Suisse.png"
                            name="Bitcoinsuisse"
                        />
                        <Card
                            src="images/Blockchain.png"
                            name="Blockchainff"
                        />
                        <Card
                            src="images/Cardano-1.png"
                            name="Cardano Foundation"
                        />
                        <Card
                            src="images/Cashaa-220x220-1.png"
                            name="Cashaa"
                        />
                        <Card
                            src="images/CBA.png"
                            name="CBA"
                        />
                        <Card
                            src="images/Chainalysis.png"
                            name="Chainalysis"
                        />
                        <Card
                            src="images/Coin-Gabbar.png"
                            name="Coingabbar"
                        />
                        <Card
                            src="images/DMCC.png"
                            name="DMCC"
                        />
                        <Card
                            src="images/Edelcoin.png"
                            name="Edelcoin"
                        />
                        <Card
                            src="images/EMURGO.png"
                            name="Emurgo"
                        />
                        <Card
                            src="images/EBA-1.png"
                            name="Europeanblockchainassociation"
                        />
                        <Card
                            src="images/Femic-1.png"
                            name="Femic"
                        />
                        <Card
                            src="images/Token.png"
                            name="Forwardprotocol"
                        />
                        <Card
                            src="images/FTI-Consulting.png"
                            name="Fti consulting"
                        />
                        <Card
                            src="images/Helion-Ventures.png"
                            name="Huobiglobal"
                        />
                        <Card
                            src="images/LKI-Consulting-2.png"
                            name="LKI Consulting"
                        />
                        <Card
                            src="images/Mastercard-1.png"
                            name="Mastercard"
                        />
                        <Card
                            src="images/NMKR-1.png"
                            name="NMKR"
                        />
                        <Card
                            src="images/PSPangels.png"
                            name="Pspangels"
                        />
                        <Card
                            src="images/Ripple.png"
                            name="Ripple"
                        />
                        <Card
                            src="images/Social-Loket-1.jpg"
                            name="Sociallocket"
                        />
                        <Card
                            src="images/Tradensea-1.png"
                            name="Tradensea"
                        />
                        <Card
                            src="images/TB-1.png"
                            name="Tradersbrawl"
                        />
                        <Card
                            src="images/Tron.png"
                            name="Trondao"
                        />
                        <Card
                            src="images/Artboard-1-w.png"
                            name="Wilsonworldwide"
                        />
                        <Card
                            src="images/Zaye-Capital.png"
                            name="Zayecapitalmarkets"
                        />
                        <Card
                            src="images/Zengate-1.png"
                            name="zengate"
                        />
                    </DiamondList>
                </GoldContainer>
            </GoldSection>
            {/* -- previous section -- */}
            <GoldSection>
                <GoldContainer>
                    <PreviousTitle>
                    Previous sponsors
                    </PreviousTitle>
                    <DiamondList>
                        <Card
                            src="images/Diamond-Adobe-Options.jpg"
                            name="Abode option"
                            number="21"
                        />
                        <Card
                            src="images/ABX-io.jpg"
                            name="ABX.io"
                            number="1"
                        />
                        <Card
                            src="images/Adena-Soft.jpg"
                            name="Adenasoft"
                            number="41"
                        />
                        <Card
                            src="images/Aelince.jpg"
                            name="Aelince Technologies"
                            number="43"
                        />
                        <Card
                            src="images/Blove-Network-1.jpg"
                            name="B-Love Network"
                            number="94"
                        />
                        <Card
                            src="images/B2BinPay.jpg"
                            name="B2BinPay"
                            number="16"
                        />
                        <Card
                            src="images/Titanium-B2Broker.jpg"
                            name="B2Broker"
                            number="16"
                        />
                        <Card
                            src="images/BioCript.jpg"
                            name="Biokript"
                            number="56"
                        />
                        <Card
                            src="images/Bitmarkets-1.jpg"
                            name="Bitmarkets"
                            number="70"
                        />
                        <Card
                            src="images/BTCash-logo.png"
                            name="BTCash"
                            number="50"
                        />
                        <Card
                            src="images/Camhirst.jpg"
                            name="Camhirst: 3-DCP Ltd Silver"
                            number="60"
                        />
                        <Card
                            src="images/Coinex.jpg"
                            name="CoinEx"
                            number="51"
                        />
                        <Card
                            src="images/Coino.jpg"
                            name="Coino"
                            number="13"
                        />
                        <Card
                            src="images/Coinstore.jpg"
                            name="Coinstore"
                            number="40"
                        />
                        <Card
                            src="images/Crib-Markets.jpg"
                            name="Crib Markets"
                            number="88"
                        />
                        <Card
                            src="images/Crypto-Pass.jpg"
                            name="Crypto pass"
                            number="87"
                        />
                        <Card
                            src="images/Crypto-Home.jpg"
                            name="Cryptohome"
                            number="52"
                        />
                        <Card
                            src="images/Kunami-Web.jpg"
                            name="CUNAMI WEB LTD"
                            number="87"
                        />
                        <Card
                            src="images/Defi-labs.jpg"
                            name="DefiLabs"
                            number="66"
                        />
                        <Card
                            src="images/Fastex.jpg"
                            name="Fastex"
                            number="25"
                        />
                        <Card
                            src="images/GFSC.jpg"
                            name="GFSC"
                            number="26"
                        />
                        <Card
                            src="images/DTT.jpg"
                            name="Global DTT"
                            number="83"
                        />
                        <Card
                            src="images/Golex.jpg"
                            name="Golex Exchange"
                            number="58"
                        />
                        <Card
                            src="images/Groove-1-1.jpg"
                            name="Grovetoken"
                            number="32"
                        />
                        <Card
                            src="images/Hawex-1.png"
                            name="Hawex"
                            number="39"
                        />
                        <Card
                            src="images/HKD.jpg"
                            name="HKD.com"
                            number="65"
                        />
                        <Card
                            src="images/HZM.jpg"
                            name="HZM Coin"
                            number="59"
                        />
                        <Card
                            src="images/Diamond-JPEX.jpg"
                            name="jpex"
                            number="15"
                        />
                        <Card
                            src="images/Diamond-Kodo-Asset.jpg"
                            name="Kodo-Assets"
                            number="24"
                        />
                        <Card
                            src="images/Koinbx.jpg"
                            name="KoinBX"
                            number="48"
                        />
                        <Card
                            src="images/Metalika.jpg"
                            name="Metallika.io"
                            number="69"
                        />
                        <Card
                            src="images/Miracle-Cash-More.jpg"
                            name="Miraclecash"
                            number="74"
                        />
                        <Card
                            src="images/CashFlow.jpg"
                            name="MiraclePay"
                            number="74"
                        />
                        <Card
                            src="images/Myrig.jpg"
                            name="MYRIG"
                            number="28"
                        />
                        <Card
                            src="images/Newverse.jpg"
                            name="NEWVERSE LLC"
                            number="27"
                        />
                        <Card
                            src="images/ONYX.jpg"
                            name="ONYX ARCHES"
                            number="49"
                        />
                        <Card
                            src="images/Oxchange.jpg"
                            name="Oxchange"
                            number="5"
                        />
                        <Card
                            src="images/Gold-PinkSale.jpg"
                            name="PinkSale"
                            number="47"
                        />
                        <Card
                            src="images/Primier-Finance-Service.jpg"
                            name="Premier"
                            number="54"
                        />
                        <Card
                            src="images/Prolabs.jpg"
                            name="ProLabs"
                            number="30"
                        />
                        <Card
                            src="images/Gold-Bamms.jpg"
                            name="Ramms Advisors"
                            number="46"
                        />
                        <Card
                            src="images/RBC.jpg"
                            name="RBC"
                            number="82"
                        />
                        <Card
                            src="images/Rock-N-Block.jpg"
                            name="RocknBlock"
                            number="42"
                        />
                        <Card
                            src="images/SBG.png"
                            name="SBG Global"
                            number="7"
                        />
                        <Card
                            src="images/Cryptoverse-1.jpg"
                            name="The Cryptoverse"
                            number="68"
                        />
                        <Card
                            src="images/Ultramoc.jpg"
                            name="ULTRAMOC TECHNOLOGIES EST"
                            number="53"
                        />
                        <Card
                            src="images/Resize-Logos-1.jpg"
                            name="VIPS Finstock"
                            number="75"
                        />
                        <Card
                            src="images/XPayBack.jpg"
                            name="XpayBack"
                            number="61"
                        />
                        <Card
                            src="images/XT-com.jpg"
                            name="xt.com"
                            number="29"
                        />
                        <Card
                            src="images/Silver-YClub.jpg"
                            name="Yclub"
                            number="64"
                        />
                        <Card
                            src="images/Zex-PR-Wire.jpg"
                            name="ZexPR"
                            number="57"
                        />
                    </DiamondList>
                </GoldContainer>
            </GoldSection>
            <ViewButtonContainer><ViewButton>View Sponsors</ViewButton></ViewButtonContainer>
            <SponsorSection>
                <SponsorContainer>
                    <SponsorContent>
                        <SponsorBecomeTitle>become sponsor</SponsorBecomeTitle>
                        <Button name="Become Sponsor" />
                    </SponsorContent>
                </SponsorContainer>
            </SponsorSection>
        </>
    )
}

export default Sponsor