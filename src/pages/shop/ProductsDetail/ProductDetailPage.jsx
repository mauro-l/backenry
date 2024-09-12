import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "/src/services/config";
import ProductImage from "./ProductImage/ProductImage";
import ItemDetail from "./Detail/ItemDetail";

//obtener id de params y obtener producto de fire base por id //

const ProductDeatilPage = () => {
  const [items, setItems] = useState(null);
  const { pid } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", pid);
    getDoc(docRef).then((resp) => {
      setItems(resp.data());
    });
  }, [pid]);

  return (
    <div>
      {items && (
        <>
          {/* <ProductImage items={items} /> */}
          <ItemDetail props={items} />
        </>
      )}
    </div>
  );
};

export default ProductDeatilPage;
