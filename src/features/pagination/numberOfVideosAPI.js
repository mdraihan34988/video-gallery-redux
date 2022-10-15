import axios from "../../utils/axios";

export const getnumberOfVideosAPI = async (tags, search, author) => {
    let queryString = ``;

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
