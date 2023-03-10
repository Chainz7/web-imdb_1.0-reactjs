import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { orangeOneColor, blackTwoColor, orangeTwoColor } from '../../assets/variables'

import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { Constant } from '../../constant/appConstant';
import FeaturedInfoModal from './FeaturedInfoModal';
import { CSSTransition } from 'react-transition-group';

const HomeContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: start;
  gap: 1rem;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 100%;
  }
`
const FeaturedTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${orangeOneColor};
  width: 81.5rem;
  @media (min-width: 1025px) and (max-width: 1200px) {
    font-size: 28px;
    line-height: 36px;
    width: 43.5rem;
    margin-left: -18.5rem;
  }
`
const FeaturedItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 81.5rem;
  height: 32rem;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 62.7rem;
    margin-left: -1.2rem;
  }
`
const FeaturedItem = styled.div`
  display: grid;
  justify-content: start;
  align-items: start;
  grid-template-rows: 55% 45%;
  width: 100%;
  height: 31rem;
  border-radius: .3rem;
  background-color: ${blackTwoColor};
`
const StyledSwiper = styled(Swiper)`
  .swiper-button-next, .swiper-button-prev {
    color: white;
    background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%);
    opacity: .7;
    border: .5px solid white;
    border-radius: .25rem;
    padding: .5rem;
    margin-top: -8.5rem;
    margin-left: -.6rem;
    margin-right: -.6rem;
    &:hover {
        opacity: 1;
        color: ${orangeOneColor};
        transition: all 0.2s ease-in-out;
    }
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    margin-left: .6rem;
    margin-right: -.6rem;
  }
`
const ItemOverlay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 81.5rem;
  height: 100%;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 62.7rem;
  }
`
const ItemImage = styled.img.attrs({
  className: 'my-class',
  })`
  object-fit: cover;
  width: 14.8rem;
  height: 100%;
  border-radius: .25rem;
  cursor: pointer;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 11.05rem;
  }
`
const ItemBookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 3rem;
  margin-left: -237px;
  border-left: 20px solid ${blackTwoColor};
  border-right: 20px solid ${blackTwoColor};
  border-bottom: 14px solid transparent;
  border-radius: 2px 0 0 0;
  opacity: .6;
  cursor: pointer;
  &:hover {
    border-left: 20px solid ${blackTwoColor};
    border-right: 20px solid ${blackTwoColor};
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    margin-left: -383.5px;
  }
`
const ItemPlus = styled(AddIcon)({
    
});
const ItemTitles = styled.div`
  display: grid;
  justify-content: start;
  align-items: start;
  padding-top: 0.2rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  height: 100%;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 9.7rem;
  }
`
const ItemStars = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: .1rem;
  width: 100%;
  height: 2.9rem;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 10rem;
    height: 2.9rem;
  }
`
const ItemYellowStar = styled(StarIcon)({
    color: '#f5c518',
});
const ItemRating = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: .2rem;
    @media (min-width: 1025px) and (max-width: 1200px) {
      font-size: 16px;
      line-height: 23px;
    }
`
const ItemBlueStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .7rem;
  padding: .5rem;
  padding-left: .9rem;
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
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    padding-left: .7rem;
    padding-right: .7rem;
    padding-top: .3rem;
    padding-bottom: .3rem;
  }
`
const BlueStar = styled(StarBorderIcon)({
    color: '#5695e9',
});
const ItemTitleContainer = styled.div`
    height: 2.9rem;
    width: 13.7rem;
    overflow: hidden;
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 10rem;
    }
`
const ItemTitle = styled.div`
    margin-left: 0.2rem;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      font-size: 16px;
    }
`
const ItemButtons = styled.div`
    display: grid;
    justify-items: start;
    align-items: start;
    gap: .5rem;
    height: 100%;
    margin-top: .3rem;
    margin-bottom: 5rem;
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 10rem;
    }
`
const ItemWatchContainer = styled.div`
    display: block;
    text-align: center;
    width: 92%;
    margin-left: 0.2rem;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: .25rem;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transition: all 0.2s ease-in-out;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 10rem;
      padding: 0.4rem;
      padding-left: .1rem;
      padding-right: .1rem;
      margin-left: 0;
    }
`
const ItemWatch = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #5695e9;
    @media (min-width: 1025px) and (max-width: 1200px) {  
      font-size: 14px;
    }
