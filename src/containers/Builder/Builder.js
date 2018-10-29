import React, { Component } from 'react'
import ItemPanel from '../../components/UI/Grid/ItemPanel/ItemPanel'
import ReactHtmlParser from 'react-html-parser';
import NavigationItem from '../../components/UI/NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Pannel from '../../components/UI/Grid/Pannel/Pannel'
import ReactDOMServer from 'react-dom/server';
import './Builder.scss'
import LayoutHTML from '../../hoc/LayoutHTML/LayoutHTML'
import Container from '../../components/UI/Grid/Container/Container'

class Builder extends Component {
    state = {
        html: null,
        show: false,
    }

    onDragOver = (e) => {
        e.preventDefault();
    }
    
    onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id)
    }
    
    htmlHandler = () => {
        let html =  ReactDOMServer.renderToStaticMarkup(    
            <LayoutHTML>
                <Container 
                    rows={this.props.rows} 
                    selectedHandler={(item) => this.props.onSelectItem(item)}
                    itemHandler={(item, settings) => this.props.onChangeContentItem(item, settings)}
                    onDropHandler={(dropItem)=> this.props.onDrop(dropItem)} 
                    />
            </LayoutHTML>)
        this.setState({ html })
    }

    previewHandler = () => {
        this.setState(prevState => ({ 
            show: !prevState.show
        }))
    }

    render() {
        let elements = this.props.elements.map(element => (
            <div key={element.id}
                onDragStart={(e) => this.onDragStart(e, element.id)}
                className="draggable"
                style={{ backgroundColor: element.bgcolor }}
                draggable
                 >
                {element.name}
          </div>
        ))
        return (
            <div>
                {!this.state.show ? 
                    <div>
                        <div className="container-drag">
                            <div className="wip"
                                onDragOver={(e) => this.onDragOver(e)} >
                                <span className="task-header">Components</span>
                                { elements }
                                {this.props.selectedItem ? 
                                <ItemPanel  
                                    tag={this.props.selectedItem.type} 
                                    stylesHandler={(param, content) => this.props.onChangeStyleItem(param, content)}
                                    /> : null}
                            </div>
                            <Container 
                                rows={this.props.rows} 
                                selectedHandler={(item) => this.props.onSelectItem(item)}
                                itemHandler={(item, settings) => this.props.onChangeContentItem(item, settings)}
                                onDropHandler={(dropItem)=> this.props.onDrop(dropItem)} 
                                />
                            </div>
                            <Pannel gridHandler={(gridType) => this.props.onSelectedGrid(gridType)} columns={this.props.gridType} />
                            <NavigationItem link="/logout" >Logout</NavigationItem>
                            <button onClick={() => this.props.addRowHandler(this.props.gridType)} >Add Row </button>
                            <button onClick={this.htmlHandler}>Html</button>
                            <button onClick={this.props.onTemplateInJson}>Json</button>
                            <textarea cols="50" rows="10" value={this.state.html || ''} onChange={() => this.onChangeHandler(()=>{})} >{ this.state.html }</textarea>
                            <textarea cols="50" rows="10" value={this.props.json || ''} onChange={() => this.onChangeHandler(()=>{})} ></textarea>
                            <textarea cols="50" rows="10"  onChange={this.props.onJsonInTemplate} >{ this.props.json }</textarea>
                    </div> :     
                    <div>
                        { ReactHtmlParser(this.state.html) }
                    </div>}
                    <button onClick={this.previewHandler}>Preview</button>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gridType: state.builder.gridType,
        rows: state.builder.rows,
        elements: state.builder.elements,
        selectedItem: state.builder.selectedItem,
        json: state.builder.json
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectedGrid: (gridType) => dispatch(actions.selectGridType(gridType)),
        addRowHandler: (gridType) => dispatch(actions.addRow(gridType)),
        onDrop: (newItem) => dispatch(actions.dropItem(newItem)),
        onChangeStyleItem: (params, content) => dispatch(actions.changeStyleItem(params, content)),
        onSelectItem: (item) => dispatch(actions.selectItem(item)),
        onChangeContentItem: (item, settings) => dispatch(actions.changeContentItem(item, settings)),
        onTemplateInJson: () => dispatch(actions.templateInJson()),
        onJsonInTemplate: (e) => dispatch(actions.jsonInTemplate(e.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Builder);