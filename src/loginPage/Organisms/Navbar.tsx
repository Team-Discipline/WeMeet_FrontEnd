import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  background-color: #f8f8f8;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

const NavLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 16px;
  color: #333;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Sign = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
  margin-right: 15px;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLinksContainer>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <Sign>
          <NavLinkStyled to="/signin">SignIn</NavLinkStyled>
          <NavLinkStyled to="/signup">SignUp</NavLinkStyled>
        </Sign>
      </NavLinksContainer>
    </NavContainer>
  );
};

export default Navbar;
