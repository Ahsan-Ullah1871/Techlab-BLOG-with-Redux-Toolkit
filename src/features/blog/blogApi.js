import axiosIns from "../../utils/axios";

export const getBlog = async (id) => {
	const response = await axiosIns.get(`/blogs/${id}`);

	return response.data;
};

export const patchBlog = async ({ id, data }) => {
	const response = await axiosIns.patch(`/blogs/${id}`, data);

	return response.data;
};
