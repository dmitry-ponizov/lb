import React, { Component } from 'react'
import Modal from '../../../../UI/Modal/Modal'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'
import './Load.scss'

class Load extends Component {
    state = {
        show: false,
        loadedJson: null
    }

    clickHandler = () => {
        this.setState({show:true, loadedJson: null})
    }

    cancelHandler = () => {
        console.log(this.state.active)
        this.setState({show:false})

    }
    applyHandler = () => {
        this.setState({show:false})
        if(!this.state.loadedJson) {
            return
        }

        this.props.onJsonInTemplate(this.state.loadedJson)
    }

    onChangeHandler = (e) => {
        this.setState({loadedJson:e.target.value})
    }
    
    render() {
        return (
            <div className="builder-header-btn">
                <div onClick={this.clickHandler}>
                    <i className="fa fa-download" aria-hidden="true"></i>
                    <p className="builder-header-load">Load</p>
                </div>
                <Modal show={this.state.show} modalClosed={this.cancelHandler}>
                    <p>Load JSON in Tempate </p>
                    <textarea className="load-textarea" cols="60" rows="10" value={this.state.loadedJson || ''} onChange={this.onChangeHandler} ></textarea>
                    <div className="btn-container">
                            <div className="cancel-btn" onClick={this.cancelHandler}>Cancel</div>
                            <div className="apply-btn" onClick={this.applyHandler}>Apply</div>            
                    </div>
                </Modal>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onJsonInTemplate: (json) => dispatch(actions.jsonInTemplate(json))
    }
}

export default connect(null, mapDispatchToProps)(Load);