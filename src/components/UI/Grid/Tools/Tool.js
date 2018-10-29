import React, { Component } from 'react';
import Text from './Text/Text'
import Image from './Image/Image'
import Link from './Link/Link'

class Tool extends Component {
    components = {
        Text: Text,
        Image: Image,
        Link: Link
    };
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName   {...this.props}  />
    }
}
export default Tool;