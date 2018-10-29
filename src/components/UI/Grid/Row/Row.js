import React from 'react'
import Column from '../Column/Column'
import classes from './Row.module.css'

const Row = (props) => (
    <div className="row">
        {Object.keys(props.row).map((cell, index) => 
        <div key={index} className={(props.editable ? classes.column : null) + ' col-md-' + 12/(props.row.length)}>
            <Column 
                editable={props.editable}
                selectedHandler={(settings) => props.selectedHandler(settings)}
                itemHandler={(item,settings) => props.itemHandler(item,settings)}
                columnName={cell} 
                gridType={props.columns}  
                rowNumber={props.rowNumber} 
                name={cell} 
                onDropHandler={(id)=>props.onDropHandler(id)}  
                components={props.row[cell]} />
        </div> )}
    </div>
)


export default Row;

