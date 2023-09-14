import React from "react"
import styled from "styled-components"
import Carousel from "./Carousel"

const SliderTitle = styled.div`
    font-size: 29px;
    text-align: center;
    color: #fff;
`
const SliderDescription = styled.div`
    text-align: center;
    font-size: 62px;
    color: #fff;
`
const SliderPara = styled.div`
    text-align: center;
    font-size: 14px;
    color: #fff;
    padding-top: 1rem;
`

const Slider = () => {
    return(
        <Carousel>
            <div>
                <img alt="" src="images/slides-01-1.jpg" />
                <div style={{position: 'absolute', top: '30vh', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <SliderTitle>Explore Blockchain</SliderTitle>
                    <SliderDescription>BUSINESS</SliderDescription>
                    <SliderDescription>OPPOTUNITIES</SliderDescription>
                    <SliderPara>Creating value to the brands via Exposure & Quality Audience.</SliderPara>
                </div>
            </div>
            <div>
                <img alt="" src="images/slides-02-1.jpg" />
                <div style={{position: 'absolute', top: '30vh', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <SliderTitle>This event</SliderTitle>
                    <SliderDescription>ENGAGING</SliderDescription>
                    <SliderDescription>CRYPTO BUSINESS</SliderDescription>
                    <SliderPara>Industry Pioneers at CryptoExpo Stage live at Largest Conference.</SliderPara>
                </div>
            </div>
            <div>
                <img alt="" src="images/slides-03-1.jpg" />
                <div style={{position: 'absolute', top: '30vh', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <SliderTitle>We bring</SliderTitle>
                    <SliderDescription>TOP CRYPTO MINDS</SliderDescription>
                    <SliderDescription>TOGETHER</SliderDescription>
                    <SliderPara>Meeting the Crypto, Web3, Metaverse, Blockchain Minds.</SliderPara>
                </div>
            </div>
            <div>
                <img alt="" src="images/slides-01-1.jpg" />
                <div style={{position: 'absolute', top: '30vh', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <SliderTitle>Take the</SliderTitle>
                    <SliderDescription>TECHNOLOGY</SliderDescription>
                    <SliderDescription>TO NEW HEIGHTS</SliderDescription>
                    <SliderPara>Be a part of roaring Blockchain Technology in Dubai.</SliderPara>
                </div>
            </div>
        </Carousel>
    )
}

export default Slider