import React, { Component } from 'react'
import saveImg from '../../../../../assets/images/save.svg'
import ReactSVG from 'react-svg'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'
import { Button, ButtonContent } from '../../../../../styled/Header'

class Save extends Component {
    state = {
        show: false,
    }

    clickHandler = (e) => {
        if(this.props.rows.length) {
            this.props.onTemplateInJson();
            this.props.onSaveHandler();
            this.props.onCreateWebsiteStructure()
        }
    }

    cancelHandler = () => {
        this.setState({show:false})
    }
 
    render() {
        return (
            <Button>
                <ButtonContent onClick={this.clickHandler}>
                    <ReactSVG src={saveImg}  />
                    <p>Save</p>
                </ButtonContent>
            </Button>
        )
    }
}


const mapStateToProps = state => {
    return {
        json: state.builder.json,
        rows: state.builder.rows
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTemplateInJson: () => dispatch(actions.templateInJson()),
        onCreateWebsiteStructure: () => dispatch(actions.createWebsiteStructure())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Save);