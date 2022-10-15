import axios from "../../utils/axios";

export const getVideos = async (tags, search, pageNumber, author) => {
    let limit = 8;
    let queryString = `_page=${pageNumber}&_limit=${limit}&`;

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    if(author !== "") {
        queryString += `&q=${author}`;
    }

    const response = await axios.get(`/videos/?${queryString}`);

    return response.data;
};
