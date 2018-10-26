import React, { Component } from 'react';
import ThreeColumn from '../../components/UI/Grid/ThreeColumn/ThreeColumn';
import TwoColumn from '../../components/UI/Grid/TwoColumn/TwoColumn';


class DymamicComponent extends Component {
    components = {
        threeColumns: ThreeColumn,
        twoColumns: TwoColumn
    };
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName 
                selectedHandler={(settings) => this.props.selectedHandler(settings)}
                itemHandler={(item,settings) =>this.props.itemHandler(item,settings)}
                elements={this.props.elements } 
                gridType={this.props.tag} 
                rowNumber={this.props.rowNumber} 
                row={this.props.row} 
                components={this.props.components} 
                onDropHandler={(id)=>this.props.onDropHandler(id)} />
    }
}
export default DymamicComponent;