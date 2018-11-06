import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';
import BuilderHeader from '../../components/Headers/Builder/BuilderHeader'

class Preview extends Component {
    state = {
        active: false
    }

    toggleHandler = (active) => {
        this.setState({active})
    }

    render(){
        return (
            <div>
                <BuilderHeader 
                    toggleHandler={(active) => this.toggleHandler(active) } 
                    previewHanlder={this.htmlHandler}
                    preview={true}
                    />
                { ReactHtmlParser(this.props.html) }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        html: state.builder.html
    }
}

export default connect(mapStateToProps)(Preview);