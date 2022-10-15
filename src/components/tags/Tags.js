import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import { resetFilter } from "../../features/filter/filterSlice";

import Tag from "./Tag";

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const { author } = useSelector((state) => state.filter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const handleFilterReset = () => {
        dispatch(resetFilter())
    }

    return tags?.length > 0 ? (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex  gap-2 border-b overflow-y-auto">
                {tags.map((tag) => (
                    <Tag key={tag.id} title={tag.title} />
                ))}
                {author && 
                    <div className="flex items-center justify-content text-blue-600 px-4 py-1">
                        Author :<span className="font-bold p-2"> {author} </span>
                    </div>
                }
                <div className="flex items-end bg-white h-10 px-5 justify-content flex-end ml-auto rounded-lg text-sm ring-emerald-200">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleFilterReset}>
                        Reset Filter
                    </button>
                </div>
            </div>
        </section>
    ) : null;
}
