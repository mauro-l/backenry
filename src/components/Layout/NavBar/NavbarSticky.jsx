import { Link } from "react-router-dom";

const NavbarSticky = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  sticky-top justify-content-center navbar-custom">
      <div>
        <ul className="nav justify-content-center ">
          <li className="nav-link">
          
            <Link to="/" className="dropdown-item">
                  Inicio
                </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Products
            </a>
            <ul className="dropdown-menu">
              <li>
              <Link to="/products?category=cannolis" className="dropdown-item">
                  Canollis
                </Link>
              </li>
              <li>
              <Link to="/products?category=macarons" className="dropdown-item">
                  Macarrons
                </Link>
              </li>
              <li>
              <Link to="/products?category=cheesecake" className="dropdown-item">
                  Cheesecake
                </Link>
              </li>
              <li>
              <Link to="/products?category=tortas" className="dropdown-item">
                  Tartas y tortas
                </Link>
              </li>
              <li>
                <Link to="/products" className="dropdown-item">
                  Ver todo
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Quienes somos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Como comprar
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarSticky;
