import { TableBody, TableHead } from "../../components/common";
import useGetProducts from "../../hooks/useGetProducts";
import { heads } from "./helpers";

function ProductList() {
  const { ready, product, error } = useGetProducts();

  if (error) {
    return <h3>Problemas al traer los productos</h3>;
  }

  return (
    <section>
      <article>
        <h2>Listado de productos</h2>
        <h3>
          Agregar<button>+</button>
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
