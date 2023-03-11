import axiosIns from "../../utils/axios";

export const getRelatedBlogs = async ({ tags, id }) => {
	let query_string =
		tags.length > 0
			? `tags_like=` + tags.join("&tags_like=") + `&id_ne=${id}`
			: `&id_ne=${id}`;
	const response = await axiosIns.get(`/blogs?${query_string}`);

	return response.data;
};
