import { TableBody, TableHead } from "../../components/common";
import { useGetProducts } from "/src/hooks";
import { heads } from "./helpers";

function ProductList() {
  const { ready, product, error } = useGetProducts();

  if (error) {
    return <h3>Problemas al traer los productos</h3>;
  }

  return (
    <section className="container">
      <article className="col-sm-4">
        <form className="d-flex input-group my-3" role="search">
          <span className="input-group-text" id="basic-addon1">
            🔍
          </span>
          <input
            className="form-control"
            type="search"
            placeholder="Codigo, nombre, categoria"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </form>
      </article>
      <article className="d-flex justify-content-between">
        <h2>Listado de productos</h2>
        <h3>
          Agregar<button className="btn btn-danger ms-3">➕</button>
        </h3>
      </article>
      <article>
        <table className="table">
          <TableHead heads={heads} />
          {ready && <TableBody items={product} />}
        </table>
      </article>
    </section>
  );
}

export default ProductList;
