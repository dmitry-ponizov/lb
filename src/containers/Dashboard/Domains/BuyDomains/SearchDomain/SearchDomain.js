import React, { Component } from 'react'
import styled from 'styled-components'
import { WorkspaceLink } from '../../../../../styled/Workspace'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions' 
import ErrorMessage from '../../../../../components/UI/ErrorMessage/ErrorMessage'
import manImg from '../../../../../assets/images/man.svg'
import ReactSVG from 'react-svg'
import AvailableDomain from '../AvailableDomain/AvailableDomain'
import Invoce from '../Invoice/Invoice'

const SearchWrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 500px;
    transition: all 0.2s;
    flex-wrap: wrap;
    .search-field {
        display: flex;
        div{
            margin-left: 30px;
        }
    }

`
const BuyDomainTitleStyles = styled.div`
  font-family: Muli;
  font-size: 20px;
  letter-spacing: 0.4px;
  color: #000000;
  margin-top: 10px;
`
const SearchDomainTitle = styled.div`
  font-family: Muli;
  font-size: 10px;
  letter-spacing: 0.2px;
  color: #969696;
  margin-top: 30px;
`
const SearchInput = styled.input`
    border: none;
    border-bottom: 2px solid #c9c9c9;
    font-family: Muli;
    font-size: 14px;
    margin-top: 5px;
    min-width: 310px;
    &:focus {
        outline: none;
        border-bottom: 2px solid ${props => props.theme.mainColor}
    }
`
const MsgsStyles = styled.div`
    margin-top: 25px;
`

const WrongSearchBlock = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex: 1;
    p {
        font-family: Muli;
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 0.3px;
        text-align: center;
        font-weight: normal;
        margin-top: 25px;
        color: #969696;;
    }
`

const SuccessMsg = styled.div`
    font-family: Muli;
    font-size: 16px;
    letter-spacing: normal;
    color: #68ca71;
`

class SearchDomain extends Component {

    state = {
        search: '',
        choose: false
    }

    onChange = (e) => {
        this.setState({ search: e.target.value })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onCheckDomainName(this.state.search)
        }
    }
    chooseHandler = () => {
        this.setState((prevState)=>({
            choose: !prevState.choose
        }))
    }
    render() {
        return (
            <SearchWrapper>
                <div>
                    <BuyDomainTitleStyles> Check your domain </BuyDomainTitleStyles>
                    <SearchDomainTitle>Search domain</SearchDomainTitle>
                    <div className="search-field">
                        <SearchInput type="text" value={this.state.search} onChange={this.onChange}  onKeyPress={this.handleKeyPress} />
                        <WorkspaceLink onClick={() => this.props.onCheckDomainName(this.state.search)}>Check<i className="fa fa-angle-right"></i></WorkspaceLink>
                    </div>
                    <MsgsStyles>
                        <ErrorMessage position="left" errors={this.props.errors}/>
                        {this.props.domain && !this.props.domain.available && <ErrorMessage position="left" fontSize="1.4rem" className="text-align-left" errors={{error: ['Sorry, this domain is taken']}}/>}
                        {this.props.domain && this.props.domain.available && <SuccessMsg>Available</SuccessMsg>}
                    </MsgsStyles>
                </div>
                {(this.props.errors || (this.props.domain && !this.props.domain.available)) &&
                    <WrongSearchBlock>
                        <ReactSVG src={manImg} />
                        <p>Oops, something went wrong</p>
                    </WrongSearchBlock>}
                {this.props.domain && this.props.domain.available && !this.state.choose && <AvailableDomain chooseHandler={this.chooseHandler} domain={this.props.domain} /> }
                {this.state.choose && <Invoce chooseHandler={this.chooseHandler}  activeTabHandler={(tab) => this.props.activeTabHandler(tab)} />}
            </SearchWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        errors: state.domains.error,
        domain: state.domains.domain
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckDomainName: (domainName) => dispatch(actions.checkDomainName(domainName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDomain);