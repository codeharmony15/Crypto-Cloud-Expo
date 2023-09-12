import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    max-width : 360px;
    width: 32%;
    overflow: hidden;
    border-radius: 5px;
    overflow: hidden;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 40px 20px -20px;
    position: relative;
    margin: 10px;
    background-color: black;
    &:hover img {
        transform: scale(1.1) rotate(5deg);
    }
    &:hover div div:first-child {
        color: #E40235;
    }
    border: 1px solid #8d8d8d;
`;

const Img = styled.img`
    width: 100%;
    transition: .3s ease-in;
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
    margin-top: -5px;
    bottom: 0;
    color: white;
    padding: 20px;
    min-width: 250px;
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


function Conference({
    src,
    title,
    content
}) {
    return (
        <Container>
            <Img src= {src} />
            <TextContainer >
                <TextTitle>{title}</TextTitle>
                <TextContent>{content}</TextContent>
            </TextContainer>
        </Container>
    );
}

export default Conference;
