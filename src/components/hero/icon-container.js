import React from "react"
import styled from "@emotion/styled"
import { COLOR_SCHEME } from "../layout"

const RainbowBorderedCircle = styled("a")`
  margin: 0 0.5rem;
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: rgb(247, 255, 0);
  background: linear-gradient(
    144deg,
    rgba(247, 255, 0, 1) 15%,
    rgba(219, 54, 164, 1) 100%
  );
  padding: 0.1rem;

  @media only screen and (min-width: 768px) {
    margin: 0.5rem;
  }

  @media only screen and (min-width: 1024px) {
    height: 60px;
    width: 60px;
  }

  @media only screen and (min-width: 1200px) {
    height: 55px;
    width: 55px;
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
`

const IconContainer = ({ children, ...props }) => {
  return (
    <RainbowBorderedCircle {...props}>
      <RainbowInnerCircle>{children}</RainbowInnerCircle>
    </RainbowBorderedCircle>
  )
}

export default IconContainer
