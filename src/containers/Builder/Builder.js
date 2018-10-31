import React, { Component } from 'react'
import ToolPanel from '../../components/UI/Grid/ToolPanels/ToolPanel'
import ReactHtmlParser from 'react-html-parser';
import NavigationItem from '../../components/UI/NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Pannel from '../../components/UI/Grid/Pannel/Pannel'
import ReactDOMServer from 'react-dom/server';
import './Builder.scss'
import Layout from '../../components/UI/Grid/Layouts/Layout'
import Container from '../../components/UI/Grid/Container/Container'
import BuilderHeader from '../../components/Headers/Builder/BuilderHeader'
import SideBar from '../../components/SideBar/Builder/SideBar'
import Content from '../../components/UI/Grid/Content/Content'

class Builder extends Component {
    state = {
        html: null,
        editable: true,
        selectedLayout: 'redLayout',
        active: true
    }

    onDragOver = (e) => {
        e.preventDefault();
    }
    
    onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id)
    }
     onDragEnd = (e) => {
        e.preventDefault();
      }
    
    htmlHandler = () => {
        let html =  ReactDOMServer.renderToStaticMarkup(    
            <Layout tag={this.state.selectedLayout}>
                <Container 
                    rows={this.props.rows} 
                    selectedHandler={(item) => this.props.onSelectItem(item)}
                    itemHandler={(item, settings) => this.props.onChangeContentItem(item, settings)}
                    onDropHandler={(dropItem)=> this.props.onDrop(dropItem)} 
                    />
            </Layout>)
        this.setState({ html })
    }

    previewHandler = () => {
        this.setState(prevState => ({ 
            editable: !prevState.editable
        }))
    }

    layoutHandler = (e) => {
        this.setState({
            ...this.state,
            selectedLayout:e.target.value
        })
    }

    toggleHandler = (active) => {
        this.setState({active})
    }
    render() {
        let tools = this.props.tools.map(tool => (
            <div key={tool.id}
                onDragStart={(e) => this.onDragStart(e, tool.id)}
                className="draggable"
                style={{ backgroundColor: tool.bgcolor }}
                draggable
                 >
                {tool.name}
          </div>
        ))
        return (
            <div className="builder">
                <BuilderHeader toggleHandler={(active) => this.toggleHandler(active) } />
                <div className="builder-wrapper">
                    <SideBar active={ this.state.active }/>
                    <Content />
                </div>
                {this.state.editable ? 
                    <div>
                        <div className="container-drag">
                            <div className="wip"
                                onDragEnd={(e)=> this.onDragEnd(e)}
                                onDragOver={(e) => this.onDragOver(e)} >
                                <span className="task-header">Components</span>
                                { tools }
                                {this.props.selectedItem ? 
                                <ToolPanel  
                                    tag={this.props.selectedItem.type} 
                                    stylesHandler={(style, value) => this.props.onChangeStyleItem(style, value)}
                                    /> : null}
                            </div>
                            <div className="container">
                                <Container 
                                    editable={this.state.editable}
                                    rows={this.props.rows} 
                                    selectedHandler={(item) => this.props.onSelectItem(item)}
                                    itemHandler={(item, settings) => this.props.onChangeContentItem(item, settings)}
                                    onDropHandler={(dropItem)=> this.props.onDrop(dropItem)} 
                                    />
                            </div>
                           
                        </div>
                        <div className="container">
                            <Pannel buttons={Object.keys(this.props.layouts)} />
                            <button onClick={() => this.props.addRowHandler(this.props.gridType)} >Add Row </button>
                            <button onClick={this.htmlHandler}>Html</button>
                            <button onClick={this.props.onTemplateInJson}>Json</button>
                            <textarea cols="50" rows="10" value={this.state.html || ''} onChange={() => this.onChangeHandler(()=>{})} >{ this.state.html }</textarea>
                            <textarea cols="50" rows="10" value={this.props.json || ''} onChange={() => this.onChangeHandler(()=>{})} ></textarea>
                            <textarea cols="50" rows="10"  onChange={this.props.onJsonInTemplate} >{ this.props.json }</textarea>
                        </div>
                    </div> :     
                    <div>
                        { ReactHtmlParser(this.state.html) }
                    </div>}
                    <div className="container">
                        <div className="col-md-4">
                            <button onClick={this.previewHandler}>Preview</button>
                            <select className="form-control" value={this.state.selectedLayout || '' }onChange={this.layoutHandler}>
                                    <option value="" disabled   >Please select</option>
                                    <option value="redLayout">First layout</option>
                                    <option value="greenLayout">Second layout</option>
                            </select>
                        </div>
                        <NavigationItem link="/logout" >Logout</NavigationItem>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gridType: state.builder.gridType,
        rows: state.builder.rows,
        tools: state.builder.tools,
        selectedItem: state.builder.selectedItem,
        json: state.builder.json,
        layouts: state.builder.layouts
    }
}

const mapDispatchToProps = dispatch => {
    return {

        onDrop: (newItem) => dispatch(actions.dropItem(newItem)),
        onChangeStyleItem: (param, content) => dispatch(actions.changeStyleItem(param, content)),
        onSelectItem: (item) => dispatch(actions.selectItem(item)),
        onChangeContentItem: (item, settings) => dispatch(actions.changeContentItem(item, settings)),
        onTemplateInJson: () => dispatch(actions.templateInJson()),
        onJsonInTemplate: (e) => dispatch(actions.jsonInTemplate(e.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Builder);