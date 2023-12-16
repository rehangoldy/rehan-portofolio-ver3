import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg align-items-center d-flex">
        <div className="container-fluid justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="btn-sm nav-link active text-white"
                aria-current="page"
                onClick={() => navigate("/")
            }
            href="#"
              >
                Home
              </a>
              <a className="nav-link text-white" href="#">
                Aboutme
              </a>
              <a className="nav-link text-white" href="#">
                My Experience
              </a>
              <a className="nav-link text-white" href="#">
                My Project
              </a>
              <a className="nav-link text-white" href="#">
                My Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
