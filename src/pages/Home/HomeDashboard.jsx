import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import AddIcon from '@mui/icons-material/Add';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { Constant } from '../../constant/appConstant';
import { whiteOneColor, orangeOneColor, orangeTwoColor, blackTwoColor } from '../../assets/variables'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: .75rem;
`
const HomeLeftContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 53rem;
    height: 33.5rem;
    border-radius: .25rem;
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 41rem;
      height: 27.5rem;
    }
`
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 33.5rem;
  border-radius: .25rem;
  @media (min-width: 1025px) and (max-width: 1200px) {
    height: 27.5rem;
  }
`
const ImageBig = styled.img.attrs({
  className: 'my-class',
})`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: .25rem;
`
const ImageOverlay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 1) 88%);
`
const ImageSmall = styled.img.attrs({
  className: 'my-class',
})`
  object-fit: cover;
  position: relative;
  width: 20%;
  height: 43%;
  padding-left: 1rem;
`
const ImageBookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 2.45rem;
  margin-bottom: 177px;
  margin-left: -186px;
  border-left: 20px solid ${blackTwoColor};
  border-right: 20px solid ${blackTwoColor};
  border-bottom: 14px solid transparent;
  opacity: .5;
  cursor: pointer;
  &:hover {
    border-left: 20px solid ${blackTwoColor};
    border-right: 20px solid ${blackTwoColor};
    opacity: .9;
    transition: all 0.2s ease-in-out;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    height: 2.45rem;
    margin-bottom: 136px;
    margin-left: -147px;
    border-left: 20px solid ${blackTwoColor};
    border-right: 20px solid ${blackTwoColor};
    border-bottom: 14px solid transparent;
    opacity: .5;
    cursor: pointer;
    &:hover {
      border-left: 20px solid ${blackTwoColor};
      border-right: 20px solid ${blackTwoColor};
      opacity: .9;
      transition: all 0.2s ease-in-out;
    }
  }
`
const ImagePlus = styled(AddIcon)({
  
});
const ImageName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-left: 126px;
  @media (min-width: 1025px) and (max-width: 1200px) {
    margin-left: 90px;
  }
`
const ImageCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border: 3px solid ${whiteOneColor};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 3px solid ${orangeOneColor};
    transition: all 0.1s ease-in-out;
    .image_play {
      border-left: 19px solid ${orangeOneColor};
      transition: all 0.1s ease-in-out;
    }
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 52px;
    height: 52px;
    &:hover {
      border: 3px solid ${orangeOneColor};
      transition: all 0.1s ease-in-out;
      .image_play {
        border-left: 17px solid ${orangeOneColor};
        transition: all 0.1s ease-in-out;
      }
    }
  }
`
const ImagePlay = styled.div`
  width: 0; 
  height: 0; 
  margin-left: .25rem;
  border-radius: .2rem;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 19px solid ${whiteOneColor};
  &:hover {
    border-left: 19px solid ${orangeOneColor};
    transition: all 0.1s ease-in-out;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-left: 17px solid ${whiteOneColor};
    &:hover {
      border-left: 17px solid ${orangeOneColor};
      transition: all 0.1s ease-in-out;
    }
  }
`
const ImageTitles = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
`
const ImageTitle = styled.div`
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  @media (min-width: 1025px) and (max-width: 1200px) {
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
  }
`
const ImageSubTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  width: 440px;
  height: 25px;
  @media (min-width: 1025px) and (max-width: 1200px) {
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    width: 330px;
  }
`
const ImageMinute = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.7);
  @media (min-width: 1025px) and (max-width: 1200px) {
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
  }
`
const HomeRightContainer = styled.div`
  display: grid;
  justify-content: start;
  align-items: start;
  grid-template-rows: 10% 90%;
  width: 27.7rem;
  height: 33.5rem;
  border-radius: .25rem;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 19.8rem;
    height: 11.5rem;
  }
`
const RightUpcoming = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${orangeOneColor};
  @media (min-width: 1025px) and (max-width: 1200px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
`
const ListsContainer = styled.div`
  display: grid;
  justify-items: start;
  align-items: start;
  gap: 1rem;
  margin-top: -1rem;
  width: 26.1rem;
  border-radius: .25rem;
  padding: .8rem;
  background: linear-gradient(0deg, rgba(0,0,0,1) 55%, rgba(18,18,18,1) 100%);
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 18.4rem;
    margin-top: .6rem;
  }
