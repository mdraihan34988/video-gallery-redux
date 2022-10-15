import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchNumberOfVideos, pagenumberChange } from "../../features/pagination/paginationSlice"
import Loading from "./Loading";
import Page from "./Page";

export default function Pagination() {
    const dispatch = useDispatch();
    const { tags, search, author } = useSelector((state) => state.filter);
    const { pageNumber,isLoading, isError, error, numberOfPages } = useSelector((state) => state.pagination);

    useEffect(() => {
        dispatch(fetchNumberOfVideos({ tags, search, author }));
    }, [dispatch, tags, search, author]);

    const handlePagination = (page) => {
        dispatch(pagenumberChange(page));
    }

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && numberOfPages === 0) {
        content = <div className="col-span-12">No videos found!</div>;
    }

    let arrayOfPages = [];

    if(numberOfPages > 0) {
        for (let i = 0; i < numberOfPages; i++) {
            arrayOfPages[i] = <Page page={i+1} pageNumber={pageNumber} handlePagination={handlePagination}/>;
        }
    }

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {numberOfPages > 0? arrayOfPages.map(value => (value)) : content}
            </div>
        </section>
    );
}
