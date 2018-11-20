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
import LayoutHTML from '../../hoc/LayoutHTML/LayoutHTML'
import { BuilderContext } from '../../containers/Builder/BuilderContext/BuilderContext'


class Builder extends Component {

    state = {
        editable: true,
        active: true
    }

    htmlHandler = () => {
        return ReactDOMServer.renderToStaticMarkup(    
            <LayoutHTML>
                <Layout tag={this.props.selectedTemplate.name}>
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
                </Layout>
            </LayoutHTML>
            )
    }

    onSaveHandler = () => {
        let html = this.htmlHandler()
        this.props.onSaveHtml(html)
    }

    previewHandler = () => {
        let html = this.htmlHandler()
        this.props.onSaveHtml(html)
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
            <div className="builder"  >
                <BuilderHeader 
                    toggleHandler={(active) => this.toggleHandler(active) } 
                    previewHandler={this.previewHandler}
                    onSaveHandler={this.onSaveHandler}
                    preview={false}
                    />
                <div className="builder-wrapper" >
                    <SideBar active={ this.state.active }/>
                    <Content  editable={this.state.editable}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rows: state.builder.rows,
        html: state.builder.html,
        selectedTemplate: state.templates.selectedTemplate,
        website: state.websites.website
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDropRow: (rowNumber) => dispatch(actions.deleteRow(rowNumber)),
        onSaveHtml: (html) => dispatch(actions.saveHtml(html)),
        onDrop: (newItem) => dispatch(actions.dropItem(newItem)),
        onChangeStyleItem: (param, content) => dispatch(actions.changeStyleItem(param, content)),
        onSelectItem: (item) => dispatch(actions.selectItem(item)),
        onChangeContentItem: (item, settings) => dispatch(actions.changeContentItem(item, settings)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Builder);