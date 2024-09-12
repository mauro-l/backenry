import { Link } from "react-router-dom";
import "./itemList.css";

function Cards({ id, img, name, price }) {
  return (
    <div className="card d-flex" style={{ width: "18rem" }}>
      <Link to={`/product/${id}`}>
        <img
          src={img}
          className="card-img-top p-3 rounded-5"
          style={{ height: "240px" }}
          alt={`image ${name}`}
        />
      </Link>
      <div className="card-body text-center p-2">
        <Link
          to={`/product/${id}`}
          className="d-inline-block card-title text-card"
          style={{ height: 40 }}
        >
          {name}
        </Link>
        <p style={{ fontWeight: "bold", color: "#cc486b" }}>${price}</p>
      </div>
    </div>
  );
}

export default Cards;
