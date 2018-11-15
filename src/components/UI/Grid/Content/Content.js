import React, { Component } from 'react'
import './Content.scss'
import Pannel from '../Pannel/Pannel';
import { connect } from 'react-redux' 
import Container from '../Container/Container'
import * as actions from '../../../../store/actions/index'
import { BuilderContext } from '../../../../containers/Builder/BuilderContext/BuilderContext'

class Content extends Component {


    componentDidMount = () => {
        if(Object.keys(this.props.website).length){
            this.props.onFetchWebsiteStructure()
        }
   }

    state = {
        editable: true,
    }

    
    render() {
        return (
            <div className="content">
               <div className="content-draggable">
                    <div className="draggable-header"></div>
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
                                editable: this.state.editable
                            }}>
                            <Container rows={this.props.rows}  />
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
        website: state.websites.website
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
        onFetchWebsiteStructure: () => dispatch(actions.fetchWebsiteStructure())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);