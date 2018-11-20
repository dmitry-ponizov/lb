import React, { Component } from 'react'
import './Content.scss'
import Pannel from '../Pannel/Pannel';
import { connect } from 'react-redux' 
import Container from '../Container/Container'
import * as actions from '../../../../store/actions/index'
import { BuilderContext } from '../../../../containers/Builder/BuilderContext/BuilderContext'
import Alert from '../../Alert/Alert'

class Content extends Component {


    componentDidMount = () => {
        if(this.props.website){
            this.props.onFetchWebsiteStructure()
        }
    }

    render() {
        return (
            <div className="content">
               <div className="content-draggable" style={{width: this.props.widthWorkspace}}>
                    <div className="draggable-header">
                        {this.props.published && <Alert type="success">
                            <strong>  Your website has been successfully published! </strong>
                            <span>You can view it by clicking on the  </span>
                            <a href={this.props.website.url} target="blank">{this.props.website.url}</a>
                            <button type="button" className="close" onClick={()=> this.props.onChangePublishStatus()} >
                                <span >&times;</span>
                            </button>
                        </Alert>}
                    </div>
                    <div className="draggable-body">
                        <div className="container-drag">
                        <BuilderContext.Provider value={{
                                deleteItemHandler: this.props.onDeleteItemHandler,
                                rowDeleteHandler: this.props.onDropRow,
                                stylesHandler: this.props.onChangeStyleItem,
                                selectedHandler: this.props.onSelectItem,
                                changeContentItem: this.props.onChangeContentItem,
                                onDropHandler:this.props.onDrop,
                                reorderHandler:this.props.onReorderColumnItems,
                                saveHandler:this.props.saveHandler
                            }}>
                            <Container rows={this.props.rows} editable={this.props.editable} />
                        </BuilderContext.Provider>
                        </div>
                    </div>
                    <Pannel buttons={Object.keys(this.props.layouts)} />
               </div>   
            </div>
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
        published: state.websites.published
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDropRow: (rowNumber) => dispatch(actions.deleteRow(rowNumber)),
        onChangeStyleItem: (param, content) => dispatch(actions.changeStyleItem(param, content)),
        onDrop: (newItem) => dispatch(actions.dropItem(newItem)),
        onSelectItem: (item) => dispatch(actions.selectItem(item)),
        onChangeContentItem: (item, settings) => dispatch(actions.changeContentItem(item, settings)),
        onReorderColumnItems: (newColumn, columnId, rowId) => dispatch(actions.reorderColumnItems(newColumn, columnId, rowId)),
        onDeleteItemHandler: (item) => dispatch(actions.deleteItem(item)),
        onFetchWebsiteStructure: () => dispatch(actions.fetchWebsiteStructure()),
        onChangePublishStatus: () => dispatch(actions.changePublishStatus())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);