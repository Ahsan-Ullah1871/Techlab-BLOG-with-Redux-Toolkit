import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../ui/Loading";
import BlogItem from "./BlogItem";

const RelatedBlogs = ({ tags, currentBlogId }) => {
	const dispatch = useDispatch();

	//related blogs selector
	const { relatedBlogs, loading, isError, error } = useSelector(
		(state) => state.relatedBlogs
	);

	useEffect(() => {
		dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
	}, [currentBlogId, dispatch, tags]);

	// Related blogs UI decide
	let content;
	if (loading) content = <Loading />;
	if (!loading && isError)
		content = <div className="col-span-12">{error}</div>;

	if (!isError && !loading && relatedBlogs?.length === 0)
		content = (
			<div className="col-span-12">No related blogs found</div>
		);

	if (!isError && !loading && relatedBlogs?.length > 0) {
		content = relatedBlogs.map((item) => {
			return (
				<BlogItem
					key={item.id}
					blog={item}
				/>
			);
		});
	}

	return (
		relatedBlogs?.length > 0 && (
			<aside>
				<h4
					class="mb-4 text-xl font-medium"
					id="techlab-relatedPosts"
				>
					Related Posts
				</h4>
				<div class="space-y-4 related-post-container">
					{content}
				</div>
			</aside>
		)
	);
};

export default RelatedBlogs;
