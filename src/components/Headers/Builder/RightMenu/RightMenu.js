import React, { Component } from 'react'
import Save from './Save/Save'
import Preview from './Preview/Preview'
import Logout from './Logout/Logout'
import Back from './Back/Back'
import Publish from './Publish/Publish'
import styled from 'styled-components'
import Desktop from './Desktop/Desktop';
import Tablet from './Tablet/Tablet'

const RightMenuStyled = styled.div`
    width: 500px;
    height: 60px;
    display: flex;
    justify-content: flex-end;
`

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
            <RightMenuStyled>
               {!this.props.preview ? 
                    <React.Fragment>
                        <Tablet />
                        <Desktop />
                        <Save previewHandler={this.props.previewHandler}  onSaveHandler={this.props.onSaveHandler}/>
                        <Preview previewHandler={this.props.previewHandler} /> 
                    </React.Fragment>
                 : ''}
                 {this.props.preview ? <Back /> : <Logout /> }
                 <Publish />
            </RightMenuStyled>
        )
    }
}



export default RightMenu;