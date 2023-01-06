import React, { useState } from 'react'
import styled from 'styled-components'
import { whiteOneColor, blackTwoColor } from '../../assets/variables'
import Search from '../../assets/images/search.png'
import NavbarMenuModal from './NavbarMenuModal'
import NavbarIMDbModal from './NavbarIMDbModal'

const NavbarContainer = styled.nav`
  font-size: 14px;
  font-weight: 700;
  background-color: ${blackTwoColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
`
const NavbarLogo = styled.nav`
  width: 4rem;
  height: 2rem;
  margin-right: 0.75rem;
`
const NavbarMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 0.48rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 0.75rem;
  border-radius: 0.2rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
`
const NavbarModalMenu = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`
const NavbarThreeLine = styled.nav`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0.2rem;
`
const NavbarLine = styled.nav`
  width: 1rem;
  height: 2px;
  border-radius: 0.1rem;
  background-color: ${whiteOneColor};
`
const NavbarForm = styled.nav`
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
const NavbarCategory = styled.nav`
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
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    transition: all 0.1s ease-in-out;
  }
`
const NavbarTriangleOne = styled.nav`
  margin-top: 0.1rem;
  border-radius: 0.2rem;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${blackTwoColor};
`
const NavbarSearch = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const NavbarButton = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`
const NavbarIMDB = styled.nav` 
  direction: rtl;
  display: grid;
  padding-top: 0.38rem;
  padding-bottom: 0.38rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 0.75rem;
  border-radius: 0.2rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
`
const NavbarIMDbModalOpen = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`
const NavbarWatchlist = styled.nav`
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
  }
`
const NavbarBookmark = styled.nav`
  width: 0;
  height: 1rem;
  border-radius: 0.2rem 0.2rem 0 0;
  border-left: 8px solid rgba(255, 255, 255, 0.2);;
  border-right: 8px solid rgba(255, 255, 255, 0.2);;
  border-bottom: 4px solid transparent;
  &:hover {
    border-left: 8px solid ${whiteOneColor};
    border-right: 8px solid ${whiteOneColor};
    transition: all 0.2s ease-in-out;
  }
`
const NavbarSignin = styled.nav`
  padding: 0.48rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.2rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
`
const NavbarLanguange = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.48rem;
  padding-left: 1rem;
  padding-right: .6rem;
  border-radius: 0.2rem;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
`
const NavbarTriangleTwo = styled.nav`
  margin-top: 0.1rem;
  border-radius: 0.2rem;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${whiteOneColor};
`

const Navbar = () => {
  const [isNavbarModalMenuOpen, setIsNavbarModalMenuOpen] = useState(false);
  const [isNavbarModalIMDbOpen, setIsNavbarModalIMDbOpen] = useState(false);

  const MenuModalClose = () => {
    setIsNavbarModalMenuOpen(false);
  }
  
  return (
    <NavbarContainer>
      <a className='navbar__menu' href="#">
        <NavbarLogo>
          <img src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Rectangle_Gold._CB443386186_.png" alt="IMDB LOGO" />
        </NavbarLogo>
      </a>
      <a className='navbar__menu' href="#">
          <NavbarMenu onClick={() => setIsNavbarModalMenuOpen(true)}>
            <NavbarThreeLine>
              <NavbarLine></NavbarLine>
              <NavbarLine></NavbarLine>
              <NavbarLine></NavbarLine>
            </NavbarThreeLine>
            Menu
          </NavbarMenu>
          <NavbarModalMenu isOpen={isNavbarModalMenuOpen}>
            <NavbarMenuModal onClose={MenuModalClose}/>
          </NavbarModalMenu>
      </a>
      <form className='navbar__form'>
        <NavbarForm>
          <NavbarCategory>All<NavbarTriangleOne></NavbarTriangleOne></NavbarCategory>
          <NavbarSearch>
            <input className='navbar__input' type="text" placeholder='Search IMDb' />
          </NavbarSearch>
          <button className='navbar__button'>
            <NavbarButton>
              <img src={Search} alt="" />
            </NavbarButton>
          </button>
        </NavbarForm>
      </form>
      <a className='navbar__menu' href="#">
        <NavbarIMDB onMouseEnter={() => setIsNavbarModalIMDbOpen(true)}>
          <span className='navbar__imdbpro'>IMDb<span className='navbar__pro'>Pro</span></span>
          <NavbarIMDbModalOpen onMouseLeave={() => setIsNavbarModalIMDbOpen(false)}
          isOpen={isNavbarModalIMDbOpen}>
            <NavbarIMDbModal/>
          </NavbarIMDbModalOpen>
        </NavbarIMDB>
      </a>
      <span className="navbar__line"></span>
      <a className='navbar__menu' href="">
      <NavbarWatchlist>
        <NavbarBookmark></NavbarBookmark>
        Watchlist
      </NavbarWatchlist>
      </a>
      <a className='navbar__menu' href="#">
        <NavbarSignin>
          Sign In
        </NavbarSignin>
      </a>
      <a className='navbar__menu' href="#">
        <NavbarLanguange>
          EN <NavbarTriangleTwo></NavbarTriangleTwo>
        </NavbarLanguange>
      </a>
    </NavbarContainer>
  )
}

export default Navbar
