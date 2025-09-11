import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  //TEMP
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <Image path="memora/general/noAvatar.png" alt="" />
      <Image
        path="memora/general/arrow.svg"
        alt=""
        className="arrow"
        onClick={() => setOpen(true)}
      />
      {open ? (
        <div className="userOptions">
          <div className="userOption" onClick={() => setOpen(false)}>
            Profile
          </div>
          <div className="userOption" onClick={() => setOpen(false)}>
            Setting
          </div>
          <div className="userOption" onClick={() => setOpen(false)}>
            Logout
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div>
      <a href="/" className="loginLink">
        Login / Register
      </a>
    </div>
  );
};

export default UserButton;
