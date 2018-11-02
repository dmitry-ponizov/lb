import React from 'react'
import Row from '../Row/Row'
import Aux from '../../../../hoc/Aux/Aux'

const Container = (props) => (
    <Aux>
         {props.rows.map((row,rowNumber) => 
            <div key={rowNumber}>
                {Object.values(row).map((cells,index) => 
                <Row key={index}
                     stylesHandler={(style, value) => props.stylesHandler(style, value)}
                     selectedHandler={(item) => props.selectedHandler(item)}
                     itemHandler={(item, settings) => props.itemHandler(item, settings)}
                    editable={props.editable}
                    onDropHandler={(dropItem)=> props.onDropHandler(dropItem)} 
                    rowNumber={rowNumber}
                    columns={Object.keys(row)[0]} 
                    row={cells}
                    />)}
            </div>)}
    </Aux>
)

export default Container;