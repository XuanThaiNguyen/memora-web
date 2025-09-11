import { useState } from "react";
import Image from "../../components/image/image";
import "./profilePage.css";
import Gallery from "../../components/gallery/gallery";
import Collections from "../../components/collections/collections";

const ProfilePage = () => {
  const [type, setType] = useState<"created" | "saved">("saved");

  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        w={100}
        h={100}
        path="/memora/general/noAvatar.png"
        alt=""
      />
      <h1 className="profileName">Shen Long</h1>
      <span className="profileUsername">@shenlong</span>
      <div className="followCounts">10 followers - 20 followings</div>
      <div className="profileInteractions">
        <Image path="/memora/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/memora/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          className={type === "created" ? "active" : ""}
          onClick={() => setType("created")}
        >
          Created
        </span>
        <span
          className={type === "saved" ? "active" : ""}
          onClick={() => setType("saved")}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
