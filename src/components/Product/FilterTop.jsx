import { useEffect, useState } from "react";

function FilterTop({
  product,
  handleSort,
  deletedSorted,
  handleViews,
  status,
}) {
  const [select, setSelect] = useState("quitar");
  const [title, setTitle] = useState("Ordenar");

  useEffect(() => {
    if (select === "mayor") {
      setTitle("Precio mayor a menor");
      handleSort("price", "desc");
    }
    if (select === "menor") {
      setTitle("Precio menor a mayor");
      handleSort("price", "asc");
    }
    if (select === "alfa") {
      setTitle("A -Z");
      handleSort("title", "asc");
    }
    if (select === "noAlfa") {
      setTitle("Z - A");
      handleSort("title", "desc");
    }
    if (select === "quitar") {
      setTitle("Ordenar");
      deletedSorted();
    }
  }, [select]);

  const handleClick = (opt) => {
    setSelect(opt);
  };

  return (
    <div className="d-flex justify-content-between align-items-end col-10">
      <span>{`Productos listados: ${product.totalDocs ? product.totalDocs : "Cargando..."}`}</span>
      <div className="d-inline-flex gap-1">
        <div className="d-inline-flex gap-1">
          <button
            type="button"
            className={`btn btn-outline-secondary btn-sm ${status && "active"}`}
            onClick={() => handleViews(true)}
          >
            <i className="bi bi-view-stacked"></i>
          </button>
          <button
            type="button"
            className={`btn btn-outline-secondary btn-sm ${status === false && "active"}`}
            onClick={() => handleViews(false)}
          >
            <i className="bi bi-grid-fill"></i>
          </button>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {title}
          </button>
          <ul className="dropdown-menu">
            <li>
              <p
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("mayor")}
              >
                Precio mayor a menor
              </p>
            </li>
            <li>
              <p
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("menor")}
              >
                Precio menor a mayor
              </p>
            </li>
            <li>
              <p
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("alfa")}
              >
                A - Z
              </p>
            </li>
            <li>
              <p
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("noAlfa")}
              >
                Z - A
              </p>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <p
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("quitar")}
              >
                Por defecto
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterTop;
