import { graphql, useStaticQuery } from "gatsby"

const useShowcasePhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      recordion: file(relativePath: { eq: "recordion.png" }) {
        childImageSharp {
          resize {
            src
          }
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      getwork: file(relativePath: { eq: "getwork.jpeg" }) {
        childImageSharp {
          resize {
            src
          }
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return Object.entries(data).reduce(
    (result, [key, value]) => ({ ...result, [key]: value.childImageSharp }),
    {}
  )
}

export default useShowcasePhotos
