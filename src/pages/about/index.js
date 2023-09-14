import React from "react";
import styled from 'styled-components';
import AniCard from "../../components/AniCard";

const AboutContainer = styled.div`
    width: 90%;
    padding: 0 15px;
    margin: 100px auto 0;
`
const AboutTitle = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: 400;
`
const AboutDescription = styled.div`
    width: 59%;
    text-align: center;
    margin: 45px auto 10px;
`
const AboutList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

function About () {
    return(
        <AboutContainer>
            <AboutTitle>WHO WE ARE</AboutTitle>
            <AboutDescription>Crypto Cloud Expo is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the future of finance. The edition of the Crypto Coin Expo will take place during on October 5, 2023 in Dubai, with the world’s top crypto companies and blockchain entrepreneurs. Today, UAE, specifically Dubai is gearing up to become a global crypto hub. Thus, Crypto Cloud Expo will be the gathering in the region on behalf of the world of blockchain and cryptocurrency, with a wide range of topics focused on the financial technologies of the future, extensive networking opportunities and participation from more than 40 countries.</AboutDescription>
            <AboutList>
                <AniCard />
                <AniCard />
                <AniCard />
            </AboutList>
        </AboutContainer>
    )
}

export default About

