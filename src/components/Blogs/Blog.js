import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog = {} }) => {
	const {
		id,
		title,
		description,
		image,
		tags,
		likes,
		isSaved,
		createdAt,
	} = blog;
	return (
		<div class="techlab-card">
			<Link to={`/blog/${id}`}>
				<img
					src={image}
					class="techlab-card-image"
					alt={title}
				/>
			</Link>
			<div class="p-4">
				<div class="techlab-card-header">
					<p class="techlab-publishedDate">
						{createdAt}
					</p>
					<p class="techlab-likeCount">
						<i class="fa-regular fa-thumbs-up"></i>
						{likes}
					</p>
				</div>
				<Link
					to={`/blog/${id}`}
					class="techlab-postTitle"
				>
					{title}
				</Link>
				<div class="techlab-tags">
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
				{isSaved && (
					<div class="flex gap-2 mt-4">
						<span class="techlab-badge">
							{" "}
							Saved{" "}
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Blog;
