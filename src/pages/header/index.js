import React from "react";
import styled from 'styled-components';
import Button from "../../components/Button";

const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    align-items :  center;
    justify-content: center;
    top : 0;
    background-color: rgb(20, 30, 80);
    width: 100%;
    z-index: 9999;
` 
const Container = styled.div`
    display : flex;
    flex-direction: row;
    align-items :  center;
    padding: 16px 0px;
    max-width: 1200px;
    justify-content : space-around;
    width: 100%;
`

const LogoContainer =  styled.div`
    display : flex;
    align-items :  center;
    justify-content: center;
`
const HeaderContentContainer = styled.div`
    display: flex;
    flex-direction : row;
    align-items :  center;
    margin-left: 20px;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items :  center;
`
const HeaderContent = styled.div`
    margin: 0 10px;
    font-size : 15px;
    color: white;
    cursor : pointer;
` 
const Img  = styled.img`
    width: 50px;
    height: 23px;
`
function Header () {
    return(<HeaderContainer>
            <Container>
                <LogoContainer>
                    <Img src= "images/LOGO.png" />
                    <div style={{fontSize : '24px', color : 'white', fontWeight : "bolder", fontFamily: 'monospace', marginLeft : '10px'}}>CryptoCloudExpo</div>
                </LogoContainer>
                <HeaderContentContainer>
                    <HeaderContent>About Us</HeaderContent>
                    <HeaderContent>Speakers</HeaderContent>
                    <HeaderContent>Sponsors</HeaderContent>
                    <HeaderContent>Partners</HeaderContent>
                    <HeaderContent>Agenda</HeaderContent>
                    <HeaderContent>Floor plan</HeaderContent>
                </HeaderContentContainer>
                <ButtonContainer>
                    {/* <Button background="second" name  = "Become Sponsor" /> */}
                    <Button name="Register Now" marginX ={16}/>
                </ButtonContainer>
            </Container>
        </HeaderContainer>
    )
}

export default Header

