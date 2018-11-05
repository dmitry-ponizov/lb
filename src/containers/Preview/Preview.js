import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';

class Preview extends Component {
    render(){
        return (
            <div>{ ReactHtmlParser(this.props.html) }</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        html: state.builder.html
    }
}

export default connect(mapStateToProps)(Preview);