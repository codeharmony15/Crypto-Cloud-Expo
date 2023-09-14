import React from "react"
import styled from "styled-components"
import Button from "../../components/Button"

const MapSection = styled.section`
    width: 100%;
    background-image: url("images/Forex-Banner-_-01.jpeg");
    padding: 100px 0;
    margin-bottom: 100px;
    position: relative;
`
const MapOverlay = styled.div`
    position: absolute;
    background: linear-gradient(100.07deg, #121e52 0%, #e50134 176.51%);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .5;
`
const MapContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`
const MapRow = styled.div`
    display: flex;
    color: white;
    position: relative;
    z-index: 1;
    align-items: center;
    justify-content: space-around;
`
const MapText = styled.div`
    color: white;
`
const MapTitle = styled.div`
    text-transform: uppercase;
    font-size: 24px;
    margin-bottom: 45px;
    font-weight: bolder;
`
const MapContent = styled.div`
    margin-bottom: 1rem;
`

const Map = () => {
    return(
        <MapSection>
            <MapOverlay></MapOverlay>
            <MapContainer>
                <MapRow>
                    <iframe title="map" width="570" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Festival%20Arena%20%E2%80%93%20Dubai%20Festival%20City,%20UAE&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" marginheight="0" marginwidth="0"></iframe>
                    <MapText>
                        <MapTitle>in person event</MapTitle>
                        <MapContent><strong>Venue</strong>: Festival Arena – Dubai, ATLANTIS, THE PALM</MapContent>
                        <MapContent><strong>Date</strong>: October 5, 2023</MapContent>
                        <MapContent style={{marginBottom: '100px'}}><strong>Time</strong>: 6:30 pm</MapContent>
                        <Button name="View Google Map" />
                    </MapText>
                </MapRow>
            </MapContainer>
        </MapSection>
    )
}

export default Map