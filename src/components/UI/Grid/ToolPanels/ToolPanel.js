import React, { Component } from 'react';
import TextPanel from './TextPanel/TextPanel'


class ToolPanel extends Component {
    components = {
        Text: TextPanel,
    };
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName  stylesHandler={(param, content) => this.props.stylesHandler(param, content)} />
    }
}
export default ToolPanel;