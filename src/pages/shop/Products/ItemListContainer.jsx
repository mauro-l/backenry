import useGetProducts from "/src/hooks/useGetProducts";

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
            <img
              src={prod.img}
              className="card-img-top p-3 rounded-5"
              style={{ height: "240px" }}
              alt="..."
            />
            <div className="card-body">
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
              <h5 className="card-title">{prod.name}</h5>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ItemListContainer;
