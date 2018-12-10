import React from 'react'
import styled from 'styled-components'

const MapWrapper = styled.div`
    max-width: 685px;
    max-height: 475px;
    img {
        height: 100%;
        width: 100%;
    }
`

const Map = () => {
  return (
    <MapWrapper className="builder-map" >
      <img src="http://dmhrgcel5lglf.cloudfront.net/image/MLBa4S1Nlg3Z94HWZ99E.png" alt="gm" />
    </MapWrapper>
  )
}

export default Map;