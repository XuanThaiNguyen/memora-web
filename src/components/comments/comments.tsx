import { useState } from "react";
import Image from "../image/image";
import "./comments.css";
import EmojiPicker from "emoji-picker-react";

const Comments = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        {/* COMMENTS */}
        <div className="comment">
          <Image path="/memora/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">Shen Long</span>
            <p className="commentText">Loremm.....</p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        {/* COMMENTS */}
        <div className="comment">
          <Image path="/memora/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">Shen Long</span>
            <p className="commentText">Loremm.....</p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        {/* COMMENTS */}
        <div className="comment">
          <Image path="/memora/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">Shen Long</span>
            <p className="commentText">Loremm.....</p>
            <span className="commentTime">1h</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div onClick={() => setOpen(true)} className="emoji">
          😀
        </div>
        {open && (
          <div className="emojiPicker">
            <EmojiPicker />
          </div>
        )}
      </form>
    </div>
  );
};

export default Comments;
