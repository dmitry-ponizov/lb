import React from 'react'
import Column from '../Column/Column'
import  './Row.scss'

const Row = (props) => (
    
    <div className="row">
        {Object.keys(props.row).map((cell, index) => 
        <div key={index} className={(props.editable ? 'row-content' : '') + ' col-md-' + 12/(props.row.length)}>
            <Column 
                editable={props.editable}
                columnName={cell} 
                gridType={props.columns}  
                stylesHandler={(style, value) => props.stylesHandler(style, value)}
                selectedHandler={(settings) => props.selectedHandler(settings)}
                itemHandler={(item,settings) => props.itemHandler(item,settings)}
                rowNumber={props.rowNumber} 
                name={cell} 
                onDropHandler={(id)=>props.onDropHandler(id)}  
                components={props.row[cell]} />
        </div> )}
    </div>
    
)


export default Row;

