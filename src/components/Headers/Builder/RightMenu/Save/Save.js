import React, { Component } from 'react'
import saveImg from '../../../../../assets/images/save.svg'
import ReactSVG from 'react-svg'
import Modal from '../../../../UI/Modal/Modal'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'
import ContentEditable from 'react-contenteditable'
import './Save.scss'
import Alert from '../../../../UI/Alert/Alert'

class Save extends Component {
    state = {
        show: false,
        copied: false
    }

    clickHandler = () => {
        this.props.onTemplateInJson()
        if(this.props.rows.length) {
            this.setState({show:true})
        }
    }

    cancelHandler = () => {
        this.setState({show:false})
        this.setState({
            copied: false
        })

    }
    clipboardHandler = () => {
        navigator.clipboard.writeText(this.props.json)
        this.setState({
            copied: true
        })
    }
    render() {
        return (
            <div className="builder-header-btn" >
                <div className="builder-header-container" onClick={this.clickHandler}>
                    <ReactSVG src={saveImg}  />
                    <p className="btn-title">Save</p>
                </div>
                <Modal show={this.state.show} modalClosed={this.cancelHandler}>
                    <p>Template in JSON format</p>
                    {this.state.copied && <Alert type="success">
                        <span>Сopied clipboard success!</span>
                    </Alert>}
                    <div className="builder-header-json">
                        <ContentEditable
                            html={this.props.json || ''} 
                            tagName='div' 
                        />
                     
                    </div>
                    <div className="btn-container">
                            <div className="cancel-btn" onClick={this.cancelHandler}>Cancel</div>
                            <div className="apply-btn" onClick={this.clipboardHandler}>Copy</div>            
                    </div>
                </Modal>
            </div>
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Save);