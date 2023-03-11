const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	type: "All",
	sort: "",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		typeSelected: (state, action) => {
			state.type = action.payload;
		},
		sorting: (state, action) => {
			state.sort = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { sorting, typeSelected } = filterSlice.actions;
