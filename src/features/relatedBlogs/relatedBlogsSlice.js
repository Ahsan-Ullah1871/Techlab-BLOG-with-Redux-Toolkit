import { getRelatedBlogs } from "./relatedBlogsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	relatedBlogs: [],
	loading: false,
	isError: false,
	error: "",
};

export const fetchRelatedBlogs = createAsyncThunk(
	"relatedBlogs/fetchRelatedBlogs",
	async ({ tags, id }) => {
		const blogs = await getRelatedBlogs({ tags, id });
		return blogs;
	}
);

const relatedBlogsSlice = createSlice({
	name: "relatedBlogs",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchRelatedBlogs.pending, (state) => {
			state.loading = true;
			state.error = "";
			state.isError = false;
		})
			.addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
				state.loading = false;
				state.relatedBlogs = action.payload;
			})
			.addCase(fetchRelatedBlogs.rejected, (state, action) => {
				state.loading = false;
				state.relatedBlogs = [];
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default relatedBlogsSlice.reducer;
