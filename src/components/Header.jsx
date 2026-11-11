
import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid gap-5">

        <img src="public/Logo (7).png" alt="" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-dark" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark " href="#">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Contact</a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Header;
