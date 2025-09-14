import { BASE_URL } from "../../constants";
import GalleryItem from "../galleryItem/galleryItem";
import "./gallery.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPins = async ({
  pageParam,
  search,
  userId,
  boardId,
}: {
  pageParam: number;
  search: string | null;
  userId?: string;
  boardId?: string | null;
}) => {
  const res = await axios.get(
    `${BASE_URL}/pins?cursor=${pageParam || ""}&search=${search || ""}&userId=${
      userId || ""
    }&boardId=${boardId || ""}`
  );
  return res.data;
};

interface GalleryProps {
  search?: string | null;
  userId?: string;
  boardId?: string | null;
}

const Gallery = ({ search = "", userId, boardId }: GalleryProps) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins", search],
    queryFn: ({ pageParam = 0 }) =>
      fetchPins({ pageParam, search, userId, boardId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  if (status === "pending") return "Loading...";
  if (status === "error") return "Something went wrong";

  const allPins = data.pages.flatMap((page) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      loader={<h4>Loading more pins...</h4>}
      hasMore={!!hasNextPage}
      endMessage={<h3>All Posts loaded!</h3>}
    >
      <div className="gallery">
        {allPins.map((item, index) => (
          <GalleryItem key={`${item._id}-${index}`} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
