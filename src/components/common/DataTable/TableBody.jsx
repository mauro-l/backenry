import { Link } from "react-router-dom";
import { confirmProducts } from "/src/services";

function TableBody({ items }) {
  return (
    <tbody className="table-group-divider">
      {items.map((item, index) => (
        <tr key={item.id}>
          <th scope="row">{index + 1}</th>
          <th>{item.name}</th>
          <th>{item.category}</th>
          <th>{item.stock}</th>
          <th>
            <Link to={"/admin/create"} className="btn btn-primary me-1">
              ✏️
            </Link>
            <button
              onClick={() => confirmProducts(item.id)}
              className="btn btn-danger"
            >
              🗑️
            </button>
          </th>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
