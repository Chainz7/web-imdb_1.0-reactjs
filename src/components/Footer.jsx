import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: ;
  margin-top: -2rem;
  margin-bottom: 1.25rem;
  @media (min-width: 768px) and (max-width: 1025px) {
    display: none;
  }
`
const FooterButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  width: 13rem;
  padding: 10px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 3px;
  background: linear-gradient(0deg, rgba(212,171,71,1) 0%, #f5c518 100%);
  color: black;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(0,0,0,0.4);
    background: linear-gradient(0deg, rgba(247,191,51,1) 0%, #f5c518 100%);
  }
`
const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgba(255,255,255,0.1);
    transition: all 0.2s ease-in-out;
  }
`
const FooterInformationsFirst = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const FooterInformationFirst = styled.div`
  display: inline;
  align-items: flex-end;
  gap: .1rem;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const FooterInformationsSecond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: .5rem;
`
const FooterInformationSecond = styled.div`
  display: flex;
  align-items: flex-end;
  gap: .1rem;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const FooterTitle = styled.span`
  display: flex;
  align-items: center;
  gap: .2rem;
  font-weight: 500;
  font-size: 13px;
  pointer-events: none
`
const FooterAmazon = styled.span`
  font-weight: 700;
  font-size: 13px;
`
const FooterCopyright = styled.span`
  margin-top: .5rem;
  font-weight: 400;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
`
function Footer() {
  return (
    <FooterContainer>
      <Link to="/login" className='navbar_link'>
        <FooterButton>Sign in for more access</FooterButton>
      </Link>
      <FooterSocials>
        <FooterSocial><GitHubIcon/></FooterSocial>
        <FooterSocial><InstagramIcon/></FooterSocial>
        <FooterSocial><TwitterIcon/></FooterSocial>
        <FooterSocial><YouTubeIcon/></FooterSocial>
        <FooterSocial><FacebookIcon/></FooterSocial>
      </FooterSocials>
      <FooterInformationsFirst>
        <FooterInformationFirst>Get the IMDb App</FooterInformationFirst>
        <FooterInformationFirst>Help</FooterInformationFirst>
        <FooterInformationFirst>Site Index</FooterInformationFirst>
        <FooterInformationFirst>Box Office Mojo</FooterInformationFirst>
        <FooterInformationFirst>IMDb Developer</FooterInformationFirst>
      </FooterInformationsFirst>
      <FooterInformationsSecond>
        <FooterInformationSecond>Press Room</FooterInformationSecond>
        <FooterInformationSecond>Advertising</FooterInformationSecond>
        <FooterInformationSecond>Jobs</FooterInformationSecond>
        <FooterInformationSecond>Conditions of Use</FooterInformationSecond>
        <FooterInformationSecond>Privacy Policy</FooterInformationSecond>
        <FooterInformationSecond>Your Ads Privacy Choices</FooterInformationSecond>
      </FooterInformationsSecond>
      <FooterTitle>an <FooterAmazon>amazon</FooterAmazon> company</FooterTitle>
      <FooterCopyright>© 1990-2023 by IMDb.com, Inc</FooterCopyright>
    </FooterContainer>
  )
}

export default Footer