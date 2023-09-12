import React from "react"
import styled from "styled-components"

const SliderSection = styled.section`
    width: 100%;
`
const SliderContainer = styled.div`
    background-image: url("images/slides-01-1.jpg");
    padding: 100px 0;
`
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
        <SliderSection>
            <SliderContainer>
                <SliderTitle>Explore Blockchain</SliderTitle>
                <SliderDescription>BUSINESS</SliderDescription>
                <SliderDescription>OPPOTUNITIES</SliderDescription>
                <SliderPara>Creating value to the brands via Exposure & Quality Audience</SliderPara>
            </SliderContainer>
        </SliderSection>
    )
}

export default Slider