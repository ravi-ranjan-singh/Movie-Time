import React from "react";
import logo from "../Movie.png";

const Navbar = props => {
  const { onSearchByName } = props;

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand col-lg-3 col-md-12" href="#">
          <img src={logo} alt="site-icon" />
          Movie Time!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse col-lg-9 ml-5 col-md-12"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav row">
            <li className="nav-item col-lg-11">
              <form className="form-inline mt-2 mr-4">
                <input
                  className="form-control ml-5 mr-sm-2"
                  type="search"
                  placeholder="Enter Movie Name"
                  aria-label="Search"
                />
                <button
                  className="btn btn-primary ml-2 my-2 my-sm-0"
                  onClick={e => {
                    e.preventDefault();
                    props.onSearch(document.querySelector("input").value);
                    document.querySelector("input").value = "";
                    props.history.push("/");
                  }}
                >
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item dropdown col-lg-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fas fa-heart text-danger" />
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {props.likedMovies.map(movie => {
                  return (
                    <a
                      key={movie}
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        onSearchByName(movie);
                      }}
                    >
                      {movie}
                    </a>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
