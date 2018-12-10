import React from 'react'
import styled from 'styled-components'
import TrashImg from '../../../../../../../assets/images/builder/trash.svg'
import ReactSVG from 'react-svg'

const Wrapper = styled.div`
  width: 247px;
  height: 85px;
  background-color: #f2f3f5;
  border-radius: 4px;
  margin-top:15px;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #c9c9c9;
    background: #f2f3f5;
    &:focus {
        outline: none;
    }
    margin: 15px;
    font-family: Muli;
    font-size: 14px;
    letter-spacing: 0.3px;
    color: #000000;
`
const Field = styled.div`
    display: flex;
    justify-content: space-between;

`
const Icon = styled.div`
    margin-right: 15px;
    margin-top: 15px;
    cursor: pointer;
`
const PageSettings = (props) => {
    return (
        <Wrapper>
            <Field>
                <Input type="text" value={Object.keys(props.page)} disabled={Object.keys(props.page)[0] === 'Home'} onChange={(e) => props.pageNameHandler(props.index, e.target.value)} />
                <Icon onClick={() => props.deletePage(props.page)}>
                    {Object.keys(props.page)[0] !== 'Home' && <ReactSVG src={TrashImg} />}
                </Icon>
            </Field>
        </Wrapper>
    )
}
export default PageSettings;