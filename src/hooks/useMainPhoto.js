import { graphql, useStaticQuery } from "gatsby"

const useMainPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "carlo-photo.jpeg" }) {
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

  return data.placeholderImage.childImageSharp
}

export default useMainPhoto
