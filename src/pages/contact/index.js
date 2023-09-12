import React from "react"
import styled from "styled-components"

const ContactSection = styled.section`
    margin-bottom: 150px;
`
const ContactTop = styled.div`
    padding: 100px 0;
    background-image: url("images/designs-07-1.png");
`
const ContactTopContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`
const ContactTopTitle = styled.div`
    color: white;
    text-transform: uppercase;
    font-size: 60px;
    text-align: center;
    margin-bottom: 45px;
    font-weight: bolder;
`
const ContactTopDetail = styled.div`
    color: white;
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
    line-height: 1.5;
    margin-bottom: 1rem;
`
const ContactTopSocial = styled.div`
    display: flex;
    justify-content: center;
`
const SocialOne = styled.div`
    margin: 0 10px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
`
const Organise = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 1rem;
`
const OrganiseTitle = styled.div`
    color: white;
    font-size: 25px;
    line-height: 1.5rem;
`
const OrganiseImage = styled.img`
    cursor: pointer;
    max-width: 120px;
    height: auto;
`
const ContactBottom = styled.div`
    font-size: 1rem;
    line-height: 1.5;
    padding: 2rem 0;
    background-color: #0a1034;
    color: white;
`
const ContactTopHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const CopyRight = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
`
const Term = styled.div`
    font-size: 15px;
    cursor: pointer;
`
const ContactTopFooter = styled.div`
    margin-top: 40px;
    font-size: 11px;
    line-height: 14px;
`

const Contact = () => {
    return(
        <ContactSection>
            <ContactTop>
                <ContactTopContainer>
                    <ContactTopTitle>Contact us</ContactTopTitle>
                    <ContactTopDetail>Dubai:901, City Tower 2, Sheikh Zayed Road, Dubai, United Arab Emirates.</ContactTopDetail>
                    <ContactTopSocial>
                        <SocialOne>
                            <Icon src="images/instagram.svg" />
                        </SocialOne>
                        <SocialOne>
                            <Icon src="images/twitter.svg" />
                        </SocialOne>
                        <SocialOne>
                            <Icon src="images/linkedin.svg" />
                        </SocialOne>
                        <SocialOne>
                            <Icon src="images/facebook.svg" />
                        </SocialOne>
                    </ContactTopSocial>
                    <Organise>
                        <OrganiseTitle>Organised by {'\u00A0'}</OrganiseTitle>
                        <OrganiseImage src="images/HQmena-White-01.png" />
                    </Organise>
                </ContactTopContainer>
            </ContactTop>
            <ContactBottom>
                <ContactTopContainer>
                    <ContactTopHeader>
                        <CopyRight>Copyright © 2023 Crypto Expo. All Rights Reserved</CopyRight>
                        <Term>Terms and Conditions{'\u00A0'} | {'\u00A0'}Privacy Policy</Term>
                    </ContactTopHeader>
                    <ContactTopFooter>Disclaimer: Cryptocurrencies are complex instruments and come with a high risk of losing money rapidly due to its volatility. You should consider whether you understand how cryptocurrency work and whether you can afford to take the high risk of losing your money. This event is organised to provide educational content and networking opportunities for the virtual asset Industry. This event and our company does not involve in any recommendation or investment or selling/buying of any financial products. Visitors under the age of 18 will not be admitted.</ContactTopFooter>
                </ContactTopContainer>
            </ContactBottom>
        </ContactSection>
    )
}

export default Contact