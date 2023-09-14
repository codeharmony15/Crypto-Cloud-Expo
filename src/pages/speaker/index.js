import React from "react"
import styled from "styled-components"
import SpeakerOne from "../../components/SpeakerOne"
import { devices } from "../../constants"

const SpeakerSection = styled.section`
    width: 100%;
`
const SpeakerLetterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and ${devices.xs} {
        flex-direction: column;
    }
    @media only screen and ${devices.lg} {
        flex-direction: row;
    }
`
const SpeakerContainer = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
`

const SpeakerLetter = styled.div`
    margin-bottom: 45px;
    @media only screen and ${devices.xs} {
        text-align: center;
    }
`
const SpeakerTitle = styled.div`
    font-size: 47px;
    color: #141d50;
`
const SpeakerDescription = styled.div`
    font-size: 20px;
    color: #141d50;
`
const SpeakerLetterButtonGroup = styled.div`

`
const SpeakerLetterButtonUl = styled.ul`
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
`
const SpeakerLetterButtonLi = styled.li`
    width: 30px;
    height: 5px;
    margin: 0 5px;
    display: inline-block;
`
const SpeakerLetterButton = styled.button`
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

const SpeakerSliderContainer = styled.div`
    position: relative;
`
const SpeakerSliderContainerLeftButton = styled.button`
    border: 0;
    background-color: transparent;
    font-size: 20px;
    left: -25px;
`
const SpeakerSliderGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const SpeakerSliderPart = styled.div`
`

const SpeakerSliderContainerRightButton = styled.button`
    border: 0;
    background-color: transparent;
    font-size: 20px;
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

const Speaker = () => {
    return(
        <SpeakerSection>
            <SpeakerContainer>
                <SpeakerLetterContainer>
                    <SpeakerLetter>
                        <SpeakerTitle>2023 Speakers</SpeakerTitle><br />
                        <SpeakerDescription>More speakers Will be added soon</SpeakerDescription>
                    </SpeakerLetter>
                    <SpeakerLetterButtonGroup>
                        <SpeakerLetterButtonUl>
                            <SpeakerLetterButtonLi><SpeakerLetterButton></SpeakerLetterButton></SpeakerLetterButtonLi>
                            <SpeakerLetterButtonLi><SpeakerLetterButton></SpeakerLetterButton></SpeakerLetterButtonLi>
                            <SpeakerLetterButtonLi><SpeakerLetterButton></SpeakerLetterButton></SpeakerLetterButtonLi>
                            <SpeakerLetterButtonLi><SpeakerLetterButton></SpeakerLetterButton></SpeakerLetterButtonLi>
                            <SpeakerLetterButtonLi><SpeakerLetterButton></SpeakerLetterButton></SpeakerLetterButtonLi>
                            <SpeakerLetterButtonLi><SpeakerLetterButton></SpeakerLetterButton></SpeakerLetterButtonLi>
                        </SpeakerLetterButtonUl>
                    </SpeakerLetterButtonGroup>
                </SpeakerLetterContainer>
                <SpeakerSliderContainer>
                    <SpeakerSliderContainerLeftButton className="prev">&#10094;</SpeakerSliderContainerLeftButton>
                    <SpeakerSliderGroup>
                        <SpeakerSliderPart>
                            <SpeakerOne
                                src="images/speakers/1)Sunny-Lu.png"
                                name="David Orban"
                                lead="Chairman of the Supervisory Council"
                                company="SingularityNET"
                            />
                            <SpeakerOne
                                src="images/speakers/5)Mohammed-Alblooshi.png"
                                name="Ayesha Bin Kalban"
                                lead="Registrar"
                                company="DIFC Courts"
                            />
                        </SpeakerSliderPart>
                        <SpeakerSliderPart>
                            <SpeakerOne
                                src="images/speakers/2)Helen-Hai.png"
                                name="Naeem Aslam"
                                lead="CIO | Columnist "
                                company="Zaye Capital |  Nasdaq"
                                image="images/Zaye-Capital-1.png"
                            />
                            <SpeakerOne
                                src="images/speakers/6)Max-Kordek.png"
                                name="Mattia Rattaggi"
                                lead="Senior Advisor"
                                company="Edelcoin AG"
                                image="images/Edelcoin-1.png"
                            />
                        </SpeakerSliderPart>
                        <SpeakerSliderPart>
                            <SpeakerOne
                                src="images/speakers/3)Alex-Zinder.png"
                                name="Dr Mohamed Al Hemairy"
                                lead="Principal Investigator, Blockchain-Based Project / Director TTO"
                                company="Bitcoin Association / University of Sharjah"
                            />
                            <SpeakerOne
                                src="images/speakers/7)Nena-Dokuzov.png"
                                name="Ahmed Elmetwally"
                                lead="CEO / General Manager"
                                company="Private Office of Sheikh Mohamed Bin Ahmed Bin Hamadan Al Nahyan"
                            />
                        </SpeakerSliderPart>
                        <SpeakerSliderPart>
                            <SpeakerOne
                                src="images/speakers/4)Gracy-Chen.png"
                                name="Kumar Gaurav"
                                lead="Founder & CEO"
                                company="Cashaa"
                                image="images/Cashaa.png"
                            />
                            <SpeakerOne
                                src="images/8)Reece-Merrick.png"
                                name="Jeremy Firster"
                                lead="Global Head of Enterprise Partnerships"
                                company="Cardano Foundation"
                                image="images/Cardano.png"
                            />
                        </SpeakerSliderPart>
                    </SpeakerSliderGroup>
                    <SpeakerSliderContainerRightButton className="next">&#10095;</SpeakerSliderContainerRightButton>
                </SpeakerSliderContainer>
                <ViewButtonContainer><ViewButton>View Speaker</ViewButton></ViewButtonContainer>
            </SpeakerContainer>
        </SpeakerSection>
    )
}

export default Speaker