import { format } from "timeago.js";
import Image from "../image/image";
import { User } from "../../models/user.model";

interface CommentProps {
  comment: {
    _id: string;
    user: User;
    description: string;
    createdAt: Date;
  };
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="comment">
      <Image src={comment.user.img} alt="" />
      <div className="commentContent">
        <span className="commentUsername">{comment.user.displayName}</span>
        <p className="commentText">{comment.description}</p>
        <span className="commentTime">{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;
