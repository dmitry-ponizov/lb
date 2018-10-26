import React, { Component } from 'react'
import ItemPanel from '../../components/UI/Grid/ItemPanel/ItemPanel'
import ReactHtmlParser from 'react-html-parser';
import NavigationItem from '../../components/UI/NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Row from '../Builder/Row/Row'
import Pannel from '../../components/UI/Grid/Pannel/Pannel'
import ReactDOMServer from 'react-dom/server';
import './Builder.scss'

class Builder extends Component {
    state = {
        layouts:{
            'oneColumn':1,
            'twoColumns':2,
            'threeColumns':3,
            'fourColumns':4,
        },
        columns: null,
        html: null,
        elements: [
            {  
                id:1, 
                name: 'Text',
                styles:{
                    overflow: 'hidden',    
                    width: '100%',
                    color: 'black'
                },
                content: 'This is a new Text block. Change the text.'
             },
            { id:2, name: 'Image', bgcolor: 'pink' },
            { id:3, name: 'Link',  bgcolor: 'skyblue' }
          ],
      
        rows: [],
        show: false,
        selectedItem: null
    }



    onDragOver = (e) => {
        e.preventDefault();
    }
    
    onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id)
    }
    
    gridHandler = (columns) => {
        this.setState({
            columns:columns
        })
    }

    htmlHandler = () => {

        let html =  ReactDOMServer.renderToStaticMarkup(    
            <html>
            <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"/>
               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
            crossOrigin="anonymous"/>
            </head>
            <body>
                <div className="container">
                    {this.state.rows.map((row,rowNumber) => 
                        <div key={rowNumber}>
                            {Object.values(row).map((cells,index) => 
                                <Row key={index} 
                                    selectedHandler={(settings) => this.selectedHandler(settings)}
                                    itemHandler={(item, settings) => this.itemHandler(item, settings)}
                                    onDropHandler={(id)=>this.onDrop(id)} 
                                    rowNumber={rowNumber}
                                    columns={Object.keys(row)[0]} 
                                    row={cells}
                                />)}
                        </div>)}
                </div>
            </body>
            </html>)
        this.setState({ html })
    }

    addRowHandler = () => {
        
        let layouts = Object.assign({},this.state.layouts)
            
        const currentColumn = this.state.columns

        let newRows = [...this.state.rows]

        let obj  = {};

        obj[currentColumn] = [];

        let i = 0;
        for(i; i < layouts[currentColumn]; i++){
            obj[currentColumn].push([])
        }

        newRows.push(Object.assign({},obj))

        this.setState({
            ...this.state,
            rows:newRows
        })
       
    }

    jsonHandler = () => {

        let rows = [...this.state.rows]
        let json = JSON.stringify(rows)
        this.setState({
            ...this.state,
            json
        })
    }

    onDrop = (newColumn) => {

        let elements = this.state.elements

        let element = {...elements.find(element => +element.id === +newColumn.id)}
   
        element.id = `id${new Date().getTime()}`;

        let rows = [...this.state.rows]
            
        rows[newColumn.rowNumber][newColumn.gridType][newColumn.columnName].push(element)

        this.setState({
          ...this.state,
          rows: rows
        })
        
    
    }
    onChangeHandler = () => {

    }

    onChangeHandlerJson = (e) => {
        let rows = JSON.parse(e.target.value)

        this.setState({
            ...this.state,
            rows: rows
        })
    }

    previewHandler = () => {
        this.setState(prevState => ({ 
            show: !prevState.show
        }))
    }

    itemHandler = (item, settings) => {
        let rows = [...this.state.rows]
 
        rows[settings.rowNumber][settings.gridType][settings.columnName][settings.itemId] = item

        this.setState({
          ...this.state,
          rows: rows
        })

    }

    selectedHandler = (settings) => {
        this.setState({
            selectedItem:settings
        })
    }

    stylesHandler = (param, content) => {
        const selectedItem = Object.assign({}, this.state.selectedItem)
        let rows = [...this.state.rows]
        let styles = Object.assign({},rows[selectedItem.rowNumber][selectedItem.gridType][selectedItem.columnName][selectedItem.itemId]['styles']);
        styles[param] = content
        rows[selectedItem.rowNumber][selectedItem.gridType][selectedItem.columnName][selectedItem.itemId]['styles'] = styles

        this.setState({
          ...this.state,
          rows: rows
        })

    }
    render() {
        let elements = []

        this.state.elements.forEach(element => {
          elements.push(
            <div key={element.id}
              onDragStart={(e) => this.onDragStart(e, element.id)}
              className="draggable"
              style={{ backgroundColor: element.bgcolor }}
              draggable
            >
              {element.name}
            </div>
          )
        })
        return (
            <div>
                {!this.state.show ? 
                    <div>
                        <div className="container-drag">
                            <div className="wip"
                                onDragOver={(e) => this.onDragOver(e)} >
                                <span className="task-header">Components</span>
                                {elements}
                                {this.state.selectedItem ? 
                                <ItemPanel  
                                    tag={this.state.selectedItem.type} 
                                    stylesHandler={(param, content) => this.stylesHandler(param, content)}
                                    /> : null}
                            </div>
                            <div>
                                <div className="container">
                                    {this.state.rows.map((row,rowNumber) => 
                                        <div key={rowNumber}>
                                            {Object.values(row).map((cells,index) => 
                                            <Row key={index} 
                                                selectedHandler={(settings) => this.selectedHandler(settings)}
                                                itemHandler={(item, settings) => this.itemHandler(item, settings)}
                                                onDropHandler={(id)=>this.onDrop(id)} 
                                                rowNumber={rowNumber}
                                                columns={Object.keys(row)[0]} 
                                                row={cells}
                                             />)}
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                            <Pannel gridHandler={(columns) => this.gridHandler(columns)} columns={this.state.columns} />
                            <NavigationItem link="/logout" >Logout</NavigationItem>
                            <button onClick={this.addRowHandler} >Add Row </button>
                            <button onClick={this.htmlHandler}>Html</button>
                            <button onClick={this.jsonHandler}>Json</button>
                    
                            <textarea cols="50" rows="10" value={this.state.html || ''} onChange={this.onChangeHandler} >{ this.state.html }</textarea>
                            <textarea cols="50" rows="10" value={this.state.json || ''} onChange={this.onChangeHandler}  >{ this.state.json }</textarea>
                            <textarea cols="50" rows="10"  onChange={this.onChangeHandlerJson} >{ this.state.json }</textarea>
                    </div> :     
                    <div>
                        { ReactHtmlParser(this.state.html) }
                    </div>}
                    <button onClick={this.previewHandler}>Preview</button>
                </div>
        )
    }
}


export default Builder;