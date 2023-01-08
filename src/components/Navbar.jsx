import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MenuModal from './Navbars/MenuModal'
import IMDbModal from './Navbars/ProModal'
import FormSearchLogo from '@mui/icons-material/Search';
import { whiteOneColor, blackTwoColor } from '../assets/variables'

const NavbarContainer = styled.nav`
  font-size: 14px;
  font-weight: 700;
  background-color: ${blackTwoColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
`
const LogoContainer = styled.div`
  width: 4rem;
  height: 2rem;
  margin-right: 0.75rem;
`
const LogoImage = styled.img`
  cursor: pointer;
`
const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 0.48rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 0.75rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
`
const MenuModalContainer = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`
const MenuLines = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0.2rem;
`
const MenuLine = styled.div`
  width: 1rem;
  height: 2px;
  border-radius: 0.1rem;
  background-color: ${whiteOneColor};
`
const MenuText = styled.div`

`
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 700px;
  height: 2rem;
  border-radius: 0.2rem;
  margin-right: 0.75rem;
  background: ${whiteOneColor};
`
const FormCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: auto;
  height: 100%;
  padding-left: .5rem;
  padding-right: .5rem;
  border-radius: 0.3rem 0 0 0.3rem;
  border-right: 1px solid gray;
  color: ${blackTwoColor};
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    transition: all 0.1s ease-in-out;
  }
`
const FormText = styled.div`

`
const FormTriangle = styled.div`
  margin-top: 0.1rem;
  border-radius: 0.2rem;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${blackTwoColor};
`
const FormInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const FormInput = styled.input`
  width: 100%;
  height: 27px;
  outline: none;
  border: none;
`
const FormSearchContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`
const IMDbContainer = styled.div` 
  direction: rtl;
  display: grid;
  padding-top: 0.38rem;
  padding-bottom: 0.38rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 0.75rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
`
const IMDbTextWhite = styled.span` 
  font-weight: 800;
`
const IMDbTextBlue = styled.span` 
  color: #33c5f3;
`
const IMDbModalContainer = styled.div`
display: ${props => (props.isOpen ? 'block' : 'none')};
`
const LineContainer = styled.span` 
  width: 1.5px;
  height: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 0.5rem;
`
const WatchlistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 0.38rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
    .watchlist_bookmark {
      border-left: 8px solid ${whiteOneColor};
      border-right: 8px solid ${whiteOneColor};
      transition: all 0.2s ease-in-out;
    }
  }
`
const WatchlistBookmark = styled.div`
  width: 0;
  height: 1rem;
  border-radius: 0.2rem 0.2rem 0 0;
  border-left: 8px solid rgba(255, 255, 255, 0.2);;
  border-right: 8px solid rgba(255, 255, 255, 0.2);;
  border-bottom: 4px solid transparent;
`
const WatchlistText = styled.span`

`
const SigninContainer = styled.div`
  padding: 0.48rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.2rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
`
const LanguangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.48rem;
  padding-left: 1rem;
  padding-right: .6rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
`
const LanguangeTriangle = styled.div`
  margin-top: 0.1rem;
  border-radius: 0.2rem;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${whiteOneColor};
`
const Navbar = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
  const [isModalIMDbOpen, setIsModalIMDbOpen] = useState(false);
  const location = useLocation()
  const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup'

  const MenuModalClose = () => {
    setIsModalMenuOpen(false);
  }
  
  return ( isLoginOrSignup ? null : 
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Rectangle_Gold._CB443386186_.png" alt="IMDB LOGO" />
      </LogoContainer>
      <MenuContainer onClick={() => setIsModalMenuOpen(true)}>
        <MenuLines>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
        </MenuLines>
        <MenuText>Menu</MenuText>
      </MenuContainer>
      <MenuModalContainer isOpen={isModalMenuOpen}>
        <MenuModal onClose={MenuModalClose}/>
      </MenuModalContainer>
      <FormContainer>
        <FormCategory>
          <FormText>All</FormText>
          <FormTriangle/>
        </FormCategory>
        <FormInputContainer>
          <FormInput type="text" placeholder='Search IMDb' />
        </FormInputContainer>
        <FormSearchContainer>
          <FormSearchLogo/>
        </FormSearchContainer>
      </FormContainer>
      <IMDbContainer onMouseEnter={() => setIsModalIMDbOpen(true)} onMouseLeave={() => setIsModalIMDbOpen(false)}>
          <IMDbTextWhite>IMDb<IMDbTextBlue>Pro</IMDbTextBlue></IMDbTextWhite>
          <IMDbModalContainer onMouseLeave={() => setIsModalIMDbOpen(false)} isOpen={isModalIMDbOpen}>
            <IMDbModal/>
          </IMDbModalContainer>
      </IMDbContainer>
      <LineContainer/>
      <WatchlistContainer>
        <WatchlistBookmark className='watchlist_bookmark'/>
        <WatchlistText>Watchlist</WatchlistText>
      </WatchlistContainer>
      <Link to="/login" className='link'>
        <SigninContainer>Sign In</SigninContainer>
      </Link>
      <LanguangeContainer>
        EN <LanguangeTriangle/>
      </LanguangeContainer>
    </NavbarContainer>
  )
}

export default Navbar
