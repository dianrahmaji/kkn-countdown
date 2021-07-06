import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaHeart, FaReact } from 'react-icons/fa';

const StyledFooter = styled.footer`
  bottom: 0;
  p {
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    margin: 0;
    font-weight: 300;
    font-size: 12px;
    @media only screen and (min-width: 1080px) {
      font-size: 16px;
    }
  }
  a {
    color: black;
    margin: 0 6px;
    @media only screen and (min-width: 1080px) {
      font-size: 16px;
      margin: 0 10px
    }
  }
`;

const Footer = () => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: '', margin: '0 6px' } }}>
      <StyledFooter>
        <p>
          Made with
          <FaHeart color="#E53935" size="14" />
          and
          <FaReact color="#05DBF2" size="14" />
          by
          <a target="_blank" rel="noopener noreferrer" href="https://dianrahmaji.github.io/">Me</a>
        </p>
      </StyledFooter>
    </IconContext.Provider>
  );
}

export default Footer;
