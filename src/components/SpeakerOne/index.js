import React from "react"
import styled from "styled-components"

const SpeakerOneContainer = styled.div`
    cursor: pointer;
    max-width: 250px;
    text-align: center;
    min-height: 350px;
    border: 2px solid #c8f2f347;
    border-radius: 30px;
    background-color: #c8f2f347;
    margin: 10px;
    margin-bottom: 30px;
    width: 100%;
    &:hover img {
        transform: scale(1.1);
        transition: .3s ease-in;
    }
    &:not(:hover) img {
        transform: scale(1);
        transition: .3s ease-in;
    }
`
const SpeakerOneAvatar = styled.img`
    margin: 25px auto;
    width: 115px;
    height: 115px;
    border-radius: 50%;
`
const SpeakerOneName = styled.h3`
    font-size: 18px;
    padding: 5px;
    margin: 0;
`
const SpeakerOneLead = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin: 0;
`
const SpeakerOneImage = styled.img`
    margin: 25px auto;
`

const SpeakerOne = ({
    src,
    name,
    lead,
    company,
    image
}) => {
    return(
        <SpeakerOneContainer>
            <SpeakerOneAvatar src={src} />
            <SpeakerOneName>{name}</SpeakerOneName>
            <SpeakerOneLead>{lead}</SpeakerOneLead>
            <SpeakerOneLead>{company}</SpeakerOneLead>
            <SpeakerOneImage src={image} />
        </SpeakerOneContainer>
    )
}

export default SpeakerOne