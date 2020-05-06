/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div style={paddingStyles}></div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={contentStyles}>{children}</main>
    </div>
  )
}

const paddingStyles ={
  height: '80px'
}

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  margin: `auto`,
  maxWidth: '700px',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
