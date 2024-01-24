import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnProps = {
  color?: string;
  fontSize?: string;
  primary?: boolean;
  outlined?: boolean;
  btnType?: "primary" | "outlined";
  active?: boolean
}

export const StyledBtn = styled.button<StyledBtnProps>`
  border: none;
  color: azure;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;
  background-color: ${props => props.color || "#0015ff"};

  ${props => props.btnType === "primary" && css<StyledBtnProps>`
    border: none;
    background-color: ${props => props.color || "#0015ff"};
    color: snow;

    &:hover {
      background-color: grey;
    }
  `}

  ${props => props.btnType === "outlined" && css<StyledBtnProps>`
    border: 2px solid ${props => props.color || "#0015ff"};
    color: ${props => props.color || "#0015ff"};
    background-color: aliceblue;

    &:hover {
      background-color: transparent;
      color: greenyellow;
      border: 2px solid greenyellow;
    }
  `}

  ${props => props.active && css<StyledBtnProps>`
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  `}



`

export const SuperButton = styled(StyledBtn)`
  background-color: orangered;
  animation: ${MyAnimation} 2s ease-in-out;
`