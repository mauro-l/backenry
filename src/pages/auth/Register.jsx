const Register = () => {
  return (
    <div className="container justify-content-center d-flex my-5 p-5">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputName" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-md-6">
          <label for="inputLastName" className="form-label">
            Apellido
          </label>
          <input type="text" className="form-control" id="inputLastName" />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Contraseña
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        {/* <div className="col-12">
          <label for="inputAddress" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Direccion 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div> */}
        <div className="col-md-6">
          <label for="inputAddress" className="form-label">
            Dirección
          </label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="col-md-4">
          <label for="inputPhone" className="form-label">
            Teléfono
          </label>
          <input type="text" className="form-control" id="inputPhone" />
        </div>
        <div className="col-md-2">
          <label for="inputDate" className="form-label">
            Fecha de nacimiento
          </label>
          <input type="text" className="form-control" id="inputDate" />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Ciudad
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Provincia
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Código Postal
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Acepto términos y condiciones
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
