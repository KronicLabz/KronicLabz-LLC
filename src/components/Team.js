import React from 'react'
import styled from 'styled-components'

const portrait1 = require('../media/portrait1.jpg')
const portrait2 = require('../media/portrait2.jpg')
const portrait3 = require('../media/portrait3.jpg')
const portrait4 = require('../media/portrait4.jpg')
const portrait5 = require('../media/portrait5.jpg')
const portrait6 = require('../media/portrait6.jpg')

const TeamWrapper = styled.div`
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
  padding: 5vh 15vw 5vh 15vw;
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
  border-radius: 50%;
  border: 3px solid #558AF2;
  width: 175px;
`

const Name = styled.h4`
  margin: 10px 0 5px 0;
  padding: 0;
  color: #2e3b4c;
`

const Role = styled.p`
  margin: 5px 0 25px 0;
  padding: 0;
  color: #a0a4ad;
`

const data = [
  { name: 'Dustin "Kronic" Turska', role: 'Founder and CEO', img: portrait1 },
  { name: 'Lance', role: 'Chief Financial Officer', img: portrait4 },
  { name: 'Penny', role: 'Chief Communications Officer', img: portrait6 },
  { name: 'Aiden', role: 'Chief Technology Officer', img: portrait3 },
  { name: 'Tetsuo', role: 'Web Developer / Audio Solutions', img: portrait2 },
  { name: 'Jack "Rxbbn" Prosser', role: 'Full Stake Developer', img: portrait5 }

]

const Team = () =>
  <TeamWrapper>
    <Header>
      <center>
        <h1>Who is KronicLabz?</h1>
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
  </TeamWrapper>

export default Team
