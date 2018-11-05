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
                <div onClick={this.clickHandler} className="builder-header-container">
                    <i className="fa fa-download" aria-hidden="true"></i>
                    <p  className="btn-title">Load</p>
                </div>
                <Modal show={this.state.show} modalClosed={this.cancelHandler}>
                    <p>Load JSON in Tempate </p>
                    <div className="form-group">
                    <textarea className="load-textarea form-control" cols="60" rows="10" value={this.state.loadedJson || ''} onChange={this.onChangeHandler} ></textarea>
                    </div>
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