import React from "react"
import { Link } from "gatsby";

export default function TableOfContents(props) {
	return (
		<div>
			{props.items.map(item => (
				<h5 key={item.title}>
					<Link to={item.url}>{item.title.toUpperCase()}</Link>
				</h5>
			))}
		</div>
	);
}