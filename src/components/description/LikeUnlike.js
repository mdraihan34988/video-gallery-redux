import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { updateVideoLikeUnlike } from "../../features/video/videoSlice";

export default function LikeUnlike({video={}}) {
    const { likes, unlikes } = video;
    const dispatch = useDispatch();

    const likeUnlikeHandler = (type) => {
        dispatch(updateVideoLikeUnlike({video,type}));
    }
    
    const  formatter = (num) => {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
   }

    return (
        <div className="flex gap-10 w-48 " >
            <div className="flex gap-1 cursor-pointer" onClick={() => likeUnlikeHandler('like')}>
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {likes? formatter(likes) : 0}
                </div>
            </div>
            <div className="flex gap-1 cursor-pointer" onClick={() => likeUnlikeHandler('unlike')}>
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes? formatter(unlikes) : 0}
                </div>
            </div>
        </div>
    );
}
