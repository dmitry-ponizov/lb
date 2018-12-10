import React, { Component } from 'react';
import Text from './Text/Text'
import Image from './Image/Image'
import Link from './Link/Link'
import Subscribe from './Subscribe/Subscribe'
import Icon from './Icon/Icon'
import Button from './Button/Button'
import Map from './Map/Map'
import Form from './Form/Form'

class Tool extends Component {
    components = {
        Text: Text,
        Image: Image,
        Link: Link,
        Subscribe: Subscribe,
        Icon: Icon,
        Button: Button,
        Map: Map,
        Form: Form
    };
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName {...this.props}  />
    }
}
export default Tool;