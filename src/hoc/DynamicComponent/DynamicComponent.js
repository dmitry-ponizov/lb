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
       return <TagName elements={this.props.elements }/>
    }
}
export default DymamicComponent;