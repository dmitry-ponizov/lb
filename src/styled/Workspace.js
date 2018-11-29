import styled from 'styled-components'


export const WorkspaceWrapper = styled.div`
    background-color: #f2f3f5;
    padding: 40px 80px 50px 80px;
    min-height: 850px;
    width: 100%;
`


export const Workspace = styled.div`
    margin-top: 30px;
    border-radius: 6px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.06);
    background-color: #ffffff;
    min-height: 700px;
`

export const WorkspaceTitle = styled.div`
    display:flex;
    font-family: Muli;
    font-size: 28px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    margin-bottom: 20px;
    letter-spacing: 0.6px;
    color: #000000;
`
export const WorkspaceLink = styled.div`
    display:flex;
    align-items:center;
    font-family: Muli;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.3px;
    text-align: right;
    color: #e36854;
    margin-top:20px;
    cursor: pointer;
    a {
    text-decoration: none;
    }
    i {
        margin-left: 5px;
        font-weight: bold;
    }
`

