import React, { Fragment } from 'react';
import  './Modal.scss'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends React.Component {


  shouldComponentUpdate(nextProps, nextState){
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className='Modal'
          style={{
             transform: this.props.show ? 'translateX(-50%)' : 'translateY:(-100vh)',
             display: this.props.show ? 'block' : 'none'
          }}
          >
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}


export default Modal;
