const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// Query for markdown nodes to use in creating pages.
	const result = await graphql(
		`
		{
			allMdx(limit: 1000) {
				edges {
					node {
						id
						frontmatter {
							slug
						}
					}
				}
			}
		}
    `
	)

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}
	// create blog post pages
	const projects = result.data.allMdx.edges

	// Create pages for each markdown file.
	projects.forEach(({ node }, index) => {
		createPage({
			path: `projects/${node.frontmatter.slug}`,
			component: path.resolve(`./src/templates/project.js`),
			// you can use the values in this context in
			// our page layout component
			context: { id: node.id },
		})
	})
}