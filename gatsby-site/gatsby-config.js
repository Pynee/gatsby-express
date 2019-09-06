const dotenv = require("dotenv")
dotenv.config()

module.exports = {
	siteMetadata: {
		title: `Gatsby With Express`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
		{
			resolve: "gatsby-source-graphql",
			options: {
				typeName: "Movie",
				fieldName: "movie",
				url: "http://localhost:4000/graphql",
				headers: {
					username: process.env.User_Name,
					password: process.env.Password,
				},
			},
		},
	],
}
