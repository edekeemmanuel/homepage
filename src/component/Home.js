import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import HomeLogo from '../images/SideHustle-logo.png';


const Container = styled.div `
  display: flex;
  flex-direction: column;
  `;

  const LogoSection = styled.div `
display: flex;
flex-direction: column;
align-items: center;
min-height: 100px;
height: calc(100% - 560px);

img{
  width: 250px;
  height: 90px;
  margin-top: auto;
}

  `;
  
  const SearchSection = styled.div `
padding: 20px;
display: flex;
justify-content: center;
flex-direction: column;
`;

  const Search = styled.div `
display: flex;
align-items: center;
padding: 0px 14px;
background: #fff;
border: 1px solid #dfe1e5;
box-shadow: none;
border-radius: 24px;
z-index: 3;
height: 45px;
margin: auto;
max-width: 590px;
  `;

  const SearchIcon = styled.div `
  color: #9aa0a6;
  height: 40px;
  width: 40px;
  padding-right: 10px;
  display: flex;
  align-items: center;

& svg {
  fill: #9aa8a6
}
  `;

  const Form = styled.div `


  `;
  
  const SearchInput = styled.input `
display: flex;
flex:1;
height: 40px;
background-color: transparent;
border: none;
margin:0;
padding: 0;
color: rgba(0,0,0 0.87);
word-wrap: break-word;
outline: none;
height: 35px;
font-size: 16px;

  `;

  
  const MicIcon = styled.div `
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 40px;
  line-height: 40px;
  height: 40px; 

  & svg {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }
  `;
  
  
  const ButtonSection = styled.div `
display: flex;
justify-content: center;
height: 70px;
padding-top: 18px;
top:53px;
z-index: 0;

button {
  background-color: #f8f9fa;
  border: 1px solid #f8f9a;
  border-radius: 10px;
  color: #3c4043;
  font-family: Roboto, arial, sans-serif;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  height: 36px;
  min-width:54px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

  `;

const Home = () => {
  const [text, setText] = useState("");
    return (
        <Container className='container'>
          <LogoSection className="logo">
          {text ? <h2>{text}</h2> : <img src= {HomeLogo} alt='SideHustle Logo'/>}
          </LogoSection> 
          <SearchSection >
            <Form action='/' method='GET' role='search'>
              <Search>
                <SearchIcon className='searchicon' >
                    <svg
                    focusable='false'
                    xmlns='http://ww.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    >
                    <path  d='M 15.5 14 h -0.79 l -0.28 -0.27 A 6.471 6.471 0 0 0 16 9.5 
                    A 6.5 6.5 0 1 0 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 
                    v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 
                    S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14z'/>
                    </svg>
                </SearchIcon>
                <SearchInput    
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
                <MicIcon >
                  <svg
                  focusable='false'
                    xmlns='http://ww.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                  <path
                  fill='#4285f4'
                  d="m 12 15 c 1.66 0 3 -1.31 3 -2.97 v -7.02 c 0 -1.66 -1.34 -3.01 -3 -3.01 
                  s -3 1.34 -3 3.01 v 7.02 c 0 1.66 1.34 2.97 3 2.97z"/>
                  <path
                  fill='#34a853' 
                  d='m11 18.08h2v3.92h-2z'/>
                  <path
                  fill='#fbbc05'
                  d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 
                  1.47 3.38v0.32l-1.15 1.18z'/>
                  <path
                  fill='#ca4335'
                  d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0
                  6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'/>
                  </svg>
                </MicIcon>
              </Search>
            </Form>
            <ButtonSection >
              <button >SideHustle Search</button>
              <button>I'm feeling good</button>
            </ButtonSection>
          </SearchSection>
          <div>
      <p className='paragraph'>
        Google offered in:
        <li>Hause</li>
        <li>Igbo</li>
        <li>Èdè Yorùbá</li>
        <li>Nigerian Pidgen</li>
      </p>
    </div>
        </Container>
    );
};

export default Home;
