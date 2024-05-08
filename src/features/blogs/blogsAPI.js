import Api from "../../lib/Api";

export const getBlogs = async ({ type, sort }) => {
	let sorting_value =
		sort !== "" ? (sort === "newest" ? "createdAt" : "likes") : "";

	let query_string = "";
	if (type === "Saved") {
		query_string += "isSaved=true";
	}
	if (sort !== "") {
		query_string += `&sort=${sorting_value}&order=desc`;
	}

	const response = await Api.get(`/blogs?${query_string}`);

	return response;
};
