import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { COLOR_SCHEME } from "../layout"

const FormLabel = styled("label")`
  font-size: 0.75rem;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 1.25rem;
`
const FormInput = styled("input")`
  flex: 0 0 100%;
  margin-top: 0.4rem;
  border: 1px solid white;
  background: none;
  padding: 10px 15px;
  color: white;
  font-family: Source Code Pro;
  font-size: 0.8rem;
`
const Contact = () => {
  return (
    <form
      css={css`
        width: 80%;
        background-color: ${COLOR_SCHEME.lightBlack};
        min-height: 50vh;
        border-radius: 10px;
        position: absolute;
        top: -60%;
        left: 50%;
        transform: translate(-50%);
        padding: 6%;
        color: white;
        font-family: Source Code Pro;

        -webkit-box-shadow: -12px 10px 26px 3px rgba(23, 25, 28, 1),
          -2px 2px 2px -2px rgba(23, 25, 28, 1);
        -moz-box-shadow: -12px 10px 26px 3px rgba(23, 25, 28, 1),
          -2px 2px 2px -2px rgba(23, 25, 28, 1);
        box-shadow: -12px 10px 26px -5px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);
      `}
    >
      <legend
        css={css`
          font-weight: 700;
          margin-bottom: 1.5rem;
        `}
      >
        Reach out via email.
      </legend>
      <FormLabel>
        Email
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Subject
        <FormInput></FormInput>
      </FormLabel>

      <FormLabel>
        Message
        <textarea
          css={css`
            flex: 0 0 100%;
            margin-top: 0.4rem;
            border: 1px solid white;
            background: none;
            padding: 10px 15px;
            color: white;
            font-family: Source Code Pro;
            font-size: 0.8rem;
            height: 20vh;
          `}
        ></textarea>
      </FormLabel>

      <button
        type="submit"
        css={css`
          font-size: 0.9rem;
          font-family: Source Code Pro;
          border: none;
          padding: 5%;
          color: white;
          background-color: ${COLOR_SCHEME.darkBlack};
        `}
      >
        Send
      </button>
    </form>
  )
}

export default Contact
