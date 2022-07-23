import React from 'react'
import styled from 'styled-components'

import Particles from '../containers/Particles'

const blockchainImg = require('../media/blockchain.png')
const globeImg = require('../media/globe.png')

const HomeWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`

const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #2b3548, #0d1222);
`

const Header = styled.div`
  position: absolute;
  max-width: 800px;
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  margin: 1vw 4vw 1vw 4vw;
  padding: 0;
  line-height: 1;
  font-size: 3rem;
  border-radius: 50px;
  color: #edf6fe;
`

const Subtitle = styled.p`
  margin: 1vw 4vw 1vw 4vw;
  padding: 0;
  line-height: 1.5;
  max-width: 800px;
  border-radius: 50px;
  color: #e5eef5;
`

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`

const Section1 = styled.div`
  padding: 5vh 15vw 5vh 15vw;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(2, 50%);
  text-align: left;
  @media (max-width: 799px) {
    grid-template-columns: repeat(auto-fill, 100%);
    text-align: center;
  }
  background: #202124;
  line-height: 1.5;
`

const Column = styled.div`
  align-self: center;
`

const Heading = styled.h3`
  text-transform: uppercase;
  color: white;
`

const Subheading = styled.p`
  margin-top: 0;
  padding-top: 0;
  color: #a2a7af;
`

const Description = styled.p`
  color: #a2a7af;
`

const Section2 = styled.div`
  padding: 5vh 15vw 5vh 15vw;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr
  text-align: center;
  background: #202124;
`

const ItemHeading = styled.h3`
  margin-bottom: 0;
  padding-bottom: 0;
  color: white;
`

const ItemDescription = styled.p`
  margin-top: 0;
  padding-top: 0;
  color: #a2a7af;
`


const Home = () =>
  <HomeWrapper>
    <Banner>
      <Particles />
      <Header>
        <Title>Web3 and Blockchain Solution, for Victorian Era Problems</Title>
        <Subtitle>
          From concept to creation, KronicLabz is dedicated to bring your idea, to reality. 
          From Blockchain security audits and development, to educational courses and project 
          creation and management, there's not much we can't help you do.
        </Subtitle>
      </Header>
    </Banner>
    <Section1>
      <Column>
        <Image src={blockchainImg} width='30.8vw' height='14.4vw' />
      </Column>
      <Column>
        <Heading>Our Mission</Heading>
        <Description>
          The Web3 space has given birth to a new era of digital technology 
          that is changing the way we think about and interact with the world.
          We are committed to providing the best possible service to our
          customers, and to the future of the Web3 space. KronicLabz is continuously
          pushing the boundaries of the blockchain and NFTs in particular as a tool 
          that can help shape our futures. We are a team of developers, designers,           
          engineers, mothers, and fathers, dedicated to the advancement of the Web3.
        </Description>
      </Column>
    </Section1>
    <Section2>
      <Column>
        <ItemHeading>44k</ItemHeading>
        <ItemDescription>NFTs Created</ItemDescription>
        <ItemHeading>4.5 M</ItemHeading>
        <ItemDescription>USD Equivalent</ItemDescription>
      </Column>
      <Column>
        <Heading>Our Acheivements</Heading>
        <Subheading>
          Aside from the creation of NFTs, we have mentored over
          250 creatives in the NFT space!
        </Subheading>
        <Image src={globeImg} width='30vw' height='30vw' />
      </Column>
      <Column>
        <ItemHeading>Over 135</ItemHeading>
        <ItemDescription>Security Audits Conducted</ItemDescription>
        <ItemHeading>985</ItemHeading>
        <ItemDescription>KronicKatz holders, and growing!</ItemDescription>
      </Column>
    </Section2>
  </HomeWrapper>

export default Home
