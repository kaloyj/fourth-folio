import React, { Fragment } from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"
import { motion } from "framer-motion"

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.125, staggerDirection: 1 },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: { opacity: 1, transition: { duration: 0.05 } },
}

const TerminalLines = ({ text }) => {
  const { showMarker = true, content } = text
  return (
    <div
      css={css`
        color: white;
        font-weight: 400;
        font-size: 0.7rem;
        display: flex;
        flex-flow: row wrap;
        width: 96%;
        margin: 1.5% 2%;

        @media only screen and (min-width: 768px) {
          font-size: 0.9rem;
        }
      `}
    >
      {showMarker && (
        <Fragment>
          <span
            css={css`
              color: ${COLOR_SCHEME.tilde};
              margin-right: 5px;
            `}
          >
            ~
          </span>
          <span
            css={css`
              color: ${COLOR_SCHEME.arrow};
              margin-right: 5px;
            `}
          >
            >
          </span>
        </Fragment>
      )}

      <motion.div
        css={css`
          display: flex;
          flex-flow: row wrap;
          flex: 1 0 auto;
        `}
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {content && Array.isArray(content)
          ? content.map(listItem => (
              <div
                key={listItem}
                css={css`
                  flex: 0 0 100%;
                  margin-bottom: 0.35rem;

                  @media only screen and (min-width: 768px) {
                    margin-bottom: 0.75rem;
                  }
                `}
              >
                <span
                  css={css`
                    margin-right: 0.75rem;
                    color: ${COLOR_SCHEME.arrow};
                  `}
                >
                  >
                </span>
                <span>{listItem}</span>
              </div>
            ))
          : Array.from(content).map((letter, index) => (
              <motion.span
                key={index}
                css={css`
                  white-space: pre;
                `}
                variants={itemVariants}
              >
                {letter}
              </motion.span>
            ))}
      </motion.div>
    </div>
  )
}

export default TerminalLines
