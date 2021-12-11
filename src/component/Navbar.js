import React from 'react';
import styled from 'styled-components';
import Profile from '../images/sidehustle-account.png';
import Application from '../images/sidehustle-apps.png';
import { Link } from 'react-router-dom';

const Nav = styled.nav `
display: flex;
justify-content: space-between;
align-items: center;
`;
const Leftlinks = styled.div `
padding: 10px;
margin-left: 10px;
`;
const Rightlinks = styled.div `
padding: 10px;
margin-right: 10px;
display: flex;
align-items: center;
`;
const Navlinks = styled(Link) `
padding: 0 10px;
`;


const Navbar = () => {
  return (
    <Nav>
        <Leftlinks className='left'>
           <Navlinks to="/about">About</Navlinks>
           <Navlinks to="/store">Store</Navlinks>
        </Leftlinks>
        <Rightlinks>
           <Navlinks to="/about">Gmail</Navlinks>
           <Navlinks to="/store">Images</Navlinks>
           <Navlinks to="/application">
           <img src= {Application} alt="SideHustle Apps" />
           </Navlinks>
           <Link to='/profile'>
           <img src= {Profile} alt='SideHustle Account'/>
           </Link>
        </Rightlinks>
    </Nav>
    )
}

export default Navbar
