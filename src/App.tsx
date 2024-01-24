import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button";
import {Link} from "./components/Link";
import {Menu} from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href="">menu item 1</a></li>
          <li><a href="">menu item 2</a></li>
          <li><a href="">menu item 3</a></li>
        </ul>
      </Menu>
      <Box>
        <StyledBtn as={Link}>Styled link</StyledBtn>
        <StyledBtn as="a" href={"#"}>Hello</StyledBtn>
        <StyledBtn>Hello</StyledBtn>
        <StyledBtn color={"red"} fontSize={"20px"}>Hello</StyledBtn>
        <SuperButton>Super Button</SuperButton>
        <StyledBtn btnType={"outlined"} active>Outlined</StyledBtn>
        <StyledBtn btnType={"primary"}>Primary</StyledBtn>
      </Box>
    </div>
  );
}

const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
export default App;
