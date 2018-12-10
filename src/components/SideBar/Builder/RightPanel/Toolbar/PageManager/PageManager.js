import React, { Component } from 'react'
import styled from 'styled-components';
import PageSettings from './PageSettings/PageSettings'
import { connect } from 'react-redux'
import * as actions from '../../../../../../store/actions'


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Title = styled.div`
  display: flex;
  font-family: Muli;
  font-size: 18px;
  letter-spacing: 0.4px;
  color: #000000;
  padding: 15px 0px 0px 15px ;
`

const AddPage = styled.div`
  font-family: Muli;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.3px;
  color: #e36854;
  display:flex;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 15px;
`

const Buttons = styled.div`
    border-top:solid 1px #eaeaea;
    display: flex;
`
const Container = styled.div`
    padding: 7px;
`
const Button = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 46px;
    cursor:pointer;
    &:first-child{
        border-right:solid 1px #eaeaea;
    }
    &:hover {
        span{
            color: #000000;
        }
    }
    span {
        font-family: Muli;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.3px;
        color: #969696;
    }

`

class PageManager extends Component {

    cancelHandler = () => {
        this.props.onFetchWebsiteStructure()

    }
    applyMenuHandler = () => {
            this.props.onUpdatePages()
            this.props.onTemplateInJson();
            this.props.onSaveHandler();
            this.props.onCreateWebsiteStructure()
    }
    render() {
        return (
            <Wrapper>
                <Container>
                    <Title>Page manager</Title>
                    {this.props.pages.map((page, index) =>
                        <PageSettings
                            key={index}
                            index={index}
                            deletePage={(pageName) => this.props.onDeletePage(pageName)}
                            pageNameHandler={(index, pageName) => this.props.onChangePageName(index, pageName)}
                            page={page}
                        />)}
                    <AddPage onClick={this.props.onAddPageToMenu}>
                        Add New Page +
                    </AddPage>
                </Container>
                <Buttons>
                    <Button onClick={this.cancelHandler}><span>Cancel</span></Button>
                    <Button onClick={this.applyMenuHandler}><span>Apply</span></Button>
                </Buttons>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        pages: state.builder.pages
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddPageToMenu: () => dispatch(actions.addPageToMenu()),
        onChangePageName: (index, pageName) => dispatch(actions.changePageName(index, pageName)),
        onDeletePage: (pageName) => dispatch(actions.deletePage(pageName)),
        onTemplateInJson: () => dispatch(actions.templateInJson()),
        onCreateWebsiteStructure: () => dispatch(actions.createWebsiteStructure()),
        onUpdatePages: () => dispatch(actions.updatePages()),
        onFetchWebsiteStructure: () => dispatch(actions.fetchWebsiteStructure())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageManager);