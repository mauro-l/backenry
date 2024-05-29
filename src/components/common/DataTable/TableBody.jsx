function TableBody({ items }) {
  return (
    <tbody className="table-group-divider">
      {items.map((item, index) => (
        <tr key={item.id}>
          <th scope="row">{index + 1}</th>
          <th>{item.name}</th>
          <th>{item.category}</th>
          <th>{item.stock}</th>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
