import styled from "styled-components";
import COLORS from "../constants/colors";

export const ScreenWithCenterBlock = styled.section<{
    image?: string
}>`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${props => props.image ?? ""}");
`

export const RoundedBlock = styled.main<{
    color?: string
    border?: string
}>`
  background-color: ${props => props.color ?? COLORS.FORM_BLOCK};
  padding: 40px;
  border-radius: 40px;
  border: 5px solid ${props => props.border ?? COLORS.MAIN};
`
