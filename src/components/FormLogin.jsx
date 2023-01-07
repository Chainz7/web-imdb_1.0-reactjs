import React, { useState } from 'react'
import styled from 'styled-components'

const LoginBody = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #FFFFFF;
    color: black;
`
const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: .8rem;
  gap: .8rem;
  width: 100%;
  height: 100%;
`
const LoginImage = styled.img.attrs({
    className: 'my-class',
  })`
  width: 107px;
  height: 52px;
  cursor: pointer;
 `
const LoginContainer = styled.div`
  display: grid;
  justify-items: start;
  align-items: center;
  gap: .8rem;
  padding: 1.5rem;
  width: 19rem;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: .3rem;
`

const FormTitle = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 1.75rem;
`
const LoginForm = styled.form.attrs({
    className: 'my-class',
  })`
  width: 100%;
  height: 100%;
 `
const FormInput = styled.input`
  width: 93%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`
const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  background: linear-gradient(0deg, rgba(212,171,71,1) 0%, rgba(254,227,164,1) 100%);
  color: black;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(0,0,0,0.4);
    background: linear-gradient(0deg, rgba(247,191,51,1) 0%, rgba(212,171,71,1) 100%);
  }
`
const LoginLabel = styled.label.attrs({
    className: 'my-class',
})`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 13px;
`
const LoginForget = styled.span`
    font-weight: 400;
    font-size: 13px;
    cursor: pointer;
    color: #0066c0;
    &:hover {
        color: #c45500; 
    }
`
function FormLogin() {
  return (
    <LoginBody>
        <LoginBackground>
            <LoginImage src="https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" alt="IMD"/>
            <LoginContainer>
                <FormTitle>Sign in</FormTitle>
                <LoginForm>
                    <LoginLabel>
                        <span>Email</span> 
                    </LoginLabel>
                    <FormInput type="email"/>
                    <br />
                    <LoginLabel>
                        <span>Password</span> 
                        <LoginForget> Forgot your password?</LoginForget> 
                    </LoginLabel>
                    <FormInput type="password"/>
                    <br />
                    <br />
                    <FormButton type="submit">Sign In</FormButton>
                </LoginForm>
            </LoginContainer>
        </LoginBackground>
    </LoginBody>
  )
}

export default FormLogin