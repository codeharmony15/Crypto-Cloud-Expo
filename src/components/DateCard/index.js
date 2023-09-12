import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    min-width: 70px;
    padding: 3px;
    text-align: center;
    margin-left: 2%;
    background: ${props => props.background === "day" ? '#e50134' : '#141d50'};
    color : white;
    margin : 0px  ${props => props.marginX + 'px'};
`    

const Text = styled.div`
    font-size: 35px;
    font-weight: 100;
    text-shadow: 0 0 20px #48c8ff;
`

function DateCard({ name = "Button", background = 'day', type ="Seconds", text = 60 , marginX = 10}) {
    return (
        <div>
            <StyledDiv background={background} marginX = {marginX}>
                <Text>{text}</Text>
                <div>{type}</div>
            </StyledDiv>
        </div>
    );
}

export default DateCard;
