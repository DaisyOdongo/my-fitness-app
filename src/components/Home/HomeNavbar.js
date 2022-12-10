import { NavLink, useNavigate } from "react-router-dom";
const HomeNavbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("home");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4>My Fitness App</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav admin me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h5 className="nav-link">Welcome to My Fitness Tracker App</h5>
              </li>
              <li className="nav-item">
                <NavLink to="/home/userlogin" className="links nav-link">
                  Add  Exercise
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="btn-danger btn btn-md nav-link"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavbar;
