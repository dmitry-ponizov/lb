import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import previewImg from '../../../../../assets/images/preview.svg' 
import { Link } from 'react-router-dom'

class Preview extends Component {
    render() {
        return (
            <div className="builder-header-btn"  >
                <div>
                    <Link to="/preview" onClick={() => this.props.previewHanlder()}>
                        <ReactSVG src={previewImg}  />
                         Preview
                    </Link>
                </div>
            </div>
        )
    }
} 

export default Preview;