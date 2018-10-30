import React from 'react'
import Row from '../Row/Row'

const Container = (props) => (
    <div className="container">
         {props.rows.map((row,rowNumber) => 
            <div key={rowNumber}>
                {Object.values(row).map((cells,index) => 
                <Row key={index} 
                    editable={props.editable}
                    selectedHandler={(item) => props.selectedHandler(item)}
                    itemHandler={(item, settings) => props.itemHandler(item, settings)}
                    onDropHandler={(dropItem)=> props.onDropHandler(dropItem)} 
                    rowNumber={rowNumber}
                    columns={Object.keys(row)[0]} 
                    row={cells}
                    />)}
            </div>)}
    </div>
)

export default Container;