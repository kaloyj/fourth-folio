import React from "react"
import styled from "@emotion/styled"
import { COLOR_SCHEME } from "../layout"

const RainbowBorderedCircle = styled("div")`
  margin: 0 0.5rem;
  height: 45px;
  width: 45px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgb(247, 255, 0);
  background: linear-gradient(
    144deg,
    rgba(247, 255, 0, 1) 15%,
    rgba(219, 54, 164, 1) 100%
  );
  padding: 0.1rem;

  @media only screen and (min-width: 375px) {
    height: 50px;
    width: 50px;
  }
`

const RainbowInnerCircle = styled("div")`
  height: 100%;
  width: 100%;
  background: ${COLOR_SCHEME.darkBlack};
  overflow: hidden;
  border-radius: inherit;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border: none;
`

const IconContainer = ({ children }) => {
  return (
    <RainbowBorderedCircle>
      <RainbowInnerCircle>{children}</RainbowInnerCircle>
    </RainbowBorderedCircle>
  )
}

export default IconContainer
