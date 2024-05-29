const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg background-color: #FFE6D1">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Crear cuenta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Iniciar sesión
              </a>
            </li>
            <li className="nav-item dropdown"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
