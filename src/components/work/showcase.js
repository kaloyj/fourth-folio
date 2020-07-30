import React, { Fragment } from "react"
import { css } from "@emotion/core"
import useShowcasePhotos from "../../hooks/useShowcasePhotos"
import Placeholder from "./assets/photo-placeholder.svg"
import Img from "gatsby-image/withIEPolyfill"
import { COLOR_SCHEME } from "../layout"
import RainbowBorderedBox from "../UI/rainbow-bordered-box"

const Showcase = ({ work }) => {
  const showcasePhotos = useShowcasePhotos()
  const { title, imageRef, description, tech } = work
  const photo = imageRef ? showcasePhotos[imageRef] : null

  return (
    <div
      css={css`
        flex: 0 0 100%;
        display: flex;
        flex-flow: row wrap;
        color: white;
      `}
    >
      <h3
        css={css`
          font-size: 1.25rem;
        `}
      >
        {title}
      </h3>

      <div
        css={css`
          flex: 0 0 100%;
          margin-bottom: 0.75rem;
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

      <RainbowBorderedBox
        css={css`
          height: 200px;
          flex: 0 0 100%;
          overflow: hidden;

          @media only screen and (min-width: 768px) {
            height: 300px;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            background-color: ${COLOR_SCHEME.darkBlack};
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: center;
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
            <Placeholder
              width="32"
              height="32"
              css={css`
                z-index: 5;
              `}
            ></Placeholder>
          )}
        </div>
      </RainbowBorderedBox>

      <div
        css={css`
          margin: 1rem 0 1rem;
        `}
      >
        {description.map((paragraph, index) => (
          <p
            key={index}
            css={css`
              color: white;
              font-size: 0.85rem;
              margin-bottom: 1rem;

              .highlight-1 {
                color: ${COLOR_SCHEME.accent};
              }

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

export default Showcase
