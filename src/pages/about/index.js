import React from "react";
import styled from 'styled-components';
import AniCard from "../../components/AniCard";

// const HeaderContainer = styled.div`
//     position: fixed;
//     display: flex;
//     align-items :  center;
//     justify-content: center;
//     top : 0;
//     background-color: rgb(20, 30, 80);
//     width: 100%;
//     z-index: 9999;
// ` 
// const Container = styled.div`
//     display : flex;
//     flex-direction: row;
//     align-items :  center;
//     padding: 16px 0px;
//     max-width: 1200px;
//     justify-content : space-around;
//     width: 100%;
// `

// const LogoContainer =  styled.div`
//     display : flex;
//     align-items :  center;
//     justify-content: center;
// `
// const HeaderContentContainer = styled.div`
//     display: flex;
//     flex-direction : row;
//     align-items :  center;
//     margin-left: 20px;
// `
// const ButtonContainer = styled.div`
//     display: flex;
//     flex-direction:row;
//     align-items :  center;
// `
// const HeaderContent = styled.div`
//     margin: 0 10px;
//     font-size : 15px;
//     color: white;
//     cursor : pointer;
// ` 
// const Img  = styled.img`
//     width: 50px;
//     height: 23px;
// `

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

