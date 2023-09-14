import React from "react"
import styled from "styled-components"
import Card from "../../components/Card"
import Button from "../../components/Button"
import { devices } from "../../constants"

const PartnerSection = styled.section`
    width: 100%;
    margin-bottom: 100px;
`
const PartnerLetterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and ${devices.xs} {
        flex-direction: column;
    }
    @media only screen and ${devices.lg} {
        flex-direction: row;
    }
`
const PartnerContainer = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
`

const PartnerLetter = styled.div`
    margin-bottom: 45px;
    text-align: center;
`
const PartnerTitle = styled.div`
    font-size: 47px;
    color: #141d50;
    text-transform: uppercase;
`

const PartnerLetterButtonGroup = styled.div`

`
const PartnerLetterButtonUl = styled.ul`
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
`
const PartnerLetterButtonLi = styled.li`
    width: 30px;
    height: 5px;
    margin: 0 5px;
    display: inline-block;
`
const PartnerLetterButton = styled.button`
    width: 30px;
    height: 5px;
    cursor: pointer;
    border: none;
    background-color: #141d50;
    opacity: .25;
    border-radius: 10px;
    &:hover {
        opacity: 1;
    }
`

const PartnerSliderContainer = styled.div`
    position: relative;
`
const PartnerSliderContainerLeftButton = styled.button`
    border: 0;
    background-color: transparent;
    font-size: 20px;
    left: -25px;
`
const PartnerSliderGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const PartnerSliderPart = styled.div`
`

const PartnerSliderContainerRightButton = styled.button`
    border: 0;
    background-color: transparent;
    font-size: 20px;
`
const CommunitySection = styled.section`
    width: 100%;
    padding: 100px 0;
    background-color: #f8f9fc;
`
const CommunityTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 45px;
    font-size: 47px;
    color: #141d50;
`
const CommunityList = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: center;
`
const ViewSection = styled.section`
    padding: 50px 0;
    display: flex;
    justify-content: center;
`

const Partner = () => {
    return(
        <>
            <PartnerSection>
                <PartnerContainer>
                    <PartnerLetterContainer>
                        <PartnerLetter>
                            <PartnerTitle>Our Partners</PartnerTitle><br />
                        </PartnerLetter>
                        <PartnerLetterButtonGroup>
                            <PartnerLetterButtonUl>
                                <PartnerLetterButtonLi><PartnerLetterButton></PartnerLetterButton></PartnerLetterButtonLi>
                                <PartnerLetterButtonLi><PartnerLetterButton></PartnerLetterButton></PartnerLetterButtonLi>
                                <PartnerLetterButtonLi><PartnerLetterButton></PartnerLetterButton></PartnerLetterButtonLi>
                                <PartnerLetterButtonLi><PartnerLetterButton></PartnerLetterButton></PartnerLetterButtonLi>
                                <PartnerLetterButtonLi><PartnerLetterButton></PartnerLetterButton></PartnerLetterButtonLi>
                                <PartnerLetterButtonLi><PartnerLetterButton></PartnerLetterButton></PartnerLetterButtonLi>
                            </PartnerLetterButtonUl>
                        </PartnerLetterButtonGroup>
                    </PartnerLetterContainer>
                    <PartnerSliderContainer>
                        <PartnerSliderContainerLeftButton className="prev">&#10094;</PartnerSliderContainerLeftButton>
                        <PartnerSliderGroup>
                            <PartnerSliderPart>
                                <Card
                                    src="images/All-Confs-bot.png"
                                    name="Allconfsbot"
                                />
                                <Card
                                    src="images/nexnews.png"
                                    name="Nexnews"
                                />
                            </PartnerSliderPart>
                            <PartnerSliderPart>
                                <Card
                                    src="images/Crypto-news.png"
                                    name="crypto news"
                                />
                                <Card
                                    src="images/3.0-tv.png"
                                    name="3-verse"
                                />
                            </PartnerSliderPart>
                            <PartnerSliderPart>
                                <Card
                                    src="images/the-decision-maker.png"
                                    name="The desicision maker"
                                />
                                <Card
                                    src="images/B1gBTV.png"
                                    name="b1gb.tv"
                                />
                            </PartnerSliderPart>
                            <PartnerSliderPart>
                                <Card
                                    src="images/Dubai-Social-Network.png"
                                    name="Dubai Social Network"
                                />
                                <Card
                                    src="images/TradingBeasts-1.png"
                                    name="Tradingbeasts"
                                />
                            </PartnerSliderPart>
                            <PartnerSliderPart>
                                <Card
                                    src="images/Block-Tides.png"
                                    name="Blocktides"
                                />
                                <Card
                                    src="images/Cryptopolitan.png"
                                    name="Cryptopolitan"
                                />
                            </PartnerSliderPart>
                            <PartnerSliderPart>
                                <Card
                                    src="images/Wiki-Crypto.png"
                                    name="wikicrypto"
                                />
                                <Card
                                    src="images/Cryptoken.jpg"
                                    name="Cryptoken Media"
                                />
                            </PartnerSliderPart>
                        </PartnerSliderGroup>
                        <PartnerSliderContainerRightButton className="next">&#10095;</PartnerSliderContainerRightButton>
                    </PartnerSliderContainer>
                </PartnerContainer>
            </PartnerSection>
            <CommunitySection>
                <CommunityTitle>
                    Community Partner
                </CommunityTitle>
                <CommunityList>
                    <Card
                        src="images/FMCPAY.png"
                        name="FMCPAY"
                    />
                    <Card
                        src="images/Chainvate.png"
                        name="Chainvate"
                    />
                </CommunityList>
            </CommunitySection>
            <ViewSection>
                <Button name="View Partners" />
            </ViewSection>
        </>
    )
}

export default Partner