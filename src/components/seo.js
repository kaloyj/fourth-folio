import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import useMetadata from "../hooks/useMetadata"
import useMainPhoto from "../hooks/useMainPhoto"

const MAIN_URL = "https://carlojanea.com"
function SEO({ meta, lang }) {
  const { title, description, author, imageAlt } = useMetadata()
  const {
    resize: { src: mainPhoto },
  } = useMainPhoto()
  const metaAlt = imageAlt || "Carlo Janea smiling with trees on the background"

  console.log({ mainPhoto })
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: `${MAIN_URL}${mainPhoto}`,
        },
        {
          name: `twitter:image`,
          content: `${MAIN_URL}${mainPhoto}`,
        },
        {
          name: `twitter:image:alt`,
          content: metaAlt,
        },
        {
          property: `og:image:width`,
          content: `300`,
        },
        {
          property: `og:image:height`,
          content: `300`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
