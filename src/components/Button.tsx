import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #0015ff;
  color: azure;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: grey;
  }

  &:last-child {
    background-color: #1feec2;
  }
`

export const SuperButton = styled(StyledBtn)`
  background-color: orangered;
  animation: ${MyAnimation} 2s ease-in-out;
`