// src/components/Navbar.js

import styled from 'styled-components';

const NavContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div``;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #555;
  color: white;
  cursor: pointer;
`;

const Navbar = ({ onGetUsers }) => {
  return (
    <NavContainer>
      <Brand>LGMVIP</Brand>
      <Button onClick={onGetUsers}>Get Users</Button>
    </NavContainer>
  );
};

export default Navbar;
