import Api from "../../lib/Api";

export const getRelatedBlogs = async ({ tags, id }) => {
	let query_string =
		tags.length > 0
			? `tags=` + tags.join(",") + `&id=${id}`
			: `&id=${id}`;
	const response = await Api.get(`/blogs/bytag?${query_string}`);

	return response;
};
