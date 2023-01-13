import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Constant } from '../../constant/appConstant';

const SearchModalContainer=styled.div`
    display: flex;
    justify-content: start;
    width: 700px;
    margin-left: -60px;
    position: fixed;
    top: 50px;
    z-index: 998;
    background-color: transparent;
`
const BodyContainer= styled.div`
    color: white;
    display: grid;
    justify-content: start;
    align-items: start;
    width: 100%; 
    background-color: rgb(31,31,31);
    border-radius: 0.3rem;
`
const BodyBox= styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    width: 692px;
    padding-left: .5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    border-radius: 0.3rem;
    background-color: rgb(31,31,31);
    cursor: pointer;
    &:hover {
        background-color: rgb(255,255,255, .1);
    }
`
const BodyImage= styled.img`
    object-fit: cover;
    width: 48px;
    height: 71px;
`
const BodyTexts= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
const BodyTitle= styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`
const BodyDate= styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
`
const BodyActor= styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
`
const BodyLine= styled.div`
    background-color: rgb(87,87,87);
    position: absolute;
    margin-top: 78px;
    margin-left: -8px;
    width: 100%;
    height: 1px;
`
const BodyResults= styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: .5rem;
    padding-right: .5rem;
    padding-bottom: .5rem;
    border-radius: 0.3rem;
    background-color: rgb(31,31,31);
    cursor: pointer;
    &:hover {
        background-color: rgb(255,255,255, .1);
    }
`
const BodyResult= styled.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
`

function SearchModal({searchResults, onClose}) {
    
  return (
    <SearchModalContainer>
        <BodyContainer>
        {searchResults.map(result =>
            <BodyBox>
                <BodyImage src={result.cover_picture_url}/>
                <BodyTexts>
                    <BodyTitle>{result.title}</BodyTitle>
                    <BodyDate>{result.release_year}</BodyDate>
                    <BodyActor>Robert Downey Jr.</BodyActor>
                </BodyTexts>
                <BodyLine />
            </BodyBox>
            )}
        <BodyResults onClick={onClose}>
            <BodyResult>Close</BodyResult>
        </BodyResults>
        </BodyContainer>
    </SearchModalContainer>
  )
}

export default SearchModal