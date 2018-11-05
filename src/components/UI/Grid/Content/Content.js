import React, { Component } from 'react'
import './Content.scss'
import Pannel from '../Pannel/Pannel';
import { connect } from 'react-redux' 
import Container from '../Container/Container'
import * as actions from '../../../../store/actions/index'

class Content extends Component {

    state = {
        editable: true,
    }

    render() {
        return (
            <div className="content">
               <div className="content-draggable">
                    <div className="draggable-header"></div>
                    <div className="draggable-body">
                        <div className="container-drag">
                            <Container
                                stylesHandler={(style, value) => this.props.onChangeStyleItem(style, value)}
                                selectedHandler={(item) => this.props.onSelectItem(item)}
                                itemHandler={(item, settings) => this.props.onChangeContentItem(item, settings)}
                                editable={this.state.editable}
                                rows={this.props.rows} 
                                onDropHandler={(dropItem)=> this.props.onDrop(dropItem)} 
                             />
                        </div>
                    </div>
                    <Pannel buttons={Object.keys(this.props.layouts)} />
               </div>   
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        rows: state.builder.rows,
        tools: state.builder.tools,
        layouts: state.builder.layouts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeStyleItem: (param, content) => dispatch(actions.changeStyleItem(param, content)),
        onDrop: (newItem) => dispatch(actions.dropItem(newItem)),
        onSelectItem: (item) => dispatch(actions.selectItem(item)),
        onChangeContentItem: (item, settings) => dispatch(actions.changeContentItem(item, settings)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);