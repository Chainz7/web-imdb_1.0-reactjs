import React from 'react'
import styled from 'styled-components'

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoModalDislike from '@mui/icons-material/ThumbDownOffAlt';

const InfoModalPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.6);
  z-index: 1000;
`
const InfoModalContainer = styled.div`
  display: grid;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  width: 568px;
  height: auto;
  padding: 1.5rem;
  border-radius: .25rem;
  background-color: #1F1F1F;
`
const InfoModalFirstRows = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
`
const InfoModalImage = styled.img`
  width: 82px;
  height: 118px;
  object-fit: cover;
  border-radius: .1rem;
`
const InfoModalTitles = styled.div`
  display: grid;
  align-items: start;
  gap: .3rem;
`
const InfoModalTitle = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.8px;
`
const InfoModalSubTitles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: flex-start;
  align-items: center;
`
const InfoModalSubtitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`
const InfoModalRatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: .1rem;
  width: 100%;
  height: 100%;
`
const InfoModalRatingYStar = styled(StarIcon)({  
  color: '#f5c518',
  marginBottom: '1px',
});
const InfoModalRating = styled.div`
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
`
const InfoModalRatingBStarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .1rem;
  padding: .5rem;
  padding-left: .7rem;
  padding-right: .9rem;
  cursor: pointer;
  &:hover {
    border-radius: .3rem;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease-in-out;
    .blue_star {
        color: white;
        transition: all 0.2s ease-in-out;
    }  
    .blue_rate {
        color: white;
        transition: all 0.2s ease-in-out;
    }  
  }
`
const InfoModalRatingBStar = styled(StarBorderIcon)({
    color: '#5695e9',
});
const InfoModalRatingRate = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5695e9;
`
const InfoModalSecondRows = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
`
const InfoModalDescription = styled.span`
  font-weight: 400px;
  font-size: 14px;
  line-height: 20px;
`
const InfoModalThirdRows = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: .4rem;
  width: 100%;
`
const InfoModalWatchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78%;
  padding: 0.45rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: .25rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(86, 149, 233, 0.1);
    transition: all 0.2s ease-in-out;
  }
`
const InfoModalWatch = styled.span`
  font-weight: 600;
  color: #5695e9;
`
const InfoModalDislikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22%;
  padding: 0.3rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: .25rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(86, 149, 233, 0.1);
    transition: all 0.2s ease-in-out;
  }
`
const InfoModalDislikes = styled(InfoModalDislike)({
  color: '#5695e9',
});
function FeaturedInfoModal(props) {
  const { isOpen, onClose } = props;

  return (
    <InfoModalPosition isOpen={isOpen} onClick={onClose}>
      <InfoModalContainer>
          <InfoModalFirstRows>
            <InfoModalImage src='https://m.media-amazon.com/images/M/MV5BMzZjY2IwNjMtZTQwMS00MjE0LTlmYzgtNzVhNDBhZjdlM2NjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg'/>
            <InfoModalTitles>
                <InfoModalTitle>Black Adam</InfoModalTitle>
                <InfoModalSubTitles>
                  <InfoModalSubtitle><li className='li_left'>2022</li></InfoModalSubtitle>
                  <InfoModalSubtitle><li>2022</li></InfoModalSubtitle>
                  <InfoModalSubtitle><li className='li_right'>2022</li></InfoModalSubtitle>
                  <InfoModalSubtitle><li className='li_left'>2022</li></InfoModalSubtitle>
                  <InfoModalSubtitle><li>2022</li></InfoModalSubtitle>
                  <InfoModalSubtitle><li className='li_right'>2022</li></InfoModalSubtitle>
                </InfoModalSubTitles>
                <InfoModalRatingContainer>
                  <InfoModalRatingYStar sx={{ fontSize: "18px" }}/>
                  <InfoModalRating>7.3 / 10</InfoModalRating>
                  <InfoModalRatingBStarContainer>
                    <InfoModalRatingBStar sx={{ fontSize: "18px" }} className='blue_star'/>
                    <InfoModalRatingRate className='blue_rate'>Rate</InfoModalRatingRate>
                  </InfoModalRatingBStarContainer>
                </InfoModalRatingContainer>
            </InfoModalTitles>
          </InfoModalFirstRows>
          <InfoModalSecondRows>
            <InfoModalDescription>asdasdasd asdasdasd aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa</InfoModalDescription>
          </InfoModalSecondRows>
          <InfoModalThirdRows>
            <InfoModalWatchContainer>
              <InfoModalWatch>Watchlist</InfoModalWatch>
            </InfoModalWatchContainer>
            <InfoModalDislikeContainer>
              <InfoModalDislikes/>
            </InfoModalDislikeContainer>
          </InfoModalThirdRows>
      </InfoModalContainer> 
    </InfoModalPosition>
  )
}

export default FeaturedInfoModal