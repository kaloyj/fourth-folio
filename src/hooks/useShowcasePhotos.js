import { graphql, useStaticQuery } from "gatsby"

const useShowcasePhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      recordion: file(relativePath: { eq: "recordion.png" }) {
        childImageSharp {
          resize {
            src
          }
          fluid(maxWidth: 1200, maxHeight: 628) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      getwork: file(relativePath: { eq: "getwork.jpeg" }) {
        childImageSharp {
          resize {
            src
          }
          fluid(maxWidth: 1200, maxHeight: 628) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nameIt: file(relativePath: { eq: "nameIt.png" }) {
        childImageSharp {
          resize {
            src
          }
          fluid(maxWidth: 1200, maxHeight: 628) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bant: file(relativePath: { eq: "bant.png" }) {
        childImageSharp {
          resize {
            src
          }
          fluid(maxWidth: 1200, maxHeight: 628) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ilista: file(relativePath: { eq: "ilista.png" }) {
        childImageSharp {
          resize {
            src
          }
          fluid(maxWidth: 1200, maxHeight: 628) {
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
