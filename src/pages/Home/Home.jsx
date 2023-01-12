import React from 'react'
import styled from 'styled-components'
import HomeDashboard from './HomeDashboard'
import HomeFeatured from './HomeFeatured'
import { useSelector } from 'react-redux';

const HomeContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: .6rem;
`

function Home() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const email = useSelector(state => state.auth.email);
  if (!isLoggedIn) {
    return <h1>gagal bang</h1>;
  } 
  return (
    <HomeContainer>
      <HomeDashboard />
      <HomeFeatured />
    </HomeContainer>
  )
}

export default Home