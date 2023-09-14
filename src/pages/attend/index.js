import React from "react"
import styled from "styled-components"
import Button from "../../components/Button"
import { devices } from "../../constants"

const AttendContainer = styled.div`
    background-image: url("images/attend.png");
    padding: 50px 7rem;
    background-size: cover;
    background-position: center;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 100px;
`
const AttendRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const AttendLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media only screen and ${devices.xs} {
        width: 100%;
    }
    @media only screen and ${devices.lg} {
        width: 50%;
    }
`
const AttendRight = styled.div`
    text-align: center;
    @media only screen and ${devices.xs} {
        margin-top: 50px;
        width: 100%;
    }
    @media only screen and ${devices.lg} {
        margin-top: 0px;
        width: 50%;
    }
`

const AttendLeftTitle = styled.div`
    margin-bottom: 45px;
    font-size: 40px;
    font-weight: bold;
    @media only screen and ${devices.xs} {
        text-align: center;
    }
    @media only screen and ${devices.lg} {
        text-align: left;
    }
`
const AttendLeftDescription = styled.div`
    margin-bottom: 1rem;
`

const AttendLeftButton = styled.div`
    margin-top: 10px;
    @media only screen and ${devices.xs} {
        display: flex;
        justify-content: center;
    }
    @media only screen and ${devices.lg} {
        display: block;
    }
`

const Attend = () => {
    return(
        <AttendContainer>
            <AttendRow>
                <AttendLeft>
                    <AttendLeftTitle>WHY TO ATTEND?</AttendLeftTitle>
                    <AttendLeftDescription>For the people who belong to the crypto industry, be a part of our summit to deliver the industry’s rich content and updates on cryptocurrencies to explore the various cryptocurrency exchanges and the digital currency blow-up.</AttendLeftDescription>
                    <AttendLeftDescription>Figure out how it can revolutionize the globe and comprehend the crypto era.</AttendLeftDescription>
                    <AttendLeftButton>
                        <Button name="Register Now" />
                    </AttendLeftButton>
                </AttendLeft>
                <AttendRight>
                    <img alt="" src="images/CED-images-2.png" style={{width: '100%', height: 'auto'}} />
                </AttendRight>
            </AttendRow>
        </AttendContainer>
    )
}

export default Attend