import styled from "@emotion/styled"

const RainbowBorderedBox = styled("div")`
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgb(247, 255, 0);
  background: linear-gradient(
    144deg,
    ${props =>
      props.reversedGradient
        ? "rgba(219, 54, 164, 1) 15%, rgba(247, 255, 0, 1) 100%"
        : "rgba(247, 255, 0, 1) 15%, rgba(219, 54, 164, 1) 100%"}
  );
  padding: 0.1rem;
  border-radius: inherit;
`

export default RainbowBorderedBox
