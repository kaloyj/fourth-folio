import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { COLOR_SCHEME } from "../layout"

const FormLabel = styled("label")`
  font-size: 0.75rem;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 0.85rem;
  }
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

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 0.85rem;
  }
`

const Contact = () => {
  return (
    <form
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="emails-from-contact"
      css={css`
        position: relative;
        flex: 0 0 92%;
        background-color: ${COLOR_SCHEME.darkBlack};
        border: 1px solid white;
        border-radius: 10px;
        padding: 4%;
        color: white;
        margin: 1.5rem 4%;

        @media only screen and (min-width: 768px) {
          margin: 3rem 0;
          flex: 0 0 40%;
        }

        @media only screen and (min-width: 1024px) {
          flex: 0 0 35%;
          padding: 2%;
        }
      `}
    >
      <legend
        css={css`
          font-weight: 700;
          margin-bottom: 1rem;

          @media only screen and (min-width: 768px) {
            font-size: 1.25rem;
          }
        `}
      >
        Send me a message.
      </legend>
      <input type="hidden" name="form-name" value="emails-from-contact" />
      <FormLabel>
        Email
        <FormInput name="email"></FormInput>
      </FormLabel>
      <FormLabel>
        Message
        <textarea
          name="message"
          css={css`
            flex: 0 0 100%;
            margin-top: 0.4rem;
            border: 1px solid white;
            background: none;
            padding: 10px 15px;
            color: white;
            font-family: Source Code Pro;
            font-size: 0.8rem;
            height: 150px;

            @media only screen and (min-width: 768px) {
              font-size: 1rem;
            }

            @media only screen and (min-width: 1200px) {
              font-size: 0.85rem;
            }
          `}
        ></textarea>
      </FormLabel>

      <button
        type="submit"
        css={css`
          font-size: 0.9rem;
          font-family: Source Code Pro;
          border: 1px solid white;
          padding: 5%;
          color: white;
          background-color: ${COLOR_SCHEME.darkBlack};

          @media only screen and (min-width: 768px) {
            font-size: 1.15rem;
          }

          @media only screen and (min-width: 1200px) {
            font-size: 0.9rem;
          }
        `}
      >
        Send
      </button>
    </form>
  )
}

export default Contact
