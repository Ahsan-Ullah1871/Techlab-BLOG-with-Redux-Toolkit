import Api from "../../lib/Api";

export const getBlog = async (id) => {
	const response = await Api.get(`/blogs/${id}`);
	console.log(response);
	return response;
};

export const patchBlog = async ({ id, data }) => {
	const response = await Api.patch(`/blogs/${id}`, data);
	return response;
};
