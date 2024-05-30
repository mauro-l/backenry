import { Link } from "react-router-dom";
import useGetProducts from "/src/hooks/useGetProducts";
import "./itemList.css";

function ItemListContainer() {
  const { ready, product, error } = useGetProducts();

  if (error) {
    return <h3>Problemas al traer los productos</h3>;
  }

  return (
    <div className="d-flex flex-wrap container justify-content-center gap-3 my-4">
      {ready &&
        product.map((prod) => (
          <div key={prod.id} className="card d-flex" style={{ width: "18rem" }}>
            <Link to={`/products/${prod.id}`}>
              <img
                src={prod.img}
                className="card-img-top p-3 rounded-5"
                style={{ height: "240px" }}
                alt="..."
              />
            </Link>
            <div className="card-body text-center">
              <Link
                to={`/products/${prod.id}`}
                className="card-title text-card"
              >
                {prod.name}
              </Link>
              <p style={{ fontWeight: "bold", color: "#cc486b" }}>
                ${prod.price}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ItemListContainer;
