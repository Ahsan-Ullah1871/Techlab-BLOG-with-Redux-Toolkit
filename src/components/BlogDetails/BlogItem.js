import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
	const { id, title, image, tags, createdAt } = blog;
	return (
		<div class="card">
			<Link to={`/blog/${id}`}>
				<img src={image} class="card-image" alt={title} />
			</Link>
			<div class="p-4">
				<Link
					to={`/blog/${id}`}
					class="text-lg post-title lws-RelatedPostTitle"
				>
					{title}
				</Link>
				<div class="mb-0 tags">
					{tags?.map((tag, index) => {
						return (
							<span>
								#{tag}
								{index !==
									tags.length -
										1 && ","}
							</span>
						);
					})}
				</div>
				<p>{createdAt}</p>
			</div>
		</div>
	);
};

export default BlogItem;
