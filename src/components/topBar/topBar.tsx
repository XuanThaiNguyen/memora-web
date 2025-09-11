import Image from "../image/image";
import UserButton from "../userButton/userButton";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="search">
        <Image path="memora/general/search.svg" alt="" />
        <input type="text" placeholder="search" />
      </div>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
