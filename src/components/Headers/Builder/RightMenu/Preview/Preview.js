import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import previewImg from '../../../../../assets/images/preview.svg' 
import { withRouter } from 'react-router-dom';
import { Button, ButtonContent } from '../../../../../styled/Header'


class Preview extends Component {

    previewHandler = () => {
        this.props.previewHandler()
        this.props.history.push('/preview')
    }
    render() {
        return (
            <Button>
                <ButtonContent onClick={() => this.previewHandler()}>
                    <ReactSVG src={previewImg}  />
                    <p>Preview</p>
                </ButtonContent>
            </Button>
        )
    }
} 

export default withRouter(Preview);