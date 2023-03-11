import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sorting, typeSelected } from "../../features/filter/filterSlice";

const Filter = () => {
	const dispatch = useDispatch();

	// Blogs selector
	const { type, sort } = useSelector((state) => state.filter);

	// Sorting function
	const handleSort = (value) => {
		dispatch(sorting(value));
	};

	// Filter Function
	const handleFilter = (value) => {
		dispatch(typeSelected(value));
	};
	return (
		<aside>
			<div class="sidebar-items">
				<div class="sidebar-content">
					<h4>Sort</h4>
					<select
						name="sort"
						id="lws-sort"
						class="w-full max-w-[150px] border-2 rounded-md text-gray-500"
						onChange={(e) =>
							handleSort(e.target.value)
						}
					>
						<option
							value=""
							selected={
								sort == ""
									? true
									: false
							}
						>
							Default
						</option>
						<option
							value="newest"
							selected={
								sort == "newest"
									? true
									: false
							}
						>
							Newest
						</option>
						<option
							value="most_liked"
							selected={
								sort == "most_liked"
									? true
									: false
							}
						>
							Most Liked
						</option>
					</select>
				</div>
				<div class="sidebar-content">
					<h4>Filter</h4>
					<div class="radio-group">
						<div>
							<input
								type="radio"
								name="filter"
								id="lws-all"
								checked={
									type == "All"
										? true
										: false
								}
								class="radio"
								onClick={() =>
									handleFilter(
										"All"
									)
								}
							/>
							<label for="lws-all">
								All
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="filter"
								id="lws-saved"
								class="radio"
								checked={
									type == "Saved"
										? true
										: false
								}
								onClick={() =>
									handleFilter(
										"Saved"
									)
								}
							/>
							<label for="lws-saved">
								Saved
							</label>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Filter;
