import React from "react";
import styled from 'styled-components';
import DateCard from "../../components/DateCard";
import Button from "../../components/Button";

const FootContainer = styled.div`
    position:fixed;
    bottom : 0;
    display : flex;
    justify-content : center;
    background-color: rgba(18, 18, 18, 0.9);
    width: 100%;
    z-index: 999;
` 
const Container = styled.div`
    display : flex;
    flex-direction: row;
    align-items :  center;
    padding: 20px 0px;
    max-width: 1200px;
    width: 100%;
`

const DateContainer = styled.div`
    display : flex;
    flex-direction: row;
    align-items :  center;
    padding: 20px 0px;
    width: 100%;
`

const ButtonContainer = styled.div`
    display : flex;
    flex-direction: row;
    align-items :  center;
    padding: 20px 0px;
`
function Footer () {
    return(<FootContainer>
        <Container>
            <DateContainer>
                <DateCard background="day" type="Days"text={15} />
                <DateCard background="hours" type="Hours" text={23} />
                <DateCard background="minutes" type="Minutes" text={15} />
                <DateCard background="seconds" type="Seconds" text={8} />
            </DateContainer>
            <ButtonContainer>
                {/* <Button name ="Become Sponsar" background ={"second"}/> */}
                <Button name ="Register Now" marginX = {16}/>
            </ButtonContainer>
        </Container>
    </FootContainer>)
}


export default Footer

