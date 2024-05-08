import React from "react";
import { useDispatch } from "react-redux";
import { updateBlog } from "../../features/blog/blogSlice";

const Details = ({ blog = {} }) => {
	const dispatch = useDispatch();

	// blog data Destructure
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

	// handleSave
	const handleSave = () => {
		dispatch(
			updateBlog({
				id,
				data: { isSaved: !isSaved },
				key_name: "isSaved",
			})
		);
	};

	// handleSave
	const handleLike = () => {
		dispatch(
			updateBlog({
				id,
				data: { likes: likes + 1 },
				key_name: "likes",
			})
		);
	};

	return (
		<main class="post">
			<img
				src={image}
				alt={title}
				class="w-full rounded-md"
				id="techlab-megaThumb"
			/>
			<div>
				<h1
					class="mt-6 text-2xl post-title"
					id="techlab-singleTitle"
				>
					{title}
				</h1>
				<div
					class="tags"
					id="techlab-singleTags"
				>
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
				<div class="btn-group">
					{/* handle like on button click */}
					<button
						class="like-btn"
						id="techlab-singleLinks"
						onClick={handleLike}
					>
						<i class="fa-regular fa-thumbs-up"></i>{" "}
						{likes}
					</button>

					<button
						class={`save-btn ${
							isSaved && "active"
						}`}
						id="techlab-singleSavedBtn"
						onClick={handleSave}
					>
						<i class="fa-regular fa-bookmark"></i>{" "}
						{isSaved ? "Saved" : "Save"}
					</button>
				</div>
				<div class="mt-6">
					<p>{description}</p>
				</div>
			</div>
		</main>
	);
};

export default Details;
