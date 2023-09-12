import React from "react"
import styled from "styled-components"
import Button from "../../components/Button"

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
`
const AttendLeft = styled.div`
    display: flex;
    flex-direction: column;
`
const AttendRight = styled.div``

const AttendLeftTitle = styled.div`
    margin-bottom: 45px;
    font-size: 40px;
    font-weight: bold;
`
const AttendLeftDescription = styled.div`
    margin-bottom: 1rem;
`

const AttendLeftButton = styled.div`
    margin-top: 10px;
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
                    <img src="images/CED-images-2.png" style={{width: '42vw', height: 'auto'}} />
                </AttendRight>
            </AttendRow>
        </AttendContainer>
    )
}

export default Attend