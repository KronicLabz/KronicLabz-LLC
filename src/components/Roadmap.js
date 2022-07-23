import React from 'react'
import styled from 'styled-components'

const portrait07 = require('../media/portrait07.jpg')
const portrait08 = require('../media/portrait08.jpg')
const portrait09 = require('../media/portrait09.jpg')
const portrait010 = require('../media/portrait010.jpg')
const portrait011 = require('../media/portrait011.jpg')
const portrait012 = require('../media/portrait012.jpg')

const RoadmapWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: #404550;
`

const Header = styled.div`
  padding: 2vh 2vw 2vh 2vw;
  color: #FFF;
  background: linear-gradient(to bottom right, #2b3548, #0d1222);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 0;
  padding: 15vh 5vw 15vh 5vw;
  background: #202124;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Portrait = styled.img`
  border-radius: 0%;
  border: 3px solid #558AF2;
  width: 220px;
`

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`

const Name = styled.h4`
  margin: 10px 0 5px 0;
  padding: 0;
  color: White;
`

const Role = styled.p`
  margin: 2px 0 2px 0;
  padding: 2px 0 2px 0;
  color: #a0a4ad;
`

const data = [
  { name: 'The Offical KronicKatz', role:  '', img: portrait07 },
  { name: 'CryptoDoodez', role: '', img: portrait08 },
  { name: 'Manic Mouse Millions', role: '', img: portrait09 },
  { name: 'Kronic Mutant Katz', role: '', img: portrait010 },
  { name: 'Rise of the Kronic Phoenix', role: '', img: portrait011 },
  { name: 'PixelDoodez', role: '', img: portrait012 }
]

const Roadmap = () =>
  <RoadmapWrapper>
    <Header>
      <center>
        <h1>Projects</h1>
      </center>
    </Header>
    <Grid>
      {
        data.map((item, key) =>
          <Column key={key}>
            <Portrait src={item.img} />
            <Name>{item.name}</Name>
            <Role>{item.role}</Role>
          </Column>
        )
      }
    </Grid>
  </RoadmapWrapper>

export default Roadmap
