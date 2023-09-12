import React from "react"
import styled from "styled-components"
import Button from "../../components/Button"

const FloorPlanSection = styled.section`
    width: 100%;
    margin-bottom: 100px;
`
const FloorPlanContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`
const FloorPlanText = styled.div`
    display: flex;
    justify-content: space-between;
`
const FloorPlanTitle = styled.div`
    margin-bottom: 25px;
    font-size: 47px;
    color: #141d50;
    text-transform: uppercase;
    font-weight: bolder;
`
const FloorPlanImageContainer = styled.div`
    border: 1px dashed #121e52;
    padding: 38px 19px;
    position: relative;
    &:hover div {
        cursor: pointer;
        display: flex;
    }
`
const FloorPlanImageContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
`

const FloorPlanImage = styled.img`
    width: 100%;
    height: auto;
`
const FloorPlanImageTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 500;
`

const FloorPlan = () => {
    return(
        <>
            <FloorPlanSection>
                <FloorPlanContainer>
                    <FloorPlanText>
                        <FloorPlanTitle>Floorplan</FloorPlanTitle>
                        <Button name="View Floorplan" />
                    </FloorPlanText>
                    <FloorPlanImageContainer>
                        <FloorPlanImageContent>
                            <FloorPlanImageTitle>View<br />Interactive FloorPlan</FloorPlanImageTitle>
                        </FloorPlanImageContent>
                        <FloorPlanImage src="images/CED-Floor-Plan.jpg" />
                    </FloorPlanImageContainer>
                </FloorPlanContainer>
            </FloorPlanSection>
        </>
    )
}

export default FloorPlan