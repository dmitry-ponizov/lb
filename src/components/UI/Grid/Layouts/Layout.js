import React, { Component } from 'react';
import TemplateOne from './TemplateOne/TemplateOne';
import TemplateTwo from './TemplateTwo/TemplateTwo';
import TemplateLanding from './TemplateLanding/TemplateLanding'

class Layout extends Component {
    components = {
        TemplateOne,
        TemplateTwo,
        TemplateLanding
    };
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName {...this.props} />
    }
}
export default Layout;