import React, { Component } from 'react'
import BuilderHeader from '../../../components/Headers/Builder/BuilderHeader'
import ReactDOMServer from 'react-dom/server';
import LayoutHTML from '../../LayoutHTML/LayoutHTML'
import Layout from '../../../components/UI/Grid/Layouts/Layout'
import { BuilderContext } from '../../../containers/Builder/BuilderContext/BuilderContext'
import Container from '../../../components/UI/Grid/Container/Container'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions'
import Header from '../../../components/UI/Grid/Header/Header'

class BuilderLayout extends Component {
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
                        changePage={(pageName) => this.props.onChangePage(pageName)}
                    />
                    <BuilderContext.Provider value={{
                        deleteItemHandler: this.props.onDeleteItemHandler,
                        rowDeleteHandler: this.props.onDropRow,
                        stylesHandler: this.props.onChangeStyleItem,
                        selectedHandler: this.props.onSelectItem,
                        changeContentItem: this.props.onChangeContentItem,
                        onDropHandler: this.props.onDrop,
                        reorderHandler: this.props.onReorderColumnItems,
                        editable: this.state.editable
                    }}>
                        <Container rows={this.props.rows} />
                    </BuilderContext.Provider>
                </Layout>
            </LayoutHTML>
        )
    }
    editPageHandler = () => {
        this.props.history.push('/page_manager')
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
            selectedLayout: e.target.value
        })
    }

    toggleHandler = (active) => {
        this.setState({ active })
    }


    render() {
        return (
            <div className="builder">
                <BuilderHeader
                    toggleHandler={(active) => this.toggleHandler(active)}
                    previewHandler={this.previewHandler}
                    onSaveHandler={this.onSaveHandler}
                    preview={false}
                />
                <div style={{ height: 880, overflow: 'auto' }}>
                    <div className="builder-wrapper" style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {this.props.children}
                    </div>
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
        website: state.websites.website,
        pages: state.builder.pages,
        currentPage: state.builder.currentPage
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
        onChangePage: (pageName) => dispatch(actions.changePage(pageName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuilderLayout);