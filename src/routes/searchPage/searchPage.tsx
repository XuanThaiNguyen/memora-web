import { useSearchParams } from "react-router";
import Gallery from "../../components/gallery/gallery";

const SearchPage = () => {
  let [searchParam] = useSearchParams();

  const search = searchParam.get("search");
  const boardId = searchParam.get("boardId");

  return (
    <div>
      <Gallery search={search} boardId={boardId} />
    </div>
  );
};

export default SearchPage;
