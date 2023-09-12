import React from "react"
import styled from "styled-components"

const VideoSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`
const VideoContainer = styled.div`
    max-width: 1200px;
    display: flex;
`
const VideoLeft = styled.div`
    width: 50%;
    position: relative;
    padding: 0 10px;
`
const VideoImage = styled.img`
    width: 100%;
    border-radius: 10px;
    &:hover + img {
        transform: translate(-50%, -50%) scale(1.1);
    }
`
const VideoPlay = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform .2s;
    width: 6%;
`

const VideoRight = styled.div`
    width: 50%;
    padding: 0 10px;
`
const VideoTitle = styled.h1`
    margin-bottom: 45px;
    color: #141d50;
`
const VideoDescription = styled.p`

`

const Video = () => {
    return(
        <VideoSection>
            <VideoContainer>
                <VideoLeft>
                    <VideoImage src="images/26.jpg" />
                    <VideoPlay src="images/play.svg" alt="" />
                </VideoLeft>
                <VideoRight>
                    <VideoTitle>2023 HIGHLIGHTS</VideoTitle>
                    <VideoDescription>Check out the Dubai's Largest Crypto Expo Investing and Trading Conference for two days of content-rich experience, real-time networking, engaging discussions, and resounding success.</VideoDescription>
                </VideoRight>
            </VideoContainer>
        </VideoSection>
    )
}

export default Video