import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Details from "../components/BlogDetails/Details";
import RelatedBlogs from "../components/BlogDetails/RelatedBlogs";
import Loading from "../components/ui/Loading";
import { fetchBlog } from "../features/blog/blogSlice";

const BlogDetails = () => {
	const dispatch = useDispatch();
	const { blogID } = useParams();

	// blog details selector
	const { blog, loading, isError, error } = useSelector(
		(state) => state.blog
	);

	useEffect(() => {
		dispatch(fetchBlog(blogID));
	}, [dispatch, blogID]);

	// Blog Details UI deciding part
	let content;
	if (loading) content = <Loading />;
	if (!loading && isError)
		content = <div className="col-span-12">{error}</div>;

	if (!isError && !loading && !blog?.id > 0)
		content = <div className="col-span-12">No blog found</div>;

	if (!isError && !loading && blog?.id) {
		content = (
			<section class="post-page-container">
				<Details blog={blog} />
				<RelatedBlogs
					tags={blog?.tags}
					currentBlogId={blog?.id}
				/>
			</section>
		);
	}

	return (
		<div>
			{/*  Go Home / Go Back  */}
			<div class="container mt-8">
				<Link
					to="/"
					class="inline-block text-gray-600 home-btn"
					id="lws-goHome"
				>
					<i class="mr-2 fa-solid fa-house"></i>Go Home
				</Link>
			</div>
			{content}
		</div>
	);
};

export default BlogDetails;
