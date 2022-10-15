import axios from "../../utils/axios";

export const updateLikeUnlikevideo = async (video,type) => {
    let data ;

    if(type === 'like') {
        data = {
            ...video , likes : video.likes + 1
        }
    } else if(type === 'unlike') {
        data = {
            ...video , unlikes : video.unlikes + 1
        }
    }
    debugger
    const response = await axios.put(`/videos/${video?.id}`, data);

    return response.data;
};