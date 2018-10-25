import React, { Component } from 'react'
import NavigationItem from '../../components/UI/NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Row from '../Builder/Row/Row'
import Pannel from '../../components/UI/Grid/Pannel/Pannel'
import ReactDOMServer from 'react-dom/server';
import './Dashboard.scss'



class Dashboard extends Component {

    state = {
        columns: null,
        html: null,
        elements: [
            { id:1, name: 'Text',  bgcolor: 'yellow' },
            { id:2, name: 'Image', bgcolor: 'pink' },
            { id:3, name: 'Link',  bgcolor: 'skyblue' }
          ],
        rows: ['threeColumns'],
        components: []
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
                <div className="container">
                    {this.state.rows.map((row,index) => <Row key={index}  onDropHandler={(id)=>this.onDrop(id)} components={this.state.components} columns={row} elements={this.state.elements} />)}
                </div>)
     
        this.setState({
            html:html
        })

    
    }

    addRowHandler = () => {
        let rows = [...this.state.rows]
        rows.push(this.state.columns)

        this.setState({
            ...this.state,
            rows
        })
       
    }

    componentHandler = () => {
        let components = [...this.state.components]
        components.push('Text')
        this.setState({
          ...this.state,
          components: components
        })
      }

      onDrop = (id) => {

        let elements = this.state.elements

        let element = {...elements.find(element => element.id == id)}
 
        let newElements = [...this.state.components]
        element.id = `id${new Date().getTime()}`;
    
        newElements.push(element)

        this.setState({
          ...this.state,
          components: newElements
        })
        
    
    }
    onChangeHandler = () => {

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
                             {this.state.rows.map((row,index) => <Row key={index} onDropHandler={(id)=>this.onDrop(id)} components={this.state.components}  columns={row} elements={this.state.elements} />)}
                        </div>
                        </div>
                    </div>
               
                <Pannel gridHandler={(columns) => this.gridHandler(columns)} />
                <NavigationItem link="/logout" >Logout</NavigationItem>
                <button onClick={this.addRowHandler} >Add Row </button>
                <button onClick={this.htmlHandler}>To html</button>
                <button onClick={this.componentHandler}>Add component</button>
                <textarea cols="50" rows="10" value={this.state.html || ''} onChange={this.onChangeHandler} >{ this.state.html }</textarea>
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