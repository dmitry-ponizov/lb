import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import ReactDOMServer from 'react-dom/server';
import './Builder.scss'
import Layout from '../../components/UI/Grid/Layouts/Layout'
import Container from '../../components/UI/Grid/Container/Container'
import BuilderHeader from '../../components/Headers/Builder/BuilderHeader'
import SideBar from '../../components/SideBar/Builder/SideBar'
import Content from '../../components/UI/Grid/Content/Content'


class Builder extends Component {

    state = {
        editable: true,
        active: true
    }

    htmlHandler = () => {
      
        let html =  ReactDOMServer.renderToStaticMarkup(    
            <Layout tag={this.props.selectedLayout}>
                <Container 
                    stylesHandler={(style, value) => this.props.onChangeStyleItem(style, value)}
                    selectedHandler={(item) => this.props.onSelectItem(item)}
                    itemHandler={(item, settings) => this.props.onChangeContentItem(item, settings)}
                    rows={this.props.rows} 
                    onDropHandler={(dropItem)=> this.props.onDrop(dropItem)} 
                    />
            </Layout>)
        this.props.onSaveHtml(html)
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
        return (
            <div className="builder">
                <BuilderHeader 
                    toggleHandler={(active) => this.toggleHandler(active) } 
                    previewHanlder={this.htmlHandler}
                    preview={false}
                    />
                <div className="builder-wrapper">
                    <SideBar active={ this.state.active }/>
                    <Content  />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rows: state.builder.rows,
        html: state.builder.html,
        selectedLayout: state.builder.selectedLayout
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveHtml: (html) => dispatch(actions.saveHtml(html)),
        onDrop: (newItem) => dispatch(actions.dropItem(newItem)),
        onChangeStyleItem: (param, content) => dispatch(actions.changeStyleItem(param, content)),
        onSelectItem: (item) => dispatch(actions.selectItem(item)),
        onChangeContentItem: (item, settings) => dispatch(actions.changeContentItem(item, settings)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Builder);