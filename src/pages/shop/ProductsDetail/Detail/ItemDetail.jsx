const ItemDetail = ({ props }) => {
  console.log(typeof props);
  return (
    <div>
      <div>
        <h3>{props.category}</h3>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
      </div>
    </div>
  );
};

export default ItemDetail;
