import image from "../assets/Logo (1).jpg";
function Navs() {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="col-4 justify-content-start">
            <a className="navbar-brand" href="#">
              <img
                style={{
                  width: "145px",
                  height: "35px",
                }}
                src={image}
                alt="logo"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="col-8">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto ">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19.36px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19.36px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Dental Tourism
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19.36px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Dental Crowns
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19.36px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="#"
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19.36px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Testimonials
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19.36px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Other Services
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Dental Implants
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </li>
              </ul>
              <a
                className="btn btn-primary"
                href="#"
                role="button"
                style={{
                  backgroundColor: "#6DA7A2",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "19.36px",
                  fontFamily: "Inter, sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navs;
