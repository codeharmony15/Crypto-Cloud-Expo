import React from "react"
import styled from "styled-components"

const TeamMemberContainer = styled.div`
    margin: 10px;
    padding: 25px 15px;
    text-align: center;
    border: 0.4px solid rgba(0, 0, 0, 0.349);
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
    max-width: 210px;
    width: 100%;
    position: relative;
    &:hover {
        box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.2);
    }
`
const TeamMemberBG = styled.div`
    position: absolute;
    background: linear-gradient(100.07deg,#121e52 0%,#e50134 176.51%);
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: -1;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const TeamMemberAvatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
`
const TeamMemberName = styled.h3`
    margin: 0;
    margin-top: 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.2;
`
const TeamMemberLink = styled.div`
    padding-bottom: 10px;
    font-weight: 300;
    font-size: 15px;
    cursor: pointer;
`
const TeamMemberLinkIcon = styled.div`
    display: flex;
`
const IconDiv = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 0.5rem;
    cursor: pointer;
`

const WhatsApp = styled.img`
    &:hover {
        transition: 0.3s ease-in;
        transform: scale(1.1);
    }
    &:not(:hover) {
        transition: 0.3s ease-in;
        transform: scale(1);
    }
`

const TeamMember = ({
    src,
    name,
    email,
    tel
}) => {
    return(
        <TeamMemberContainer>
            <TeamMemberBG />
            <TeamMemberAvatar src={src} />
            <TeamMemberName>{name}</TeamMemberName>
            <TeamMemberLink>Email : {email}</TeamMemberLink>
            <TeamMemberLink>Tel : {tel}</TeamMemberLink>
            <TeamMemberLinkIcon>
                <IconDiv>
                    <WhatsApp src="images/whatsapp.svg" />
                </IconDiv>
                <IconDiv>
                    <WhatsApp src="images/telegram.svg" />
                </IconDiv>
            </TeamMemberLinkIcon>
        </TeamMemberContainer>
    )
}

export default TeamMember