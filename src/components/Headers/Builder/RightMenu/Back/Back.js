import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Back extends Component {

  clickHandler = () => {
    this.props.history.push('/builder')
  }
  render() {
    return (
        <div className="builder-header-btn"  >
            <div className="builder-header-container">
                <div className="full-size" onClick={this.clickHandler}>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    Back
                </div>
            </div>
        </div>
      )
  }
}


export default withRouter(Back);