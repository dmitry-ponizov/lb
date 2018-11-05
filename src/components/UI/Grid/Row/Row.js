import React from 'react'
import Column from '../Column/Column'
import  './Row.scss'

const Row = (props) => {
    const gridType = () => {
        if(props.columns === 'twoUneven') {
            return [
                ' col-md-4',
                ' col-md-8'
            ]
        } else if(props.columns === 'threeUneven') {
            return [
                ' col-md-3',
                ' col-md-6',
                ' col-md-3'
            ]
        } else {
            return [
                ' col-md-' + 12/(props.row.length),
                ' col-md-' + 12/(props.row.length),
                ' col-md-' + 12/(props.row.length)
            ]
        }
    }

    return (
        <div className="row">
            {Object.keys(props.row).map((cell, index) => 
            <div key={index} className={(props.editable ? 'row-content' : '') + gridType()[index]}>
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
}


export default Row;

