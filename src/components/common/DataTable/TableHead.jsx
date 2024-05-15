function TableBody({ heads }) {
  return (
    <thead>
      <tr>
        {heads.map((head, index) => (
          <th scope="col" key={index}>
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableBody;
