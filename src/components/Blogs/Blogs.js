import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../ui/Loading";
import Blog from "./Blog";

const Blogs = () => {
	const dispatch = useDispatch();

	// Blogs selector
	const { blogs, loading, isError, error } = useSelector(
		(state) => state.blogs
	);

	// Filter Selector
	const { type, sort } = useSelector((state) => state.filter);

	useEffect(() => {
		dispatch(fetchBlogs({ type, sort }));
	}, [dispatch, sort, type]);

	//decide what will render
	let content;
	if (loading) content = <Loading />;
	if (!loading && isError)
		content = <div className="col-span-12">{error}</div>;

	if (!isError && !loading && !blogs?.length > 0)
		content = <div className="col-span-12">No blogs found</div>;

	if (!isError && !loading && blogs?.length > 0) {
		content = blogs.map((item) => <Blog key={item.id} blog={item} />);
	}

	return (
		<main class="post-container" id="lws-postContainer">
			{content}
		</main>
	);
};

export default Blogs;
