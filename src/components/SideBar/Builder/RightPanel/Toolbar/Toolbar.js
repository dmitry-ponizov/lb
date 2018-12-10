import React from 'react'
import GeneralToolBar from './General/GeneralToolBar';
import PageManager from './PageManager/PageManager'


class Toolbar extends React.Component {
    components = {
        general: GeneralToolBar,
        pageManager: PageManager,
    };
    render() {
        const TagName = this.components[this.props.component];
        return <TagName {...this.props} />
    }
}
export default Toolbar;