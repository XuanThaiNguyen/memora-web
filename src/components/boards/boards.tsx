import { useQuery } from "@tanstack/react-query";
import Image from "../image/image";
import "./boards.css";
import apiRequest from "../../utils/apiRequest";
import { format } from "timeago.js";
import { Link } from "react-router";

interface BoardsProps {
  userId: string;
}

const Boards = ({ userId }: BoardsProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  if (!data) return "User not found!";

  return (
    <div className="collections">
      {/* COLLECTIONS */}
      {data.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          className="collection"
          key={board._id}
        >
          <Image src={board.firstPin.media} alt="" />
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} Pins - {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;
