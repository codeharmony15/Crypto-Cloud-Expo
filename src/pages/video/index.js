import React from "react"
import styled from "styled-components"

const VideoContainer = styled.div`
    margin-bottom: 100px;
    max-width: 992px;
    display: flex;
    justify-content: center;
`
const VideoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const VideoLeft = styled.div`
    width: 50%;
    position: relative;
    cursor: pointer;
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
    
`
const VideoTitle = styled.h1`
    margin-bottom: 45px;
    color: #141d50;
`
const VideoDescription = styled.p`

`

const Video = () => {
    return(
        <VideoContainer>
            <VideoRow>
                <VideoLeft>
                    <VideoImage src="images/26.jpg" />
                    <VideoPlay src="images/play.svg" alt="" />
                </VideoLeft>
                <VideoRight>
                    <VideoTitle>2023 HIGHLIGHTS</VideoTitle>
                    <VideoDescription>Check out the Dubai's Largest Crypto Expo Investing and Trading Conference for two days of content-rich experience, real-time networking, engaging discussions, and resounding success.</VideoDescription>
                </VideoRight>
            </VideoRow>
        </VideoContainer>
    )
}

export default Video