import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";
import apiRequest from "../../utils/apiRequest";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore";

const UserButton = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { currentUser, removeCurrentUser } = useAuthStore();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
      navigate("/auth");
    } catch (err) {}
  };

  return currentUser ? (
    <div className="userButton">
      <Image path={currentUser.img || "memora/general/noAvatar.png"} alt="" />
      <Image
        path="memora/general/arrow.svg"
        alt=""
        className="arrow"
        onClick={() => setOpen(true)}
      />
      {open ? (
        <div className="userOptions">
          <Link
            to={`/profile/${currentUser.username}`}
            className="userOption"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>
          <div className="userOption" onClick={() => setOpen(false)}>
            Setting
          </div>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div>
      <Link to="/auth" className="loginLink">
        Login / Register
      </Link>
    </div>
  );
};

export default UserButton;
