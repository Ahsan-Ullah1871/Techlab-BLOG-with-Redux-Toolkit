import axiosIns from "../../utils/axios";

export const getBlogs = async ({ type, sort }) => {
	let sorting_value =
		sort !== "" ? (sort === "newest" ? "createdAt" : "likes") : "";

	let query_string = "";
	if (type === "Saved") {
		query_string += "isSaved=true";
	}
	if (sort !== "") {
		query_string += `&_sort=${sorting_value}&_order=desc`;
	}

	const response = await axiosIns.get(`/blogs/?${query_string}`);

	return response.data;
};
