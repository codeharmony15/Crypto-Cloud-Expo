import React from "react";
import styled from 'styled-components';

const Flip_Card =styled.div`
    background-color: transparent;
    width: 150px;
    height: 150px;
    perspective: 1000px;
    margin: 20px;
`
const Flip_Card_Innder =  styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 12px;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    &:hover {
        transform: rotateY(180deg);
    }
`
const Flip_Card_Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0 solid #e5e7eb;
    border-radius : 12px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: black;
`
const Flip_Card_Back = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #141d50;
    width: 100%;
    height: 100%;
    border: 0 solid #e5e7eb;
    border-radius : 12px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: white;
    transform: rotateY(180deg);
`

const Img = styled.img`
    border-width: none;
    height : 150px;
    width :  150px;
    border-radius : 12px;
`
const Flip_Card_Name = styled.h1`
    font-size: 11px;
    margin: 0;
    line-height: 1.2;
    text-transform: uppercase;
`
const Flip_Card_Number = styled.p`
    font-size: 16px;
    margin: 0.5rem 0;
    font-weight: bolder;
`
const Flip_Card_Website = styled.button`
    background-color: #e50134;
    border: 1px solid #e50134;
    color: white;
    width: 100px;
    padding: 2px 0;
    margin: 0 auto;
    font-weight: 300;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        background-color: transparent;
    }
`

function Card ({
    src,
    name,
    number
}) {
    return(<Flip_Card>
        <Flip_Card_Innder>
            <Flip_Card_Front>
               <Img src ={src} />
            </Flip_Card_Front>
            <Flip_Card_Back>
                <Flip_Card_Name>{name}</Flip_Card_Name> 
                <Flip_Card_Number>{number}</Flip_Card_Number> 
                <Flip_Card_Website>Visit Website</Flip_Card_Website>
            </Flip_Card_Back>
        </Flip_Card_Innder>
    </Flip_Card>)
}

export default Card