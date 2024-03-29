import React, { Fragment } from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image/withIEPolyfill"
import useShowcasePhotos from "../../hooks/useShowcasePhotos"
import Placeholder from "./assets/photo-placeholder.svg"
import { COLOR_SCHEME } from "../layout"
import RainbowBorderedBox from "../UI/rainbow-bordered-box"

const Showcase = ({ work, isReversed }) => {
  const showcasePhotos = useShowcasePhotos()
  const { title, imageRef, description, tech } = work
  const photo = imageRef ? showcasePhotos[imageRef] : null

  return (
    <div
      css={css`
        flex: 0 0 100%;
        display: flex;
        flex-flow: row wrap;
        color: ${COLOR_SCHEME.white};

        @media only screen and (min-width: 1024px) {
          flex-flow: column wrap;
          justify-content: center;
          margin-bottom: 2rem;
          min-height: 500px;
        }
      `}
    >
      <div
        css={css`
          flex: 0 0 100%;

          @media only screen and (min-width: 1024px) {
            flex: 0 0 10%;
            width: 45%;
            margin: ${isReversed ? "0 0 0 5%" : "0 5% 0 0"};
            order: ${isReversed ? 2 : 1};
          }
        `}
      >
        <h3
          css={css`
            font-size: 1.25rem;

            @media only screen and (min-width: 1024px) {
              font-size: 1.75rem;
              text-align: ${isReversed ? "left" : "right"};
            }
          `}
        >
          {title}
        </h3>

        <div
          css={css`
            flex: 0 0 100%;
            margin-bottom: 0.75rem;

            @media only screen and (min-width: 1024px) {
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              justify-content: ${isReversed ? "flex-start" : "flex-end"};
            }
          `}
        >
          {tech.map((techItem, index) => (
            <Fragment key={techItem}>
              <span
                css={css`
                  color: ${COLOR_SCHEME.white};
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
      </div>
      {photo ? (
        <div
          css={css`
            height: 200px;
            flex: 0 0 100%;
            overflow: hidden;
            overflow: hidden;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: center;
            border: none;
            position: relative;

            @media only screen and (min-width: 768px) {
              height: 300px;
            }

            @media only screen and (min-width: 1024px) {
              order: ${isReversed ? 1 : 3};
              flex: 0 0 95%;
              width: 50%;
              height: 500px;
            }
          `}
        >
          <div
            css={css`
                  height: 100%;
                  width: 100%;
                  background-image: url("${photo.resize.src}");
                  filter: blur(5px);
                  -webkit-filter: blur(5px);
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                  z-index: 1;

                  @media only screen and (min-width: 768px) {
                    filter: blur(20px);
                    -webkit-filter: blur(20px);
                  }
                `}
          ></div>
          <div
            css={css`
              height: 100%;
              width: 100%;
              position: absolute;
              padding: 4%;
              top: 0;
              left: 0;

              @media only screen and (min-width: 768px) {
                padding: 2%;
              }
            `}
          >
            <Img
              fluid={photo.fluid}
              objectFit="contain"
              css={css`
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                z-index: 5;
                padding: 0 2rem;
              `}
            ></Img>
          </div>
        </div>
      ) : (
        <RainbowBorderedBox
          css={css`
            height: 200px;
            flex: 0 0 100%;
            overflow: hidden;

            @media only screen and (min-width: 768px) {
              height: 300px;
            }

            @media only screen and (min-width: 1024px) {
              order: ${isReversed ? 1 : 3};
              flex: 0 0 95%;
              width: 50%;
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
              position: relative;
            `}
          >
            <Placeholder
              width="32"
              height="32"
              css={css`
                z-index: 5;
              `}
            ></Placeholder>
          </div>
        </RainbowBorderedBox>
      )}

      <div
        css={css`
          margin: 1rem 0 1rem;

          @media only screen and (min-width: 1024px) {
            order: 2;
            flex: 0 0 40%;
            width: 45%;
            margin: ${isReversed ? "0 0 0 5%" : "0 5% 0 0"};

            p {
              text-align: ${isReversed ? "left" : "right"};
            }
          }
        `}
      >
        {description.map((paragraph, index) => (
          <p
            key={index}
            css={css`
              color: ${COLOR_SCHEME.white};
              font-size: 0.85rem;
              margin-bottom: 1rem;

              a {
                color: ${COLOR_SCHEME.purplePink};
              }

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
