import React from "react"
import styled from "styled-components"
import CountUp from "react-countup"

const CounterContainer = styled.div`
    margin: 50px;
`
const CounterBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const CounterSection = styled.div`
    display: flex;
    flex-direction: column;
`

const CounterNumber = styled.div`
    font-size: 55px;
    color: #141d50;
    font-weight: bold;
    text-align: center;
`
const CounterName = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
`

const Counter = () => {
    return(
        <CounterContainer>
            <CounterBody>
                <CounterSection>
                    <CounterNumber>
                        <CountUp start={0} end={10000} duration={20} />+
                    </CounterNumber>
                    <CounterName>Visitors</CounterName>
                </CounterSection>
                <CounterSection>
                    <CounterNumber>
                        <CountUp start={0} end={80} duration={5} />+
                    </CounterNumber>
                    <CounterName>Companies</CounterName>
                </CounterSection>
                <CounterSection>
                    <CounterNumber>
                        <CountUp start={0} end={60} duration={3} />+
                    </CounterNumber>
                    <CounterName>Speakers</CounterName>
                </CounterSection>
                <CounterSection>
                    <CounterNumber>
                        <CountUp start={0} end={30} duration={2} />+
                    </CounterNumber>
                    <CounterName>countries</CounterName>
                </CounterSection>
            </CounterBody>
        </CounterContainer>
    )
}

export default Counter