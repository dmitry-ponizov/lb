import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonStyled } from '../../../../../styled/Button'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'

const ButtonStyledMarginTop = styled(ButtonStyled)`
    margin-top: 65px;
`

const AvailableWrapperStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const AvailableContainerStyles = styled.div`
  
`
const AvailableRowStyles = styled.div`
  display:flex;
  font-family: Muli;
  .available-ceil {
    font-weight: 600;
    font-size: 60px;
    line-height:4.6rem;
  }
  .available-float {
    font-size: 4rem;
    font-weight: 600;
    line-height: 0.75;
    /* margin-top: 20px; */
  }
  .available-currency {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5;
    display:flex;
    align-items: center;
    padding: 10px;
  }
`

const AvailableTitleStyles = styled.div`
  font-family: Muli;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;
  max-width: 235px;
`

const AbvailavlePrice = styled.div`
  display: flex;
  padding: 10px 15px;

`

const FormTitleStyles = styled.div`
    font-family: Muli;
    font-size: 1.3rem;
    color: #969696;
    font-weight: bold;
`
const AvailableFormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  min-width: 235px;
  justify-content: space-between;
  align-items: center;
`

const FormSelect = styled.div`
  padding: 0 20px;
  select {
    font-family: Muli;
    font-size: 1.3rem;
    font-weight: 600;
    border: none;
    margin: 4px;
    &:focus {
      border-color: transparent;
      box-shadow: none;
    }
  }
`

const FormInputStyles = styled.div`
      display: flex;
      padding: 0 20px;
      input[type=checkbox]{
      height: 0;
      width: 0;
      visibility: hidden;
    }

    label {
      cursor: pointer;
      text-indent: -9999px;
      width: 32px;
      height: 17px;
      background: grey;
      display: block;
      border-radius: 100px;
      position: relative;
    }

    label:after {
      content: '';
      position: absolute;
      top: 1px;
      left: 2px;
      width: 15px;
      height: 15px;
      background: #fff;
      border-radius: 90px;
      transition: 0.3s;
    }

    input:checked + label {
      background:#e36854;
    }

    input:checked + label:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }

    label:active:after {
      width: 130px;
    }

`


class AvailableDomain extends Component {
  state = {
    period: '1 year',
    renew: false
  } 
  chooseDomainHandler = () => {
    const period = this.state.period.split(" ")[0];
    this.props.onCreateDomainOrder({
      name: this.props.domain.domain,
      created: new Date(),
      period: period,
      renewAuto: this.state.renew,
      price: this.props.domain.price * period,
      currency: this.props.domain.currency,
      available: this.props.available
    })
    this.props.chooseHandler();
  }
  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  changeCheckboxHandler = () => {
    this.setState(prevState => ({
      renew: !prevState.renew
    }))
  }
  render() {
    return (
      <AvailableWrapperStyles>
        <AvailableContainerStyles>
          <AvailableRowStyles>
            <AvailableTitleStyles>
              This domain is available.
              You can buy it now for
            </AvailableTitleStyles>
            <AbvailavlePrice>
              <div className="available-ceil">{(this.props.domain.price + "").split(".")[0]}</div>
              <div className="available-float">.{(this.props.domain.price + "").split(".")[1]}</div>
              <div className="available-currency">{this.props.domain.currency}</div>
            </AbvailavlePrice>
          </AvailableRowStyles>
          <AvailableRowStyles>
            <AvailableFormContainer>
              <FormTitleStyles>Choose period:</FormTitleStyles>
              <FormSelect >
                <select className="custom-select" name="period" defaultValue={this.state.period } onChange={this.changeHandler} >
                  <option  value="1 year">1 year</option>
                  <option  value="2 years">2 years</option>
                  <option  value="3 years">3 years</option>
                </select>
              </FormSelect>
            </AvailableFormContainer>
          </AvailableRowStyles>
          <AvailableRowStyles>
            <AvailableFormContainer>
              <FormTitleStyles>Auto renew domain:</FormTitleStyles>
              <FormInputStyles>
                <input type="checkbox" onChange={this.changeCheckboxHandler} id="switch" name="renew" defaultValue={this.state.renew} />
                <label htmlFor="switch"></label>
              </FormInputStyles>
            </AvailableFormContainer>
          </AvailableRowStyles>
          <AvailableRowStyles>
            <ButtonStyledMarginTop onClick={this.chooseDomainHandler}>
              Choose Domain
            </ButtonStyledMarginTop>
          </AvailableRowStyles>
        </AvailableContainerStyles>
      </AvailableWrapperStyles>
      
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateDomainOrder: (order) => dispatch(actions.createDomainOrder(order))
  }
}

export default connect(null, mapDispatchToProps)(AvailableDomain);