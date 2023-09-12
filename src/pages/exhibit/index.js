import React from "react"
import styled from "styled-components"
import Button from "../../components/Button"

const ExhibitContainer = styled.div`
    background-image: url("images/Exhibit.png");
    padding: 50px 7rem;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    margin-bottom: 100px;
`
const ExhibitRow = styled.div`
    display: flex;
    align-items: center;
`
const ExhibitLeft = styled.div`
    display: flex;
    flex-direction: column;
`
const ExhibitRight = styled.div``

const ExhibitLeftTitle = styled.div`
    margin-bottom: 45px;
    font-size: 40px;
    font-weight: bold;
`
const ExhibitLeftDescription = styled.div`
    margin-bottom: 1rem;
`

const Exhibit = () => {
    return(
        <ExhibitContainer>
            <ExhibitRow>
                <ExhibitRight>
                    <img src="images/CED-images-2.png" style={{width: '42vw', height: 'auto'}} />
                </ExhibitRight>
                <ExhibitLeft>
                    <ExhibitLeftTitle>WHY TO Exhibit?</ExhibitLeftTitle>
                    <ExhibitLeftDescription>Top companies around the world are assembling various collections of financial and cryptocurrency opportunities in the UAE, specifically in Dubai. Dubai has gained international recognition as one of the most important and largest blockchain and crypto event hubs in the world’s financial capital market. You will discover the crypto market and opportunities via:</ExhibitLeftDescription>
                    <ExhibitLeftDescription>
                        > Meeting and engaging with 10000+ Visitors in-person and face-to-face.<br />
                        > Help the investors how to invest in this exciting market.<br />
                        > Highlight your brand and developments.<br />
                        > Get a chance to network with professionals from the Crypto industry.<br />
                    </ExhibitLeftDescription>
                </ExhibitLeft>
            </ExhibitRow>
        </ExhibitContainer>
    )
}

export default Exhibit