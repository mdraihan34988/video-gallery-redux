import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/videos/videosSlice";
import paginationReducer from "../features/pagination/paginationSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer,
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
        filter: filterReducer,
        pagination: paginationReducer
    },
});
