import { useStaticQuery, graphql } from "gatsby"

export default function useMetadata() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}
