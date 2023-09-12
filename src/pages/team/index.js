import React from "react"
import styled from "styled-components"
import TeamMember from "../../components/TeamMember"

const TeamSection = styled.section`
    width: 100%;
    margin-bottom: 100px;
`
const TeamTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 45px;
    font-size: 47px;
    color: #141d50;
    font-weight: bolder;
`
const TeamDescription = styled.div`
    text-align: center;
    padding-bottom: 25px;
    font-size: 16px;
    line-height: 24px;
    color: #121212;
`
const TeamContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`
const TeamMemberList = styled.div`
    display: flex;
    justify-content: space-around;
`

const Team = () => {
    return(
        <>
            <TeamSection>
                <TeamTitle>Contact Our Team</TeamTitle>
                <TeamDescription>Our team is Committed to provide prompt and reliable assistance to our clients, and strive to be responsive to their needs</TeamDescription>
                <TeamContainer>
                    <TeamMemberList>
                        <TeamMember
                            src="images/diwain-150x150.png"
                            name="Dwain"
                            email="dwain@hqmena.com"
                            tel="+971 504379680"
                        />
                        <TeamMember
                            src="images/Image-Resize-150x150.jpg"
                            name="Melody"
                            email="melody@hqmena.com"
                            tel="+971 504380182"
                        />
                        <TeamMember
                            src="images/Untitled-2.png"
                            name="Ralph Kennith Bulfa"
                            email="ralph@hqmena.com"
                            tel="+971 503400351"
                        />
                        <TeamMember
                            src="images/Speaker-3.png"
                            name="Rijenn Andres"
                            email="rijenn@hqmena.com"
                            tel="+971 544974056"
                        />
                        <TeamMember
                            src="images/Speaker.png"
                            name="Mohammed Saleem "
                            email="saleem@hqmena.com"
                            tel="+971 54 706 8745"
                        />
                    </TeamMemberList>
                </TeamContainer>
            </TeamSection>
        </>
    )
}

export default Team