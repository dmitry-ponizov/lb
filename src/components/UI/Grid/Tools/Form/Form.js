import React from 'react'
import styled from 'styled-components'

const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    margin-top: 10px;
    input {
        display: flex;
        max-width: 340px;
        height: 50px;
        border: 1px solid #d7d7d7;
        &:focus {
            outline: none;
        }
    }
    label{
        display: flex;
        font-family: Muli;
        font-size: 14px;
        letter-spacing: 0.2px;
        color: #9c9c9c;
    }
    textarea {
        max-width: 340px;
        height: 210px;
        resize: none;
        border: 1px solid #d7d7d7;
        &:focus {
            outline: none;
        }
    }
`

const ButtonStyled = styled.div`
    width: 120px;
    height: 45px;
    margin-top: 10px;
    padding: 12px;
    margin-left: 80px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    border-radius: 2px;
    box-shadow: 0 5px 10px 0 rgba(77,141,237,0.2);
    background-color: #4d8ded;
`

const Form = () => {
  return (
    <form className="builder-form">
      <Field className="builder-form-field">
        <label htmlFor="name" >Your name</label>
        <input type="text" id="name" />
      </Field>
      <Field className="builder-form-field">
        <label htmlFor="email" >Your email</label>
        <input type="text" id="email" />
      </Field>
      <Field className="builder-form-field">
        <label htmlFor="msg" >Your message</label>
        <textarea  id="msg"></textarea>
      </Field>
      <ButtonStyled className="builder-form-btn">
          Send
      </ButtonStyled>
    </form>
  )
}
export default Form;