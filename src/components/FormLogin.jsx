import React, { useState } from 'react'
import styled from 'styled-components'

const LoginBody = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #FFFFFF;
    color: black;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LoginImage = styled.img.attrs({
    className: 'my-class',
  })`
    width: 5rem;
    height: 5rem;
  `
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
`

const FormTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
`

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`

function FormLogin() {
  return (
    <LoginBody>
        <LoginContainer>
            <LoginImage src="https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" alt="IMD"/>
            <FormWrapper>
                <FormTitle>Login</FormTitle>
                <form>
                    <label>
                    Username:
                    <FormInput
                        type="text"
                        
                    />
                    </label>
                    <br />
                    <label>
                    Password:
                    <FormInput
                        type="password"
                        
                    />
                    </label>
                    <br />
                    <FormButton type="submit">Log In</FormButton>
                </form>
            </FormWrapper>
        </LoginContainer>
    </LoginBody>
  )
}

export default FormLogin