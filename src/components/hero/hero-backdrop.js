import React from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"

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
const randomIndexGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateRandomWords = () => {
  const WORDS_LIMIT = WORDS.length - 1
  let randomWords = []

  for (let i = 0; i < WORDS_LIMIT; i++)
    randomWords.push(WORDS[randomIndexGenerator(0, WORDS_LIMIT)])

  return randomWords
}

const DROPLINE_COUNT = 12

const parentVariants = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 0.2, transition: { duration: 0.1 } },
}
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
        align-content: flex-start;
        overflow: hidden;
      `}
    >
      {Array.from(Array(DROPLINE_COUNT), (_, index) => {
        const wordGroup = generateRandomWords()
        return (
          <motion.div
            key={index}
            css={css`
              flex: 1;
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              margin-left: -1rem;
              margin-bottom: 1.5rem;
            `}
            variants={parentVariants}
            initial="hidden"
            animate="show"
          >
            {wordGroup.map((word, ndx) => (
              <motion.span
                key={ndx}
                css={css`
                  display: inline-block;
                  color: white;
                  margin-right: 0.5rem;
                `}
                variants={parentVariants}
              >
                {Array.from(word).map((letter, index) => (
                  <motion.span key={index} variants={childVariants}>
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
