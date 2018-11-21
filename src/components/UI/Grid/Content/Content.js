import React, { Component } from 'react'
import Pannel from '../Pannel/Pannel';
import { connect } from 'react-redux'
import Container from '../Container/Container'
import * as actions from '../../../../store/actions/index'
import { BuilderContext } from '../../../../containers/Builder/BuilderContext/BuilderContext'
import Alert from '../../Alert/Alert'
import styled from 'styled-components'

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
        if (this.props.website) {
            this.props.onFetchWebsiteStructure()
        }
    }

    render() {
        return (
            <ContentStyled>
                <ContentDraggable style={{ width: this.props.widthWorkspace }}>
                    <DraggableHeader>
                        {this.props.published && <Alert type="success">
                            <strong>  Your website has been successfully published! </strong>
                            <span>You can view it by clicking on the  </span>
                            <a href={this.props.website.url} target="blank">{this.props.website.url}</a>
                            <button type="button" className="close" onClick={() => this.props.onChangePublishStatus()} >
                                <span >&times;</span>
                            </button>
                        </Alert>}
                    </DraggableHeader>
                    <DraggableBody>
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
        selectedItem: state.builder.selectedItem
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
        onChangePublishStatus: () => dispatch(actions.changePublishStatus())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);