import React from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"
import { COLOR_SCHEME } from "../layout"
import RainbowBorderedBox from "../UI/rainbow-bordered-box"

const FeatureItem = ({ feature: { label, href, external } }) => {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : "_self"}
      whileHover={{
        scale: 1.075,
      }}
      whileTap={{ scale: 0.95 }}
      css={css`
        flex: 0 0 40%;
        margin: 4%;
        position: relative;
        height: 100px;
        display: flex;
        flex-flow: row wrap;

        @media only screen and (min-width: 375px) {
          margin: 2%;
          height: 125px;
        }

        @media only screen and (min-width: 1024px) {
          height: 200px;
        }

        @media only screen and (min-width: 1200px) {
          height: 240px;
          flex: 0 0 28%;
          margin: 0 0 4% 4%;
        }
      `}
    >
      <RainbowBorderedBox
        css={css`
          height: 100%;
          width: 100%;
        `}
      >
        <div
          className="MainBox"
          css={css`
            flex: 0 0 100%;
            height: 100%;
            background: ${COLOR_SCHEME.darkBlack};
            z-index: 2;
            display: flex;
            flex-flow: row wrap;
            transition: background 0.25s ease;
            position: relative;
          `}
        >
          <h3
            css={css`
              font-size: 1rem;
              transition: color 0.25s ease;
              text-align: right;
              position: absolute;
              word-break: break-word;
              width: 84%;
              bottom: 8%;
              right: 8%;

              @media only screen and (min-width: 1024px) {
                font-size: 1.4rem;
              }
            `}
          >
            {label}
          </h3>
        </div>
      </RainbowBorderedBox>
    </motion.a>
  )
}

export default FeatureItem
