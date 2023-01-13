import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

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
  margin-top: 3.5rem;
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
  border-radius: 3px;
  background: linear-gradient(0deg, rgba(212,171,71,1) 0%, #f5c518 100%);
  color: black;
  cursor: pointer;
  margin-bottom: .8rem;
  &:hover {
    border: 1px solid rgba(0,0,0,0.4);
    background: linear-gradient(0deg, rgba(247,191,51,1) 0%, #f5c518 100%);
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
const LoginNew = styled.span`
    font-weight: 400;
    font-size: 13px;
    color: #CCCCCC;
    margin-left: 6.8rem;
`
const LoginButton = styled.button`
  width: 100%;
    font-weight: 400;
    font-size: 13px;
    margin-top: .8rem;
    padding: .5rem;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 3px;
    color: black;
    cursor: pointer;
`
function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(login({ email, password }));
    navigate("/");
  };
  const error = useSelector(state => state.auth.error);
  return (
    <LoginBody>
        <LoginBackground>
            <Link to="/" className='navbar_link'>
              <LoginImage src="https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" alt="IMD"/>
            </Link>
            <LoginContainer>
                <FormTitle>Sign in</FormTitle>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginLabel>
                        <span>Email</span> 
                    </LoginLabel>
                    <FormInput name='email' type="email"/>
                    <br />
                    <LoginLabel>
                        <span>Password</span> 
                        <Link to="/login" className='navbar_link'>
                          <LoginForget> Forgot your password?</LoginForget> 
                        </Link>
                    </LoginLabel>
                    <FormInput name='password' type="password"/>
                    <br />
                    {error && <LoginLabel>{error}</LoginLabel>}
                    <br />
                    <FormButton type="submit">Sign In</FormButton>
                      <LoginNew>New to IMDb?</LoginNew>
                      <Link to="/signup" className='navbar_link'>
                        <LoginButton>Create your IMDb Account</LoginButton>
                      </Link>
                </LoginForm>
            </LoginContainer>
        </LoginBackground>
    </LoginBody>
  )
}

export default FormLogin