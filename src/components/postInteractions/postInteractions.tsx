import Image from "../image/image";
import "./postInteractions.css";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="/memora/general/react.svg" alt="" />
        273
        <Image path="/memora/general/share.svg" alt="" />
        <Image path="/memora/general/more.svg" alt="" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteractions;