`
const ItemTrailerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2.4rem;
    margin-left: 1rem;
`
const ItemTrailers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    @media (min-width: 1025px) and (max-width: 1200px) {  
      gap: 2.5rem;
    }
`
const ItemTrailer = styled.div`
    padding: 0.5rem;
    border-radius: .25rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transition: all 0.2s ease-in-out;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {  
      padding-top: .4rem;
      padding-bottom: .4rem;
      font-weight: 500;
      font-size: 15px;
    }
`
const ItemInfos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
    padding: 8px;
    padding-right: 8px;
    padding-bottom: 7px;
    padding-top: 7px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transition: all 0.2s ease-in-out;
  }

`
const ItemInfo = styled.div`
    
`
const FeaturedRecomendations = styled.div`
    margin-top: -1rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: flex-end;
    margin-left: 69.5rem;
    @media (min-width: 1025px) and (max-width: 1200px) {  
      margin-left: 50.1rem;
    }
    
`
const FeaturedRecomendation = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #5695e9;
    cursor: pointer;
    &:hover {
        color: ${orangeTwoColor};
        transition: all 0.2s ease-in-out;
    }
`
const InfoModalState = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`

function HomeFeatured() {
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null) // state untuk menyimpan movie yang dipilih

  const InfoModalClose = () => {
    setIsModalInfoOpen(false);
  }
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
    setIsModalInfoOpen(true)
  }

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://raw.githubusercontent.com/chainz7/clone-imdb-api/main/db.json')
      const json = await response.json()

      if (Constant.SUCCESS == json.response_key) {
        setData(json.data)
      }
    }

    fetchData()
  }, [])

  return (
    <HomeContainer>
        <FeaturedTitle>Featured Today</FeaturedTitle>
        <FeaturedItems>
            <StyledSwiper 
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            {data.map((movie) => (  
                <SwiperSlide key={movie.id}>
                    <FeaturedItem>
                        <ItemOverlay>
                            <ItemImage src={movie.cover_picture_url} />
                            <ItemBookmark>
                                <ItemPlus/>
                            </ItemBookmark>
                        </ItemOverlay>
                        <ItemTitles>
                            <ItemStars>
                                <ItemYellowStar/>
                                <ItemRating>{movie.rating}</ItemRating>
                                <ItemBlueStar><BlueStar className='blue_star'/></ItemBlueStar>
                            </ItemStars>
                            <ItemTitleContainer>
                                <ItemTitle>{movie.title}</ItemTitle>
                            </ItemTitleContainer>
                            <ItemButtons>
                                <ItemWatchContainer>
                                    <ItemWatch>Watch Now</ItemWatch>
                                </ItemWatchContainer>
                                <ItemTrailerContainer>
                                  <ItemTrailers>
                                    <ItemTrailer>Trailer</ItemTrailer>
                                    <ItemInfos onClick={() => handleMovieClick(movie)}>
                                      <InfoIcon/>
                                    </ItemInfos>
                                  </ItemTrailers>
                                </ItemTrailerContainer>
                            </ItemButtons>
                        </ItemTitles>
                    </FeaturedItem>
                </SwiperSlide>
            ))}
            </StyledSwiper>
            <CSSTransition
              in={isModalInfoOpen}
              timeout={60}
              classNames="modal"
              unmountOnExit
            >
            <InfoModalState isOpen={isModalInfoOpen}>  
              <FeaturedInfoModal onClose={InfoModalClose} movie={selectedMovie}/>
            </InfoModalState>
            </CSSTransition>
        </FeaturedItems>
        <FeaturedRecomendations>
            <FeaturedRecomendation>Get More Recomendation</FeaturedRecomendation>
        </FeaturedRecomendations>
    </HomeContainer>
  )
}

export default HomeFeatured