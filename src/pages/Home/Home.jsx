import React from 'react'
import styled from 'styled-components'
import HomeDashboard from './HomeDashboard'
import HomeFeatured from './HomeFeatured'

const HomeContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: .6rem;
`

function Home() {
  return (
    <HomeContainer>
      <HomeDashboard />
      <HomeFeatured />
    </HomeContainer>
  )
}

export default Home