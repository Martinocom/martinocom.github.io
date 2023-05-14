import { Link } from "react-router-dom";

import "./NavMenu.scoped.scss";

const NavMenu = () => {
  return (
    <nav className="LinkContainer">
      <Link
        className={"linked background"}
        to="/aboutme"
      >
        About Me
      </Link>
      <Link
        className="linked"
        to="/"
      >
        <img
          className="Image"
          src={require("../../assets/images/logo.png")}
          alt="Logo"
        />
      </Link>
      <Link
        className="linked background"
        to="/projects"
      >
        Projects
      </Link>
    </nav>
  );
};

// eslint-disable-next-line import/no-default-export
export default NavMenu;
