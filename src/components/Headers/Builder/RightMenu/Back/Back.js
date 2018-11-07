import React from 'react'
import { Link } from 'react-router-dom'

const back = (props) => {
  return (
    <div className="builder-header-btn"  >
        <div className="builder-header-container">
            <Link className="full-size" to="/dashboard">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                Back
            </Link>
        </div>
    </div>

  )
}

export default back;