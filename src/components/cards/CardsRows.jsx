import { Link } from "react-router-dom";

function CardsRows({ id, name, price, category, description, img }) {
  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={`/product/${id}`}>
            <img
              src={img}
              className="card-img-top p-3 rounded-5"
              style={{ height: 180, width: 180 }}
              alt={`image ${name}`}
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to={`/product/${id}`} className="card-title text-card">
              {name}
            </Link>
            <p
              className="card-text"
              style={{ fontWeight: "bold", color: "#cc486b" }}
            >
              ${price}
            </p>
            <p
              className="card-text text-truncate text-wrap"
              style={{ height: 48 }}
            >
              {description}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                {`Categoria: ${category}`}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsRows;
