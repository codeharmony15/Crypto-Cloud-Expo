import React from "react"
import styled from "styled-components"
import Button from "../../components/Button"

const AgendaSection = styled.section`
    width: 100%;
    padding: 50px 0;
    background-image: url("images/imgpsh_fullsize_anim-2022-10-11T165042.187.png");
    background-size: cover;
    background-position: center;
    color: white;
    margin-bottom: 100px;
`
const AgendaContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`
const AgendaTitle = styled.div`
    text-transform: uppercase;
    font-size: 47px;
    margin-bottom: 45px;
`
const AgendaRow = styled.div`
    display: flex;
    align-items: center;
`
const AgendaLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const AgendaLeftDay = styled.div`

`

const AgendaRight = styled.div`
    
`
const AgendaDayComponent = styled.div`
    width: 160px;
    background: ${props => props.bgcolor};
    color: ${props => props.color};
    border-radius: 10px;
    cursor: pointer;
    padding: 25px 10px;
    text-align: center;
    margin-bottom: 20px;
    &:hover {
        background: linear-gradient(100.07deg, #2F3D77 0%, #E50134 176.51%);
        color: white;
    }
    margin-right: 150px;
`
const AgendaDayTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1.1;
`
const AgendaDayDate = styled.div`
    font-size: 18px;
`
const AgendaRightData = styled.div`
    display: flex;
`
const AgendaTime = styled.div`
    font-weight: 800;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    min-width: 300px;
`
const AgendaDescription = styled.div`
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 1rem;
`
const AgendaFull = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;
`

const Agenda = () => {
    return(
        <AgendaSection>
            <AgendaContainer>
                <AgendaTitle>Agenda</AgendaTitle>
                <AgendaRow>
                    <AgendaLeft>
                        <AgendaLeftDay>
                            <AgendaDay
                                selected={true}
                                day="Day 1"
                                date="20 September"
                                year="2023"
                            />
                        </AgendaLeftDay>
                        <AgendaLeftDay>
                            <AgendaDay
                                selected={false}
                                day="Day - 2"
                                date="21 September"
                                year="2023"
                            />
                        </AgendaLeftDay>
                    </AgendaLeft>
                    <AgendaRight>
                        <AgendaRightData>
                            <AgendaTime>9:00 am - 10:00 am</AgendaTime>
                            <AgendaDescription>REGISTRATION</AgendaDescription>
                        </AgendaRightData>
                        <AgendaRightData>
                            <AgendaTime>10:00 am - 10:20 am</AgendaTime>
                            <AgendaDescription>A Comprehensive Exploration of UAE’s Blockchain Ecosystem – Prospects and Hurdles</AgendaDescription>
                        </AgendaRightData>
                        <AgendaRightData>
                            <AgendaTime>10:20 am - 10:50 am</AgendaTime>
                            <AgendaDescription>Cryptocurrency Dynamics Unveiled: Pioneering Revelations and Projections from Top-tier Industry Exchanges</AgendaDescription>
                        </AgendaRightData>
                        <AgendaRightData>
                            <AgendaTime>10:50 am - 11:10 am</AgendaTime>
                            <AgendaDescription>Just Dao IT: A Comprehensive Review of Leading DAO Platforms and Tools for Business Adoption</AgendaDescription>
                        </AgendaRightData>
                        <AgendaRightData>
                            <AgendaTime>11:10 am - 11:30 am</AgendaTime>
                            <AgendaDescription>Secure Consumer Protection in a Decentralized World</AgendaDescription>
                        </AgendaRightData>
                    </AgendaRight>
                </AgendaRow>
                <AgendaFull>
                    <Button name="View Full Agenda"></Button>
                </AgendaFull>
            </AgendaContainer>
        </AgendaSection>
    )
}

const AgendaDay = ({
    selected,
    day,
    date,
    year
}) => {
    return(
        <AgendaDayComponent bgcolor={selected ? "linear-gradient(100.07deg, #2F3D77 0%, #E50134 176.51%)" : "linear-gradient(100.07deg, #b9bbca 0%, #d9b6c6 100%)"} color={selected ? "white" : "#141d50"}>
            <AgendaDayTitle>{day}</AgendaDayTitle>
            <AgendaDayDate>{date}</AgendaDayDate>
            <AgendaDayDate>{year}</AgendaDayDate>
        </AgendaDayComponent>
    )
}

export default Agenda