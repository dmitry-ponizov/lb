import React, { Component } from 'react'
import Pannel from '../Pannel/Pannel';
import { connect } from 'react-redux'
import Container from '../Container/Container'
import * as actions from '../../../../store/actions/index'
import { BuilderContext } from '../../../../containers/Builder/BuilderContext/BuilderContext'
import Alert from '../../Alert/Alert'
import styled from 'styled-components'
import Header from '../Header/Header'
import { withRouter } from 'react-router-dom';


const ContentStyled = styled.div`
    background-color: #f2f3f5;
    padding: 35px 60px;
    width: 100%;
`

const ContentDraggable = styled.div`
    border-radius: 6px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.06);
    background-color: #ffffff;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
`
const DraggableHeader = styled.div`
    min-height: 80px;
    border-bottom: 1px dashed #979797;
`

const DraggableBody = styled.div`
    .row {
        margin: 0;
    }
    min-height: 500px;
    border-bottom: 1px dashed #979797;
`
class Content extends Component {


    componentDidMount = () => {
        if (!this.props.rows.length) {
            this.props.onFetchWebsiteStructure()
            this.props.onSelectSection('builder')
        }
    }
    editPageHandler = () => {
        this.props.onSelectSection('page_manager')
        this.props.history.push('/page_manager')
    }

    render() {
        return (
            <ContentStyled >
                <ContentDraggable className={this.props.selectedTemplate.name + " main-container"} style={{ width: this.props.widthWorkspace }}>
                    <DraggableHeader>
                        {this.props.published && <Alert type="success">
                            <strong>  Your website has been successfully published! </strong>
                            <span>You can view it by clicking on the  </span>
                            <a href={this.props.website.url} target="blank">{this.props.website.url}</a>
                            <button type="button" className="close" onClick={() => this.props.onChangePublishStatus()} >
                                <span >&times;</span>
                            </button>
                        </Alert>}
                        <Header 
                            pages={this.props.pages} 
                            currentPage={this.props.currentPage}
                            editHandler={this.editPageHandler}
                            editable={this.props.editable}
                            changePage={ (pageName) => this.props.onChangePage(pageName) }
                        />
                    </DraggableHeader>
                    <DraggableBody className="builder-body">
                        <BuilderContext.Provider value={{
                            deleteItemHandler: this.props.onDeleteItemHandler,
                            rowDeleteHandler: this.props.onDropRow,
                            stylesHandler: this.props.onChangeStyleItem,
                            selectedHandler: this.props.onSelectItem,
                            changeContentItem: this.props.onChangeContentItem,
                            onDropHandler: this.props.onDrop,
                            reorderHandler: this.props.onReorderColumnItems,
                            saveHandler: this.props.saveHandler,
                        }}>
                            <Container rows={this.props.rows} editable={this.props.editable} selectedItem={this.props.selectedItem} />
                        </BuilderContext.Provider>
                    </DraggableBody>
                    <Pannel buttons={Object.keys(this.props.layouts)} />
                </ContentDraggable>
            </ContentStyled>
        )
    }
}


const mapStateToProps = state => {
    return {
        rows: state.builder.rows,
        tools: state.builder.tools,
        layouts: state.builder.layouts,
        website: state.websites.website,
        widthWorkspace: state.builder.widthWorkspace,
        published: state.websites.published,
        selectedItem: state.builder.selectedItem,
        pages: state.builder.pages,
        currentPage: state.builder.currentPage,
        selectedTemplate: state.templates.selectedTemplate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDropRow: (rowNumber) => dispatch(actions.deleteRow(rowNumber)),
        onChangeStyleItem: (param, content) => dispatch(actions.changeStyleItem(param, content)),
        onDrop: (newItem) => dispatch(actions.dropItem(newItem)),
        onSelectItem: (item) => dispatch(actions.selectItem(item)),
        onChangeContentItem: (item, settings) => dispatch(actions.changeContentItem(item, settings)),
        onReorderColumnItems: (newColumn, columnId, rowId, gridType) => dispatch(actions.reorderColumnItems(newColumn, columnId, rowId, gridType)),
        onDeleteItemHandler: (item) => dispatch(actions.deleteItem(item)),
        onFetchWebsiteStructure: () => dispatch(actions.fetchWebsiteStructure()),
        onChangePublishStatus: () => dispatch(actions.changePublishStatus()),
        onChangePage: (pageName) => dispatch(actions.changePage(pageName)),
        onSelectSection: (section) => dispatch(actions.selectSection(section))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));