`
const ListBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    .list_circle {
      border: 1.5px solid ${orangeOneColor};
      transition: all 0.1s ease-in-out;
    }
    .list_play {
      border-left: 9px solid ${orangeOneColor};
      transition: all 0.1s ease-in-out;
    }
  }
`
const ListImage = styled.img.attrs({
  className: 'my-class',
})`
  object-fit: cover;
  width: 88px;
  height: 130px;
  border-radius: .25rem;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 67px;
    height: 99px;
  }
`
const ListItems = styled.div`
  display: grid;
`
const ListAttributes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: end;
  gap: .5rem;
  margin-bottom: .3rem;
`
const ListCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1.5px solid ${whiteOneColor};
  border-radius: 50%;
  &:hover {
    border: 1.5px solid ${orangeOneColor};
    transition: all 0.1s ease-in-out;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 25px;
    height: 25px;
  }
`
const ListPlay = styled.div`
  width: 0; 
  height: 0; 
  margin-left: .15rem;
  border-radius: .2rem;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 9px solid ${whiteOneColor};
  &:hover {
    border-left: 9px solid ${orangeOneColor};
    transition: all 0.1s ease-in-out;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    border-radius: .2rem;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 8px solid ${whiteOneColor};
    &:hover {
      border-left: 8px solid ${orangeOneColor};
      transition: all 0.1s ease-in-out;
    }
  }
`
const ListMinute = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
`
const ListTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`
const ListSubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  width: 100%;
  height: 20px;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 220px;
  }
`
const ListFooter = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-top: 1rem;
  cursor: pointer;  
  &:hover {
    color: ${orangeTwoColor};
  }
`
const StyledSwiper = styled(Swiper)`
  .swiper-button-next, .swiper-button-prev {
    color: white;
    background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%);
    opacity: .7;
    border: .5px solid white;
    border-radius: .3rem;
    padding: .5rem;
    margin-top: -3rem;
    margin-left: -.6rem;
    margin-right: -.6rem;
    &:hover {
        opacity: 1;
        color: ${orangeOneColor};
        transition: all 0.2s ease-in-out;
    }
  }
`

function HomeDashboard() {
  
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

  const sorted = data;
  
  sorted.sort((a, b) => new Date(b.release_year) - new Date(a.release_year));

  return (
    <HomeContainer>
        <HomeLeftContainer>
          
          <StyledSwiper navigation={true} modules={[Navigation]} className="mySwiper">
            {/* REPETITION DATA START*/}
            {sorted.slice(0, 5).map((movie) => ( 
            <SwiperSlide key={movie.id}>
              <ImageContainer>
                <ImageBig src={movie.picture_url} alt="" />
                <ImageOverlay>
                  <ImageSmall src={movie.cover_picture_url} alt="" />
                  <ImageBookmark>
                    <ImagePlus/>
                  </ImageBookmark>
                  <ImageName>
                    <ImageCircle>
                      <ImagePlay className="image_play"/>
                    </ImageCircle>
                    <ImageTitles>
                      <ImageTitle>{movie.title}</ImageTitle>
                      <ImageSubTitle>{movie.description}</ImageSubTitle>
                    </ImageTitles>
                    <ImageMinute>{movie.duration}</ImageMinute>
                  </ImageName>
                </ImageOverlay>  
              </ImageContainer>
            </SwiperSlide>
            ))}
            {/* REPETITION DATA STOP*/}
          </StyledSwiper>
          
        </HomeLeftContainer>

        <HomeRightContainer>
          <RightUpcoming>Up next</RightUpcoming>
          <ListsContainer>

            {/* REPETITION DATA START*/}
            {sorted.slice(0, 3).map((movie) => (  
            <ListBox key={movie.id}>
              <ListImage src={movie.cover_picture_url} alt=""/>
              <ListItems>
                <ListAttributes>
                  <ListCircle className="list_circle">
                    <ListPlay className="list_play"/>
                  </ListCircle>
                  <ListMinute>{movie.duration}</ListMinute>
                </ListAttributes>
                <ListTitle>{movie.title}</ListTitle>
                <ListSubTitle>{movie.description}</ListSubTitle>
              </ListItems>
            </ListBox>
            ))}
            {/* REPETITION DATA STOP*/}

            <ListFooter>Browse Trailer</ListFooter>
          </ListsContainer>
        </HomeRightContainer>
    </HomeContainer>
  )
}

export default HomeDashboard
