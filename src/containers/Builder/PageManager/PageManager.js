import React, { Component } from 'react'
import SideBar from '../../../components/SideBar/Builder/SideBar'
import Content from '../../../components/UI/Grid/Content/Content'
import BuilderLayout from '../../../hoc/Layouts/BuilderLayout/BuilderLayout'
import ReactDOMServer from 'react-dom/server';
import LayoutHTML from '../../../hoc/LayoutHTML/LayoutHTML'
import Layout from '../../../components/UI/Grid/Layouts/Layout'
import { BuilderContext } from '../../../containers/Builder/BuilderContext/BuilderContext'
import Container from '../../../components/UI/Grid/Container/Container'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions'
import Header from '../../../components/UI/Grid/Header/Header'

class PageManager extends Component {

    state = {
        editable: true,
        active: true
    }

    htmlHandler = () => {
       
        return ReactDOMServer.renderToStaticMarkup(    
            <LayoutHTML>
                <Layout tag={this.props.selectedTemplate.name}>
                    <Header   
                        pages={this.props.pages} 
                        currentPage={this.props.currentPage}
                        editHandler={this.editPageHandler}
                        changePage={ (pageName) => this.props.onChangePage(pageName)} 
                    />
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
    render() {
        return (
            <BuilderLayout>
                <SideBar active={ this.state.active } onSaveHandler = {this.onSaveHandler} component="pageManager" />
                <Content editable={this.state.editable}/>
            </BuilderLayout>  
        )
    }
}


const mapStateToProps = state => {
    return {
        rows: state.builder.rows,
        selectedTemplate: state.templates.selectedTemplate,
        pages: state.builder.pages,
        currentPage: state.builder.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveHtml: (html) => dispatch(actions.saveHtml(html)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageManager);