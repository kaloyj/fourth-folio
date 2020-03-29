import React, { Fragment } from "react"
import { css } from "@emotion/core"
import Placeholder from "./assets/photo-placeholder.svg"
import Img from "gatsby-image/withIEPolyfill"

import { COLOR_SCHEME } from "../layout"
import useShowcasePhotos from "../../hooks/useShowcasePhotos"

const ShowcaseDetails = ({ selected }) => {
  const showcasePhotos = useShowcasePhotos()
  const { tech, title, description, imageRef } = selected
  const photo = imageRef ? showcasePhotos[imageRef] : ""
  return (
    <div
      css={css`
        flex: 0 0 100%;
        margin: 1rem 0 3rem;
        min-height: 60vh;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;

        -webkit-box-shadow: -12px 10px 26px 3px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);
        -moz-box-shadow: -12px 10px 26px 3px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);
        box-shadow: -12px 10px 26px -5px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);

        @media only screen and (min-width: 768px) {
          margin: 0 0 0 4%;
          flex: 0 0 76%;
        }
      `}
    >
      <div
        css={css`
          height: 200px;
          flex: 0 0 100%;
          background-color: ${COLOR_SCHEME.darkBlack};
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          border: none;

          @media only screen and (min-width: 768px) {
            height: 300px;
          }
        `}
      >
        {photo ? (
          <Img
            fluid={photo.fluid}
            objectFit="cover"
            css={css`
              height: 100%;
              width: 100%;
            `}
          ></Img>
        ) : (
          <Placeholder width="32" height="32"></Placeholder>
        )}

        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            background: rgb(2, 0, 36);
            background: linear-gradient(
              180deg,
              rgba(2, 0, 36, 0) 0%,
              rgba(35, 37, 40, 1) 100%
            );
          `}
        ></div>
      </div>

      <div
        css={css`
          flex: 0 0 100%;
          padding: 4%;
          display: flex;
          flex-flow: row wrap;
          height: auto;
        `}
      >
        <h2
          css={css`
            @media only screen and (min-width: 768px) {
              font-size: 2rem;
            }
          `}
        >
          {title}
        </h2>

        <div
          css={css`
            flex: 0 0 100%;
            margin: 0.3rem 0 1.2rem;
          `}
        >
          {tech.map((techItem, index) => (
            <Fragment key={techItem}>
              <span
                css={css`
                  color: white;
                  font-size: 0.75rem;

                  @media only screen and (min-width: 768px) {
                    font-size: 0.85rem;
                  }
                `}
              >
                {techItem}
              </span>

              {index !== tech.length - 1 && (
                <span
                  css={css`
                    height: 8px;
                    width: 8px;
                    border-radius: 50%;
                    background-color: ${COLOR_SCHEME.accent};
                    display: inline-block;
                    margin: 0 0.4rem;
                  `}
                ></span>
              )}
            </Fragment>
          ))}
        </div>

        {description.map((paragraph, index) => (
          <p
            key={index}
            css={css`
              color: white;
              font-size: 0.85rem;
              margin-bottom: 1rem;

              @media only screen and (min-width: 768px) {
                font-size: 1rem;
                margin-bottom: 1.25rem;
              }
            `}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ShowcaseDetails
