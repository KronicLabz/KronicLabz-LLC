import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const logoImg = require('../media/logo.png')

const MenuWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 3vh 10vw 3vh 10vw;
  font-size: 0.9rem;
`

const MenuLeft = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  height: 10vh;
  float: left;
`

const MenuRight = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1vw;
  height: 10vh;
  float: right;
`

const MenuItem = styled.div`
  margin-left: -1px;
  margin-right: -1px;
  padding-left: -2px;
  align-self: center;
  justify-self: left;
`

const Logo = styled.img`
  padding-bottom: 1vh;
  padding-top: -50vh;
  margin-top: -6vh;
  margin-left: -10vw;
  width: 50.8vh;
  height: 24.0vh;
  &:hover { color: #FFF; }
`

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #a4adb6;
  &:hover { color: #FFF; }
`

const Menu = () =>
  <MenuWrapper>
    <MenuLeft>
      <MenuItem>
        <MenuLink to='/'><Logo alt='company logo' src={logoImg} /></MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/'><p><br /><br /><br /></p></MenuLink>
      </MenuItem>
    </MenuLeft>
    <MenuRight>
      <MenuItem>
        <MenuLink to='/services'><p>Services</p></MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/team'><p>Team</p></MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/roadmap'><p>Projects</p></MenuLink>
      </MenuItem>
    </MenuRight>
  </MenuWrapper>

export default Menu