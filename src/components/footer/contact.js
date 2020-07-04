import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { COLOR_SCHEME } from "../layout"

const FormLabel = styled("label")`
  font-size: 0.75rem;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 1.25rem;

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

const AbosluteBlock = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: ${COLOR_SCHEME.darkBlack};
  z-index: 2;

  @media only screen and (min-width: 1024px) {
    height: 35%;
  }
`
const Contact = () => {
  return (
    <div
      css={css`
        width: 100%;
        position: relative;
        height: 100%;
        display: flex;
        flex-flow: row wrap;

        @media only screen and (min-width: 768px) {
          justify-content: flex-end;
        }
      `}
    >
      <AbosluteBlock />
      <form
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="emails-from-contact"
        css={css`
          position: relative;
          width: 92%;
          height: 90%;
          background-color: ${COLOR_SCHEME.lightBlack};
          border-radius: 10px;
          padding: 6%;
          color: white;
          margin: 0 4%;
          z-index: 5;

          -webkit-box-shadow: -12px 10px 26px 3px rgba(23, 25, 28, 1),
            -2px 2px 2px -2px rgba(23, 25, 28, 1);
          -moz-box-shadow: -12px 10px 26px 3px rgba(23, 25, 28, 1),
            -2px 2px 2px -2px rgba(23, 25, 28, 1);
          box-shadow: -12px 10px 26px -5px rgba(16, 17, 18, 1),
            -2px 2px 2px -2px rgba(16, 17, 18, 1);

          @media only screen and (min-width: 768px) {
            width: 60%;
          }

          @media only screen and (min-width: 1024px) {
            height: 85%;
          }

          @media only screen and (min-width: 1200px) {
            width: 30%;
            padding: 3%;
            margin: 0 14%;
            height: 80%;
          }

          @media only screen and (min-width: 1920px) {
            width: 25%;
            margin: 0 22%;
          }
        `}
      >
        <legend
          css={css`
            font-weight: 700;
            margin-bottom: 1.5rem;

            @media only screen and (min-width: 768px) {
              font-size: 1.75rem;
            }

            @media only screen and (min-width: 1024px) {
              font-size: 1.25rem;
            }
          `}
        >
          Reach out via email.
        </legend>
        <input type="hidden" name="form-name" value="emails-from-contact" />
        <FormLabel>
          Email
          <FormInput name="email"></FormInput>
        </FormLabel>
        <FormLabel>
          Subject
          <FormInput name="subject"></FormInput>
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
              height: 20vh;

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
            border: none;
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
    </div>
  )
}

export default Contact
