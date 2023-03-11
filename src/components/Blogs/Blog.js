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
		<div class="lws-card">
			<Link to={`/blog/${id}`}>
				<img
					src={image}
					class="lws-card-image"
					alt={title}
				/>
			</Link>
			<div class="p-4">
				<div class="lws-card-header">
					<p class="lws-publishedDate">{createdAt}</p>
					<p class="lws-likeCount">
						<i class="fa-regular fa-thumbs-up"></i>
						{likes}
					</p>
				</div>
				<Link to={`/blog/${id}`} class="lws-postTitle">
					{title}
				</Link>
				<div class="lws-tags">
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
						<span class="lws-badge"> Saved </span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Blog;
