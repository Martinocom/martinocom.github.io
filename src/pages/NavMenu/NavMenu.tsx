import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './NavMenu.scoped.scss';

const NavMenu = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/")
  }

  return (
    <>
      <div className="TopBarContainer">
        <img className="Image" src={require("../../assets/images/logo.png")} alt="Logo" onClick={goToHome}></img>
        <nav className="LinkContainer">
          <Link to="/">Home</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>

      <div className="Content">
        <div className="Outlet">
          <Outlet />
        </div>
      </div>
    </>
  )
};

export default NavMenu;