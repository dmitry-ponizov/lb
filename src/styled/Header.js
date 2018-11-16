import styled from 'styled-components'


export const Button = styled.div`
    width: 80px;
    border-left: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    
`

export const ButtonContent = styled.div`
    text-decoration: none!important;
    font-family: Muli;
    font-size: 8px;
    margin: 0;
    text-decoration: none;
    color: #000;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &:hover {
        svg {
            g,path,rect {
                stroke: #e36854;;
            }
            
        }
        p{
            color: ${props => props.theme.mainColor}
        }

    }
    p {
        margin-bottom: 0;
        font-family: Muli;
        font-size: 8px;
        font-weight:normal;
        letter-spacing: 0.2px;
        text-align: center;
        color: #000000;
    }
`