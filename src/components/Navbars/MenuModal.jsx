import React from 'react'
import styled from 'styled-components'
import { whiteOneColor, orangeOneColor, blackTwoColor, blackFourColor } from '../../assets/variables'

const MenuModalContainer= styled.div`
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
const NavContainer = styled.div`
    pointer-events: auto;
    display: flex;
    gap: 55rem;
    pointer-events: none;
`
const NavImageContainer = styled.div`
    width: 6rem;
    height: 3rem;
`
const NavImage = styled.img`

`
const NavClose = styled.div`
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
    cursor: pointer;
`
const BodyContainer = styled.div`
    pointer-events: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12rem;
    grid-row-gap: 2rem;
    margin-bottom: 3rem;
`
const BodyItems = styled.div`
    display: grid;
    justify-items: start;
    align-items: start;
    grid-auto-rows: max-content;
    gap: 0.7rem;
`
const BodyItemTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: #f1c512;
    pointer-events: auto;
`
const BodyItemList = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
const MenuModal = (props) => {
    const { isOpen, onClose } = props;

    return (
      <MenuModalContainer isOpen={isOpen}>
        <NavContainer>
            <NavImageContainer onClick={onClose}>
                <NavImage src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Rectangle_Gold._CB443386186_.png" alt="IMDB LOGO" />
            </NavImageContainer>
            <NavClose onClick={onClose}>X</NavClose>
        </NavContainer>
        <BodyContainer>
            <BodyItems>
                <BodyItemTitle>Trending</BodyItemTitle>
                <BodyItemList>Top 250 Movies</BodyItemList> 
                <BodyItemList>Most Popular Movies</BodyItemList>    
                <BodyItemList>Top 250 TV Shows</BodyItemList>   
                <BodyItemList>Most Popular TV Shows</BodyItemList>  
                <BodyItemList>Most Popular Video Games</BodyItemList>   
                <BodyItemList>Most Popular Music Video</BodyItemList>   
                <BodyItemList>Most Popular Podcasts</BodyItemList>  
            </BodyItems>
            <BodyItems>
                <BodyItemTitle>TV Shows</BodyItemTitle>
                <BodyItemList>What's on TV & Streaming</BodyItemList>   
                <BodyItemList>Browse TV Shows by Genre</BodyItemList>   
                <BodyItemList>TV News</BodyItemList>    
                <BodyItemList>India TV Spotlight</BodyItemList> 
            </BodyItems>
            <BodyItems>
                <BodyItemTitle>Watch</BodyItemTitle>
                <BodyItemList>What to Whatch</BodyItemList> 
                <BodyItemList>Latest Trailers</BodyItemList>    
                <BodyItemList>IMDb Originals</BodyItemList> 
                <BodyItemList>IMDb Picks</BodyItemList> 
                <BodyItemList>IMDb Podcasts</BodyItemList>  
            </BodyItems>
            <BodyItems>
                <BodyItemTitle>Movies</BodyItemTitle>
                <BodyItemList>Release Calendar</BodyItemList>   
                <BodyItemList>Browse Movies by Genre</BodyItemList> 
                <BodyItemList>Top Box Office</BodyItemList> 
                <BodyItemList>Showtimes & Tickets</BodyItemList>    
                <BodyItemList>Movie News</BodyItemList> 
                <BodyItemList>India Movie Spotlight</BodyItemList>  
            </BodyItems>
            <BodyItems>
                <BodyItemTitle>Community</BodyItemTitle>
                <BodyItemList>Help Center</BodyItemList>
                <BodyItemList>Contributor Zone</BodyItemList>
                <BodyItemList>Polss</BodyItemList>
            </BodyItems>
            <BodyItems>
                <BodyItemTitle>Celebs</BodyItemTitle>
                <BodyItemList>Born Today</BodyItemList>
                <BodyItemList>Most Popular Celebs</BodyItemList>
                <BodyItemList>Celebrity News</BodyItemList>
            </BodyItems>
            <BodyItems>
                <BodyItemTitle>Awards & Events</BodyItemTitle>
                <BodyItemList>Oscars</BodyItemList>
                <BodyItemList>Best Picture Winners</BodyItemList>
                <BodyItemList>Emmys</BodyItemList>
                <BodyItemList>STARmeter Awards</BodyItemList>
                <BodyItemList>San Diego Comic-Con</BodyItemList>
                <BodyItemList>New York Comic-Con</BodyItemList>
                <BodyItemList>Sundance Film Festival</BodyItemList>
                <BodyItemList>Toronto Int'l Film Festival</BodyItemList>
                <BodyItemList>Awards Central</BodyItemList>
                <BodyItemList>Festival Central</BodyItemList>
                <BodyItemList>All Events</BodyItemList>
            </BodyItems>
        </BodyContainer>
      </MenuModalContainer>
    )
  }

export default MenuModal