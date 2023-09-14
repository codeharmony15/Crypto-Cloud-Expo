import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    height: 280px;
    max-width : 360px;
    overflow: hidden;
    border-radius: 10px;
    overflow: hidden;
    color: white;
    box-shadow: 3px 4px 10px rgba(18, 30, 82, 0.5);
    position: relative;
    margin: 10px;
    cursor : pointer;

`;

const Img = styled.img`
    height: 140px;
    width: 100%;
`
const movefill = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    transform: translateY(0%);
  }
`
const moveempty = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(50%);
  }
`

const TextContainer =  styled.div`
    position: absolute;
    height: 240px;
    bottom: 0; 
    color: white;
    transform: translateY(50%);
    padding: 20px;
    
    background: linear-gradient(100.07deg, #121e52 0%, #e50134 176.51%);
    &:hover {
        animation: ${movefill} 0.2s linear none;
        transform: translateY(0);
    }
    &:not(:hover) {
        animation: ${moveempty} 0.2s linear none;
        transform: translateY(50%);
    }
`

const TextTitle =  styled.div`
    font-size: 20px;
    line-height: 20px;
    margin-bottom : 20px;
`
const TextContent =  styled.div`
    font-size: 12px;
    line-height: 20px;
`


function AniCard({ src = "images/designs-02-370x170-1.png"}) {
    return (
        <Container>
            <Img src= {src} />
            <TextContainer >
                <TextTitle>Expo</TextTitle>
                <TextContent>Putting in forefront of thousands of traders and investors, top cryptocurrency brands disclose their finest digital currency products and services.</TextContent>
            </TextContainer>
        </Container>
    );
}

export default AniCard;
