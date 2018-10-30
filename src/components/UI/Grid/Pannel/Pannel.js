import React from 'react';
import GridButton from '../GridButton/GridButton'
import './Pannel.scss'

const pannel = ({ buttons }) => {
    return <ul className="pannel">{ buttons.map((button, index) => <GridButton key={index} image={button} />) }</ul>
}
 
export default pannel