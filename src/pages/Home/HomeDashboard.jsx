import React from 'react'
import styled from 'styled-components'

import AddIcon from '@mui/icons-material/Add';

import { whiteOneColor, orangeOneColor } from '../../assets/variables'

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
    background-color: red;
    border-radius: .25rem;
`
const HomeRightContainer = styled.div`
    width: 27.7rem;
    height: 33.5rem;
    background-color: blue;
    border-radius: .25rem;
`
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: .25rem;
`
const ImageBig = styled.img.attrs({
  className: 'my-class',
})`
  width: 100%;
  height: 100%;
  border-radius: .25rem;
  cursor: pointer;
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
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
`
const ImageSmall = styled.img.attrs({
  className: 'my-class',
})`
  position: relative;
  width: 20%;
  height: 43%;
  padding-left: 1rem;
`
// const ImageOverlaySmall = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-end;
//   position: fixed;
//   padding-bottom: 11.11rem;
//   padding-left: 1rem;
//   width: 100%;
//   height: 100%;
// `
const ImageBookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 2.5rem;
  margin-bottom: 177px;
  margin-left: -186px;
  border-left: 20px solid rgba(255, 255, 255, 0.1);
  border-right: 20px solid rgba(255, 255, 255, 0.1);
  border-bottom: 14px solid transparent;
  opacity: .5;
  cursor: pointer;
  &:hover {
    border-left: 20px solid rgba(255, 255, 255, 0.3);
    border-right: 20px solid rgba(255, 255, 255, 0.3);
    opacity: .3;
    transition: all 0.2s ease-in-out;
  }
`
const ImagePlus = styled(AddIcon)({
  
});
const ImageName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  margin-left: 126px;
`
const ImageCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 3px solid ${whiteOneColor};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 3px solid ${orangeOneColor};
  }
`
const ImagePlay = styled.div`

`
const ImageTitles = styled.div`
  display: grid;
  justify-content: start;
  align-items: start;
`
const ImageTitle = styled.div`

`
const ImageSubTitle = styled.div`

`
const ImageMinute = styled.div`

`

function HomeDashboard() {
  return (
    <HomeContainer>
        <HomeLeftContainer>
          <ImageContainer>
            <ImageBig src="https://m.media-amazon.com/images/M/MV5BMzZjY2IwNjMtZTQwMS00MjE0LTlmYzgtNzVhNDBhZjdlM2NjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg" alt="" />
            <ImageOverlay>
              <ImageSmall src="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/12/mayfair-1.png?ssl=1" alt="" />
              {/* <ImageOverlaySmall> */}
              <ImageBookmark>
                <ImagePlus/>
              </ImageBookmark>
              {/* </ImageOverlaySmall> */}

              <ImageName>
                <ImageCircle>
                  <ImagePlay />
                </ImageCircle>
                <ImageTitles>
                  <ImageTitle>Al Pacino Return "Hunters"</ImageTitle>
                  <ImageSubTitle>Watch the Final Season Trailer</ImageSubTitle>
                </ImageTitles>
                <ImageMinute>1:32</ImageMinute>
              </ImageName>

            </ImageOverlay>  
          </ImageContainer>
        </HomeLeftContainer>
        <HomeRightContainer>

        </HomeRightContainer>
    </HomeContainer>
  )
}

export default HomeDashboard
