import React from 'react'
import styled from 'styled-components'
import HomeDashboard from './HomeDashboard'

const HomeContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: .6rem;
`

function Home() {
  return (
    <HomeContainer>
      <HomeDashboard></HomeDashboard>
    </HomeContainer>
  )
}

export default Home