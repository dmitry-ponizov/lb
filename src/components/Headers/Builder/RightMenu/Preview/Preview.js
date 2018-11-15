import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import previewImg from '../../../../../assets/images/preview.svg' 
import { withRouter } from 'react-router-dom';

class Preview extends Component {

    previewHandler = () => {
        this.props.previewHandler()
        this.props.history.push('/preview')
    }
    render() {
        return (
            <div className="builder-header-btn"  >
                <div className="builder-header-container">
                    <div className="full-size" to="/preview" onClick={() => this.previewHandler()}>
                        <ReactSVG src={previewImg}  />
                         Preview
                    </div>
                </div>
            </div>
        )
    }
} 

export default withRouter(Preview);