import { getBlogs } from "./blogsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	blogs: [],
	loading: false,
	isError: false,
	error: "",
};

export const fetchBlogs = createAsyncThunk(
	"blogs/fetchBlogs",
	async ({ type, sort }) => {
		const blogs = await getBlogs({ type, sort });
		return blogs;
	}
);

const blogsSlice = createSlice({
	name: "blogs",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchBlogs.pending, (state) => {
			state.loading = true;
			state.error = "";
			state.isError = false;
		})
			.addCase(fetchBlogs.fulfilled, (state, action) => {
				state.loading = false;
				state.blogs = action.payload;
			})
			.addCase(fetchBlogs.rejected, (state, action) => {
				state.loading = false;
				state.blogs = [];
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default blogsSlice.reducer;
