import React from "react";
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    position:fixed;
    right: 0;
    top: 50%;
    display: flex;
    flex-direction : column;
    width: 70px;
    background: red;
    transform: translateX(0);
    transform: translateY(-50%);
    border-radius: 20px 0 0 20px;
    background: linear-gradient(100.07deg, #121e52 0%, #e50134 176.51%);
    z-index: 999;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 15px;
    border-bottom: 1px solid white;
    cursor: pointer;
`;

const scale = keyframes`
  from {
    transform : scale(1);
  }
  to {
    transform : scale(1.4);
  }
`;

const Img = styled.img`
    width : 25px;
    height : 25px;
    &:hover {
        animation: ${scale} 0.5s linear infinite;
        transform : scale(1.4);
    }
`
const goTop = () => {
    window.scrollTo(0, 0)
}

function RightContent () {
    return(<Container>
        <Item>
            <Img src="images/whatsapp-brands.svg"/>
        </Item>
        <Item>
            <Img src="images/telegram-brands.svg" />
        </Item>
        <Item>
            <Img src="images/envelope-brands.svg" />
        </Item>
        <Item style={{borderBottom: "none"}} onClick={goTop}>
            <Img src="images/top.svg" />
        </Item>

    </Container>)
}


export default RightContent

