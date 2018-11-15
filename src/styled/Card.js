import styled from 'styled-components'

export const Card = styled.div`
    background-color: #fff;
    min-height: 500px;
    min-width: 330px;
    border-radius: 2%;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-right: 15px;
    position: relative;
    &:after {
        background: rgba(0, 0, 0, 0.2) none repeat scroll 0 0;
        content: "";
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        border-radius: 2%;
        transition-duration: 0.3s;
        width: 100%;
      }
      &:hover {
        &:after {
          opacity: 1;
        }
  
      }  
`

