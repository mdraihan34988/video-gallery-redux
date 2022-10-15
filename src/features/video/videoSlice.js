import { updateLikeUnlikevideo } from "./updateLikeUnlikevideoAPI";
import { getVideo } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video;
});

export const updateVideoLikeUnlike = createAsyncThunk("video/updateVideoLikeUnlike", async (payload) => {
    const { video ,type } = payload;
    const updatedvideo = await updateLikeUnlikevideo(video,type);
    return updatedvideo;
});

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(updateVideoLikeUnlike.fulfilled, (state, action) => {
                state.video.likes = action.payload.likes;
                state.video.unlikes = action.payload.unlikes;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default videoSlice.reducer;
