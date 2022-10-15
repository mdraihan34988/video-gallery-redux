import { getnumberOfVideosAPI } from "./numberOfVideosAPI";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    pageNumber : 1,
    numberOfPages : 0,
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchNumberOfVideos = createAsyncThunk(
    "pagination/fetchNumberOfVideos",
    async ({ tags, search, author }) => {
        const videos = await getnumberOfVideosAPI(tags, search, author);
        return videos;
    }
);

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        pagenumberChange: (state, action) => {
            state.pageNumber = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNumberOfVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchNumberOfVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.pageNumber = 1;
                state.numberOfPages = Math.ceil(action.payload.length/8);
            })
            .addCase(fetchNumberOfVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default paginationSlice.reducer;
export const { pagenumberChange } = paginationSlice.actions;
