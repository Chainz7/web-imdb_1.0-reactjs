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
import { Constant } from '../../constant/appConstant';

const HomeContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: start;
  gap: 1rem;
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
`
const FeaturedItems = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 81.5rem;
    height: 32rem;
`
const FeaturedItem = styled.div`
  display: grid;
  justify-content: start;
  align-items: start;
  grid-template-rows: 60% 40%;
  width: 100%;
  height: 30rem;
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
    margin-top: -7.5rem;
    margin-left: -.6rem;
    margin-right: -.6rem;
    &:hover {
        opacity: 1;
        color: ${orangeOneColor};
        transition: all 0.2s ease-in-out;
    }
  }
`
const ItemOverlay = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 81.5rem;
    height: 100%;
`
const ItemImage = styled.img.attrs({
    className: 'my-class',
  })`
    object-fit: cover;
    width: 14.8rem;
    height: 100%;
    border-radius: .25rem;
    cursor: pointer;
`
const ItemBookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 3rem;
  margin-left: -238px;
  border-left: 22px solid ${blackTwoColor};
  border-right: 22px solid ${blackTwoColor};
  border-bottom: 14px solid transparent;
  opacity: .6;
  cursor: pointer;
  &:hover {
    border-left: 22px solid ${blackTwoColor};
    border-right: 22px solid ${blackTwoColor});
    opacity: 1;
    transition: all 0.2s ease-in-out;
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
`
const ItemStars = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: .1rem;
  width: 100%;
  height: 2.9rem;
`
const ItemYellowStar = styled(StarIcon)({
    color: '#f5c518',
});
const ItemRating = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.7);
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
`
const BlueStar = styled(StarBorderIcon)({
    color: '#5695e9',
});
const ItemTitleContainer = styled.div`
    height: 2.9rem;
    width: 13.7rem;
    overflow: hidden;
`
const ItemTitle = styled.div`
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
const ItemButtons = styled.div`
    display: grid;
    justify-items: center;
    align-items: start;
    gap: .5rem;
    height: 100%;
    margin-top: .3rem;
    margin-bottom: 5rem;
`
const ItemWatchContainer = styled.div`
    display: block;
    text-align: center;
    width: 92%;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: .25rem;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transition: all 0.2s ease-in-out;
    }
`
const ItemWatch = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #5695e9;
`
const ItemTrailerContainer = styled.div`
    display: block;
    text-align: center;
    width: 40%;
    padding: 0.5rem;
    margin-top: -2.7rem;
    border-radius: .25rem;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transition: all 0.2s ease-in-out;
    }
`
const ItemTrailer = styled.div`
    font-weight: 600;
    font-size: 16px;
`
const FeaturedRecomendations = styled.div`
    margin-top: -1rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: flex-end;
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

function HomeFeatured() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/featured-today')
      const json = await response.json()

      if (Constant.SUCCESS === json.response_key) {
        setData(json.data)
        console.log(data);
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
            {data.map((item) => (  
                <SwiperSlide key={item.id}>
                    <FeaturedItem>
                        <ItemOverlay>
                            <ItemImage src={item.cover_picture_url} />
                            <ItemBookmark>
                                <ItemPlus/>
                            </ItemBookmark>
                        </ItemOverlay>
                        <ItemTitles>
                            <ItemStars>
                                <ItemYellowStar/>
                                <ItemRating>{item.rating}</ItemRating>
                                <ItemBlueStar><BlueStar className='blue_star'/></ItemBlueStar>
                            </ItemStars>
                            <ItemTitleContainer>
                                <ItemTitle>{item.title}</ItemTitle>
                            </ItemTitleContainer>
                            <ItemButtons>
                                <ItemWatchContainer>
                                    <ItemWatch>Watch Now</ItemWatch>
                                </ItemWatchContainer>
                                <ItemTrailerContainer>
                                    <ItemTrailer>Trailer</ItemTrailer>
                                </ItemTrailerContainer>
                            </ItemButtons>
                        </ItemTitles>
                    </FeaturedItem>
                </SwiperSlide>
            ))}
            </StyledSwiper>
        </FeaturedItems>
        <FeaturedRecomendations>
            <FeaturedRecomendation>Get More Recomendation</FeaturedRecomendation>
        </FeaturedRecomendations>
    </HomeContainer>
  )
}

export default HomeFeatured