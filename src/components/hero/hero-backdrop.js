import React from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"
import { COLOR_SCHEME } from "../layout"

const WORDS = [
  "UI/UX",
  "a11y",
  "React",
  "JS",
  "TypeScript",
  "webpack",
  "Containers",
  "Emotion",
  "SQL",
  "GraphQL",
  "Jest",
  "Cypress",
]

// from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
// answer by gordon gustafson
// Math.random() returns double [0...1)
// we multiply to max - min so the range is between 0 and max-min
// we add 1 since we're using floor(), to reach max
// we add min so that it gets min -> max
const randomIntGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateRandomWords = () => {
  const WORDS_LIMIT = WORDS.length - 1
  let randomWords = []

  for (let i = 0; i < WORDS_LIMIT; i++)
    randomWords.push(WORDS[randomIntGenerator(0, WORDS_LIMIT)])

  return randomWords
}

const DROPLINE_COUNT = 5

const generateParentVariants = (delay = 0.4) => ({
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: delay,
    },
  },
})

const generateChildVariants = () => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 0.2,
    transition: { duration: 0.1, yoyo: Infinity, repeatDelay: 4 },
  },
})

const HeroBackground = () => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        display: flex;
        flex-flow: row wrap;
        overflow: hidden;
      `}
    >
      {Array.from(Array(DROPLINE_COUNT), (_, index) => {
        const wordGroup = generateRandomWords()
        return (
          <motion.div
            key={index}
            css={css`
              flex: 0 0 100%;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              margin-left: ${-5 + randomIntGenerator(0, 10)}rem;

              @media only screen and (min-width: 768px) {
                margin-bottom: 0.4rem;
              }
            `}
            variants={generateParentVariants()}
            initial="hidden"
            animate="show"
          >
            {wordGroup.map((word, ndx) => (
              <motion.span
                key={ndx}
                css={css`
                  display: inline-block;
                  color: ${COLOR_SCHEME.codeGreen};
                  margin-right: 1rem;

                  @media only screen and (min-width: 768px) {
                    font-size: 2rem;
                    margin-right: 1rem;
                  }

                  @media only screen and (min-width: 1024px) {
                    font-size: 2.5rem;
                    margin-right: 1.25rem;
                  }
                `}
                variants={generateParentVariants(
                  ndx + randomIntGenerator(1, 5)
                )}
              >
                {Array.from(word).map((letter, index) => (
                  <motion.span key={index} variants={generateChildVariants()}>
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.div>
        )
      })}
    </div>
  )
}

export default HeroBackground
