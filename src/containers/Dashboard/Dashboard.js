import React, { Component } from 'react'
import NavigationItem from '../../components/UI/NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Row from '../Builder/Row/Row'
import Pannel from '../../components/UI/Grid/Pannel/Pannel'
import ReactDOMServer from 'react-dom/server';
import './Dashboard.scss'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class Dashboard extends Component {

    state = {
        layouts:{
            'threeColumns':{
                'one':[],
                'two':[],
                'three':[],
            },
            'twoColumns':{
                'one':[],
                'two':[],
            },
        },
        columns: null,
        html: null,
        elements: [
            { id:1, name: 'Text',  bgcolor: 'yellow' },
            { id:2, name: 'Image', bgcolor: 'pink' },
            { id:3, name: 'Link',  bgcolor: 'skyblue' }
          ],
      
        rows: [
            {
            'threeColumns': 
                {
                'one':[],
                'two':[],
                'three':[],
                }
             }
        ],
        components: [],
        show: false
    }

    componentDidMount() {
        this.props.toUserProfile(this.props.token)
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
                    {Object.values(row).map((cells,index) => <Row key={index} 
                    onDropHandler={(id)=>this.onDrop(id)} 
                    rowNumber={rowNumber}
                    components={this.state.components}  
                    columns={Object.keys(row)[0]} 
                    row={cells}
                    elements={this.state.elements} />)}
                </div>
                )
            }
        </div>
            </body>
            </html>
       
          
          )
     
        this.setState({
            html:html
        })

    
    }

    addRowHandler = () => {

        let newRows = [...this.state.rows]
        
        const layouts = Object.assign({},this.state.layouts)
        
    
        const currentColumn = this.state.columns


        const columns = Object.assign({},layouts[currentColumn])

        for(let column in columns){
            columns[column] = []
        }

        console.log(columns)
     
        newRows.push(Object.assign({},{[currentColumn]:columns}))

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

        let element = {...elements.find(element => element.id == newColumn.id)}

   
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
             <div className="container">
                 {!this.state.show ? <div>
                <h1>Dashboard component</h1>
                <h3>Hello { this.props.userProfile ? this.props.userProfile.first_name + ' ' +   this.props.userProfile.last_name : null }</h3>
                      <div className="container-drag">
                        <div className="wip"
                        onDragOver={(e) => this.onDragOver(e)} >
                        <span className="task-header">Components</span>
                        {elements}
                        </div>
                        <div >
                        <div className="container">
                            {this.state.rows.map((row,rowNumber) => 
                                <div key={rowNumber}>
                                    {Object.values(row).map((cells,index) => <Row key={index} 
                                    onDropHandler={(id)=>this.onDrop(id)} 
                                    rowNumber={rowNumber}
                                    components={this.state.components}  
                                    columns={Object.keys(row)[0]} 
                                    row={cells}
                                    elements={this.state.elements} />)}
                                </div>
                                )
                            }
                        </div>
                        </div>
                  
                    </div>
                
                <Pannel gridHandler={(columns) => this.gridHandler(columns)} />
                <NavigationItem link="/logout" >Logout</NavigationItem>
                <button onClick={this.addRowHandler} >Add Row </button>
                <button onClick={this.htmlHandler}>Html</button>
                <button onClick={this.jsonHandler}>Json</button>
           
                <textarea cols="50" rows="10" value={this.state.html || ''} onChange={this.onChangeHandler} >{ this.state.html }</textarea>
                <textarea cols="50" rows="10" value={this.state.json || ''} onChange={this.onChangeHandler}  >{ this.state.json }</textarea>
                <textarea cols="50" rows="10"  onChange={this.onChangeHandlerJson} >{ this.state.json }</textarea>
                        </div> :     <div>{ ReactHtmlParser(this.state.html) }</div>}
                        <button onClick={this.previewHandler}>Preview</button>
            </div>
        
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toUserProfile: (token) => dispatch(actions.userProfile(token))
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userProfile: state.dashboard.userProfile
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);