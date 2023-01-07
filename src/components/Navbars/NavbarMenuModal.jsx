import React from 'react'
import styled from 'styled-components'
import { whiteOneColor, orangeOneColor, blackTwoColor, blackFourColor } from '../../assets/variables'

const MenuModal= styled.nav`
    font-size: 14px;
    font-weight: 700;
    color: ${whiteOneColor};
    display: grid; 
    justify-items: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100%;
    position: fixed; 
    top: 0;
    left: 0;
    padding-top: 2rem;
    background-color: ${blackFourColor}; 
    z-index: 999; 
    max-height: calc(100vh - 32px); 
    overflow-y: auto; 
    animation: slideDown 0.3s linear;
    pointer-events: none;
`
const MenuModalFirst = styled.nav`
    pointer-events: auto;
    display: flex;
    gap: 55rem;
    pointer-events: none;
`
const MenuModalLogo = styled.nav`
    width: 6rem;
    height: 3rem;
    pointer-events: auto;
`
const MenuModalClose = styled.nav`
    color: ${blackTwoColor};
    font-weight: 600;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${orangeOneColor};
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    pointer-events: auto;
`
const MenuModalSecond = styled.nav`
    pointer-events: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12rem;
    grid-row-gap: 2rem;
    margin-bottom: 3rem;
`
const MenuModalItems = styled.nav`
    display: grid;
    justify-items: start;
    align-items: start;
    grid-auto-rows: max-content;
    gap: 0.7rem;
`
const NavbarMenuModal = (props) => {
    const { isOpen, onClose } = props;

    return (
      <MenuModal isOpen={isOpen}>
        <MenuModalFirst>
            <a href="#">
                <MenuModalLogo onClick={onClose}>
                    <img src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Rectangle_Gold._CB443386186_.png" alt="IMDB LOGO" />
                </MenuModalLogo>
            </a>
            <a href="#">
                <MenuModalClose onClick={onClose}>
                    X
                </MenuModalClose>
            </a>
        </MenuModalFirst>
        <MenuModalSecond>
            <MenuModalItems>
                <span className='navbar__modalHeader'>Trending</span>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Top 250 Movies</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Most Popular Movies</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Top 250 TV Shows</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Most Popular TV Shows</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Most Popular Video Games</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Most Popular Music Video</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Most Popular Podcasts</a>
                </li>
            </MenuModalItems>
            <MenuModalItems>
                <span className='navbar__modalHeader'>TV Shows</span>
                <li>
                    <a href="#" className='navbar__modalSubheader'>What's on TV & Streaming</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Browse TV Shows by Genre</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>TV News</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>India TV Spotlight</a>
                </li>
            </MenuModalItems>
            <MenuModalItems>
                <span className='navbar__modalHeader'>Watch</span>
                <li>
                    <a href="#" className='navbar__modalSubheader'>What to Whatch</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Latest Trailers</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>IMDb Originals</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>IMDb Picks</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>IMDb Podcasts</a>
                </li>
            </MenuModalItems>
            <MenuModalItems>
                <span className='navbar__modalHeader'>Movies</span>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Release Calendar</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Browse Movies by Genre</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Top Box Office</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Showtimes & Tickets</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Movie News</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>India Movie Spotlight</a>
                </li>
            </MenuModalItems>
            <MenuModalItems>
                <span className='navbar__modalHeader'>Community</span>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Help Center</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Contributor Zone</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Polss</a>
                </li>
            </MenuModalItems>
            <MenuModalItems>
                <span className='navbar__modalHeader'>Celebs</span>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Born Today</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Most Popular Celebs</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Celebrity News</a>
                </li>
            </MenuModalItems>
            <MenuModalItems>
                <span className='navbar__modalHeader'>Awards & Events</span>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Oscars</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Best Picture Winners</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Emmys</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>STARmeter Awards</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>San Diego Comic-Con</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>New York Comic-Con</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Sundance Film Festival</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Toronto Int'l Film Festival</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Awards Central</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>Festival Central</a>
                </li>
                <li>
                    <a href="#" className='navbar__modalSubheader'>All Events</a>
                </li>
            </MenuModalItems>
        </MenuModalSecond>
      </MenuModal>
    )
  }

export default NavbarMenuModal