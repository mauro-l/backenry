import { categories } from "../helpers";

function Update() {
  return (
    <div className="d-flex flex-column container col-8 gap-3">
      <h2>Editar item</h2>
      <form action="">
        <div className="d-inline-flex align-items-center gap-5">
          <div className="d-inline-flex align-items-center gap-2">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Categorias
              </label>
              <select
                className="form-select"
                name="category"
                id="categoryCreate"
              >
                {categories.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-inline-flex align-items-center">
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  Nombre
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="createName"
                  aria-describedby="basic-addon3 basic-addon4"
                  placeholder="Nombre del producto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-floating col-9 mb-4">
          <textarea
            className="form-control"
            name="cDescription"
            id="createDescription"
            style={{ height: 150 }}
          ></textarea>
          <label htmlFor="createDescription">Descripcion:</label>
        </div>
        <div className="row g-3">
          <div className="col-sm-3">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">
                Code
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group mb-3">
              <span className="input-group-text">Precio</span>
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">
                Stock
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <label htmlFor="basic-url" className="form-label">
              Imágenes
            </label>
            <div className="d-flex col-sm-12 gap-4">
              <div className="d-flex flex-column col-sm-2">
                <div className="mb-2">
                  <input
                    type="text"
                    aria-label="createImg"
                    id="createImg"
                    className="form-control"
                    placeholder="url://"
                  />
                </div>
                <figure className="figure">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_ELlhEuhUBzIUmX11uHIjclGPC3qCXzrY0YWprHNRAwutSrhZyCt3DpY0w-viFa0YK8&usqp=CAU"
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                  <figcaption className="figure-caption">
                    Imagen Principal
                  </figcaption>
                </figure>
              </div>
              <div className="d-flex flex-column col-sm-2">
                <div className="mb-2">
                  <input
                    type="text"
                    aria-label="createImg"
                    id="createImg2"
                    className="form-control"
                    placeholder="url://"
                  />
                </div>
                <figure className="figure">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_ELlhEuhUBzIUmX11uHIjclGPC3qCXzrY0YWprHNRAwutSrhZyCt3DpY0w-viFa0YK8&usqp=CAU"
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                  <figcaption className="figure-caption">Imagen 2</figcaption>
                </figure>
              </div>
              <div className="d-flex flex-column col-sm-2">
                <div className="mb-2">
                  <input
                    type="text"
                    aria-label="createImg"
                    id="createImg3"
                    className="form-control"
                    placeholder="url://"
                  />
                </div>
                <figure className="figure">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_ELlhEuhUBzIUmX11uHIjclGPC3qCXzrY0YWprHNRAwutSrhZyCt3DpY0w-viFa0YK8&usqp=CAU"
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                  <figcaption className="figure-caption">Imagen 3</figcaption>
                </figure>
              </div>
              <div className="d-flex flex-column col-sm-2">
                <div className="mb-2">
                  <input
                    type="text"
                    aria-label="createImg"
                    id="createImg4"
                    className="form-control"
                    placeholder="url://"
                  />
                </div>
                <figure className="figure">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_ELlhEuhUBzIUmX11uHIjclGPC3qCXzrY0YWprHNRAwutSrhZyCt3DpY0w-viFa0YK8&usqp=CAU"
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                  <figcaption className="figure-caption">Imagen 4</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 gap-3 d-flex">
          <button type="submit" className="btn btn-danger">
            Modificar Producto
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
