import { useState } from "react";
import Image from "../../components/image/image";
import "./profilePage.css";
import Gallery from "../../components/gallery/gallery";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import Boards from "../../components/boards/boards";
import FollowButton from "./followButton";

const ProfilePage = () => {
  const [type, setType] = useState<"created" | "saved">("saved");

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  if (!data) return "User not found!";

  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        w={100}
        h={100}
        path={data.img || "/memora/general/noAvatar.png"}
        alt=""
      />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUsername">@{data.username}</span>
      <div className="followCounts">
        {data.followerCount} followers - {data.followingCount} followings
      </div>
      <div className="profileInteractions">
        <Image path="/memora/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <FollowButton
            isFollowing={data.isFollowing}
            username={data.username}
          />
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
      {type === "created" ? (
        <Gallery userId={data._id} />
      ) : (
        <Boards userId={data._id} />
      )}
    </div>
  );
};

export default ProfilePage;
