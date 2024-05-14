import useGetProducts from "../hooks/useGetProducts";

function ItemListContainer() {
  const { ready, product, error } = useGetProducts();
  return (
    <div className="d-flex container">
      {ready &&
        product.map((prod) => (
          <div key={prod.id} className="card" style={{ width: "18rem" }}>
            <img
              src={prod.img}
              className="card-img-top"
              style={{ width: "12rem" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{prod.name}</h5>
              <p className="card-text">{prod.description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ItemListContainer;
