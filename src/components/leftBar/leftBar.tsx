import { Link } from "react-router";
import Image from "../image/image";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <Image path="memora/general/logo.png" alt="" className="logo" />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="memora/general/home.svg" alt="" />
        </Link>
        <Link to="/create" className="menuIcon">
          <Image path="memora/general/create.svg" alt="" />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="memora/general/updates.svg" alt="" />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="memora/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link to="/" className="menuIcon">
        <Image path="memora/general/messages.svg" alt="" />
      </Link>
    </div>
  );
};

export default LeftBar;
