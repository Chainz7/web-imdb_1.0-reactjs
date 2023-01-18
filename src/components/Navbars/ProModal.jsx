import React from 'react'
import styled from 'styled-components'
import { whiteOneColor, orangeTwoColor, blackOneColor } from '../../assets/variables'
import Imdb from '../../assets/images/imdbpro_image.png'

const ProModalContainer= styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 43px;
    z-index: 998;
    background-color: transparent;
    pointer-events: none;
`
const BodyContainer= styled.div`
    direction: ltr;
    color: ${whiteOneColor};
    display: flex;
    justify-content: start;
    gap: 1rem;
    width: 550px; 
    height: 201px; 
    background: linear-gradient(0deg, rgba(20,127,176,1) 0%, rgba(0,17,31,1) 100%);
    border-radius: 0.3rem;
    border: none;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-right: 1rem;
    pointer-events: auto;
`
const BodyLeft= styled.div`
    width: 120px;
    height: 100%;
`
const BodyImage= styled.img`

`
const BodyRight= styled.div`

`
const BodyTitle= styled.span`

`
const BodyLists= styled.ul`

`
const BodyList= styled.li`
    list-style: disc;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: .8rem;
    margin-left: -1.7rem;
`
const BodyButton= styled.div`
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

const ProModal = () => {
    return (
      <ProModalContainer>
        <BodyContainer>
            <BodyLeft>
                <BodyImage src={Imdb} alt="IMDB PRO" />
            </BodyLeft>
            <BodyRight>
                <BodyTitle>The essential resource for entertainment professionals</BodyTitle>
                <BodyLists>
                    <BodyList>Find industry contacts & talent representation</BodyList>
                    <BodyList>Access in-development titles not available on IMDb</BodyList>
                    <BodyList>Get the latest news from leading industry trades</BodyList>
                    <BodyList>Claim your page and control your brand across IMDb & Amazon</BodyList>
                </BodyLists>    
                <BodyButton>Try IMDbPro Free</BodyButton> 
            </BodyRight>
        </BodyContainer>
      </ProModalContainer>
    )
  }

export default ProModal