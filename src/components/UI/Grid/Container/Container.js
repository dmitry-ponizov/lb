
import Row from '../Row/Row'
import Aux from '../../../../hoc/Aux/Aux'

import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
        <Aux>
         {this.props.rows.map((row,rowNumber) => 
            <div key={rowNumber}>
                {Object.values(row).map((cells,index) => 
                <Row key={index}
                    stylesHandler={(style, value) => this.props.stylesHandler(style, value)}
                    selectedHandler={(item) => this.props.selectedHandler(item)}
                    itemHandler={(item, settings) => this.props.itemHandler(item, settings)}
                    editable={this.props.editable}
                    onDropHandler={(dropItem)=> this.props.onDropHandler(dropItem)} 
                    rowNumber={rowNumber}
                    columns={Object.keys(row)[0]} 
                    row={cells}
                    />)}
            </div>)}
    </Aux>
    )
  }
}


