import { use, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import "./../style/Header.css";



 const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
    return (
      <nav className="navbar navbar-light bg-light shadow-sm mb-4">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={LOGO_URL} alt="Logo" className="logo me-2" />
            FoodApp
          </a>
          {/* Desktop menu: visible on lg and up */}
          <div className="d-none d-lg-flex ms-auto align-items-center">
            <ul className="navbar-nav flex-row gap-2 mb-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item position-relative">
                <a className="nav-link d-flex align-items-center" href="#">
                  Cart
                  <span className="badge bg-danger cart-badge">2</span>
                </a>
              </li>
            </ul>
            <button className="btn btn-gradient ms-3 px-4 py-2 fw-semibold"
              onClick={()=> {
                setLoginBtnName(loginBtnName === "Login" ? "Logout" : "Login");
              }}
            >{loginBtnName}</button>
          </div>

          {/* Mobile menu: offcanvas, visible below lg */}
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item position-relative">
                  <a className="nav-link d-flex align-items-center" href="#">
                    Cart
                    <span className="badge bg-danger cart-badge">2</span>
                  </a>
                </li>
              </ul>
              <button className="btn btn-gradient w-100 mt-3 px-4 py-2 fw-semibold"
                onClick={()=> {
                  setLoginBtnName(loginBtnName === "Login" ? "Logout" : "Login");
                }}
              >{loginBtnName}</button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Header;