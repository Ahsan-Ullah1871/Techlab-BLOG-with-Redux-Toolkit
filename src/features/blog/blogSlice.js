import { getBlog, patchBlog } from "./blogApi";
import { getblog } from "./blogApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	blog: {},
	loading: false,
	isError: false,
	error: "",
	updateLoading: false,
	isUpdateError: false,
	updateError: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
	const blog = await getBlog(id);
	return blog;
});

// This function for both like and save functionality
export const updateBlog = createAsyncThunk(
	"blog/updateBlog",
	async ({ id, data, key_name }) => {
		const blog = await patchBlog({ id, data });
		return { blog, key_name };
	}
);

const blogSlice = createSlice({
	name: "blog",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchBlog.pending, (state) => {
			state.loading = true;
			state.error = "";
			state.isError = false;
		})
			.addCase(fetchBlog.fulfilled, (state, action) => {
				state.loading = false;
				state.blog = action.payload;
			})
			.addCase(fetchBlog.rejected, (state, action) => {
				state.loading = false;
				state.blog = {};
				state.isError = true;
				state.error = action.error?.message;
			});

		// Update blog
		builder.addCase(updateBlog.pending, (state) => {
			state.updateLoading = true;
			state.updateError = "";
			state.isUpdateError = false;
		})
			.addCase(updateBlog.fulfilled, (state, action) => {
				state.updateLoading = false;
				state.blog[action.payload.key_name] =
					action.payload.blog[action.payload.key_name];
			})
			.addCase(updateBlog.rejected, (state, action) => {
				state.updateLoading = false;

				state.isUpdateError = true;
				state.updateError = action.error?.message;
			});
	},
});

export default blogSlice.reducer;
