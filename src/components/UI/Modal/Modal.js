import React, { Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop'
import { ModalStyled } from '../../../styled/Modal'


class Modal extends React.Component {


  shouldComponentUpdate(nextProps, nextState){
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <ModalStyled className='Modal' style={{
             transform: this.props.show ? 'translateX(-50%)' : 'translateY:(-100vh)',
             display: this.props.show ? 'block' : 'none'
          }}>
          {this.props.children}
        </ModalStyled>
      </Fragment>
    )
  }
}


export default Modal;
