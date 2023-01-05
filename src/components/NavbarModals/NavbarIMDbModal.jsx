import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { whiteOneColor, orangeTwoColor, blackOneColor } from '../../assets/variables'
import Imdb from '../../assets/images/imdbpro_image.png'

const IMDbModal= styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 51px;
    z-index: 998;
    background-color: transparent;
    pointer-events: none;
`
const IMDbModalContainer= styled.div`
    direction: ltr;
    color: ${whiteOneColor};
    display: flex;
    justify-content: start;
    gap: 1rem;
    width: 604px; 
    height: 221px; 
    // margin-left: 76px;
    background: linear-gradient(0deg, rgba(20,127,176,1) 0%, rgba(0,37,64,1) 100%);;
    border-radius: 0.3rem;
    border: none;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-right: 1rem;
    pointer-events: auto;
`
const IMDbModalLeft= styled.div`
    width: 120px;
    height: 100%;
`
const IMDbModalRight= styled.div`

`
const IMDbModalRightButton= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${orangeTwoColor};
    color: ${blackOneColor};
    font-weight: 400;
    padding: .5rem;
    width: 160px;
    border-radius: .3rem;
    box-shadow: 0 0 .1rem 1px ${orangeTwoColor};
    cursor: pointer;
    &:hover {
        background-color: rgba(241, 197, 18, 0.8);
        transition: all 0.1s ease-in-out;
      }
}
`
const NavbarIMDbModal = () => {
    return (
      <IMDbModal>
        <IMDbModalContainer>
            <IMDbModalLeft>
                <img className='navbar__moidalImage' src={Imdb} alt="" />
            </IMDbModalLeft>
            <IMDbModalRight>
                <span className='navbar__modalHeaderList'>The essential resource for entertainment professionals</span>
                <ul>
                    <li className='navbar__modalList'>
                        Find industry contacts & talent representation
                    </li>
                    <li className='navbar__modalList'>
                        Access in-development titles not available on IMDb
                    </li>
                    <li className='navbar__modalList'>
                        Get the latest news from leading industry trades
                    </li>
                    <li className='navbar__modalList'>
                        Claim your page and control your brand across IMDb & Amazon
                    </li>
                </ul>    
                <IMDbModalRightButton>Try IMDbPro Free</IMDbModalRightButton> 
            </IMDbModalRight>
        </IMDbModalContainer>
      </IMDbModal>
    )
  }

export default NavbarIMDbModal