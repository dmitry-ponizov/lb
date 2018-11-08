import React, { Component } from 'react'
import './RightMenu.scss'
import Save from './Save/Save'
import Preview from './Preview/Preview'
import Logout from './Logout/Logout'
import Back from './Back/Back'

class RightMenu extends Component {

    state = {
        selected: null,
        options : ['Template one', 'Template two']
    }

    clickHandler = (selected) => {
        this.setState({selected:selected})
        let arr = selected.split(' ')   
        let upperCase = arr.map(a => a.charAt(0).toUpperCase() + a.substr(1));
        this.props.onSelectLayout(upperCase.join(''))
    }

    render () {
        return (
            <div className="builder-header-right-menu">
               {!this.props.preview ? 
                    <React.Fragment>
                        <Save previewHandler={this.props.previewHandler} />
                        {/* <Load />  */}
                        <Preview previewHandler={this.props.previewHandler}
                        /> 
                    </React.Fragment>
                 : ''}
                 {this.props.preview ? <Back /> : <Logout /> }
                 
            </div>
        )
    }
}



export default RightMenu;