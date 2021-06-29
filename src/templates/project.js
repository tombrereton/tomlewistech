import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby";
import Layout from '../components/Layout'
import TableOfContents from '../components/ToC/ToC'
import * as styles from './templates.module.scss'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { data } from "vfile";



export default function ProjectTemplate({ data: { mdx } }) {
	const image = getImage(mdx.frontmatter.featuredImage)
	return (
		<Layout>
			<div className={styles.page}>

				<h3 className={styles.heading}>{mdx.frontmatter.title}</h3>

				<GatsbyImage image={image} alt={mdx.frontmatter.title} />

				<h5>Author: {mdx.frontmatter.author}</h5>
				<h5>Date Published: {mdx.frontmatter.datePublished}</h5>
				<h5>Date Modified: {mdx.frontmatter.dateModified}</h5>

				<h3>Table of Contents</h3>
				<TableOfContents items={mdx.tableOfContents.items} />

				<MDXProvider>
					<MDXRenderer localImages={mdx.frontmatter.embeddedImages}>{mdx.body}</MDXRenderer>
				</MDXProvider>
			</div>
		</Layout>
	)
}

export const query = graphql`
query ProjectQuery($id: String) {
    mdx(id: {eq: $id}) {
			id
			frontmatter {
				title
				slug
				author
				datePublished(formatString: "DD MMMM YYYY")
				dateModified(formatString: "DD MMMM YYYY")
				featuredImage {
					childImageSharp {
						gatsbyImageData(
							placeholder: BLURRED
							width: 500
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
				embeddedImages {
					childImageSharp {
						gatsbyImageData(
							placeholder: BLURRED
							width: 500
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
			}
			tableOfContents
			body
    }
  }
`
