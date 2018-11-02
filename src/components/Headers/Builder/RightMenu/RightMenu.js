import React, { Component } from 'react'
import './RightMenu.scss'
import Save from './Save/Save'
import Load from './Load/Load'
import Preview from './Preview/Preview'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'

class RightMenu extends Component {

    state = {
        selected: null,
        options : ['Template one', 'Template two']
    }

    clickHandler = (selected) => {
        let arr = selected.split(' ')   
        let upperCase = arr.map(a => a.charAt(0).toUpperCase() + a.substr(1));
        this.props.onSelectLayout(upperCase.join(''))
    }

    render () {
        return (
            <div className="builder-header-right-menu">
                <div className="builder-header-dropdown">
                    <Dropdown  
                        clickHandler={(selected) => this.clickHandler(selected)} 
                        selected={this.props.selectedLayout}
                        options={this.state.options}
                    />
                </div>
                <Save />
                <Load />
                <Preview
                  selectedLayout={this.props.selectedLayout} 
                  previewHanlder={this.props.previewHanlder}
                 />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedLayout: state.builder.selectedLayout
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectLayout: (layout) => dispatch(actions.selectLayout(layout))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightMenu);