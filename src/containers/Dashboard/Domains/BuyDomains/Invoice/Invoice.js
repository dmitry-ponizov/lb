import React, { Component } from 'react'
import styled from 'styled-components';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { ButtonStyled } from '../../../../../styled/Button'
import * as actions from '../../../../../store/actions'

const InvoceWrapperStyles = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

`
const InvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  .title, .created-date, time{
    font-family: Muli;
    font-size: 16px;
    line-height: 1.67;
    font-weight: bold;
  }
  .created-date {
    margin-top: 5px;
  }

`
const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  
    .field-label{
      font-family: Muli;
      font-size: 1.3rem;
      color: #969696;
      flex: 1;
    }
    .field-value {
      font-family: Muli;
      font-size: 1.3rem;
      font-weight: bold; 
      flex: 1;
    }
`

const Fields = styled.div`
    max-width: 305px;
    border-bottom: 2px solid #f2f3f5;
    padding-bottom: 30px;
`
const Total = styled.div`
  max-width: 305px;
`

const Price = styled.div`
  display: flex;
  padding: 10px 15px;
  color: #e36854;
    .price-ceil {
      font-weight: 600;
      font-size: 3rem;
      line-height:2.6rem;
    }
    .price-float {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 0.75;
    }
    .price-currency {
      font-size: 1.3rem;
      font-weight: bold;
      line-height: 1.5;
      display:flex;
      align-items: center;
      padding: 5px;
    }
`

const Buttons = styled.div`
    display: flex;
    margin-top: 65px;
    .cancel-btn {
      font-family: Muli;
      font-size: 1.3rem;
      color: #969696;
      padding: 10px;
      margin-left: 10px;
      cursor: pointer;
    }
`

class Invoice extends Component {
  state = {
    price: this.props.order.price
  }

  purchaseHandler = () => {
    this.props.onPurchaseDomain()
    this.props.activeTabHandler('My Domains')
  }
  render() {

    return (
      <InvoceWrapperStyles>
        <InvoiceContainer>
          <div className="title" >Invoice #: 123</div>
          <div className="created-date">Created: <Moment  format="LLLL">{this.props.order.created}</Moment></div>
          <Fields>
            <Field>
              <div className="field-label">Domain name:</div>
              <div className="field-value" >{this.props.order.name}</div>
            </Field>
            <Field>
              <div className="field-label">Period:</div>
              <div className="field-value" >{this.props.order.period === '1' ? this.props.order.period + ' year' : this.props.order.period  + ' years'}</div>
            </Field>
            <Field>
              <div className="field-label">Auto renew:</div>
              <div className="field-value" >{this.props.order.renewAuto ? 'Yes' : 'No'}</div>
            </Field>
          </Fields>
          <Total>
            <Field>
              <div className="field-label">Total:</div>
              <Price>
                <div className="price-ceil">{(this.state.price   + "").split(".")[0]}</div>
                <div className="price-float">.{(this.state.price + "").split(".")[1]}</div>
                <div className="price-currency">{this.props.order.currency}</div>
              </Price>
            </Field>
          </Total>
          <Buttons>
            <ButtonStyled onClick={this.purchaseHandler}>
                Buy Domain
            </ButtonStyled>
            <div className="cancel-btn" onClick={this.props.chooseHandler}>Cancel</div>
          </Buttons>
        </InvoiceContainer>
      </InvoceWrapperStyles>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.domains.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPurchaseDomain: () => dispatch(actions.purchaseDomain())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Invoice);