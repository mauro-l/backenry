/* import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config";

export async function showProducts(category) {
  const productsRef = collection(db, "products");
  const products = [];
  const data = category
    ? query(productsRef, where("category", "==", category))
    : productsRef;
  const result = await getDocs(data);
  if (result.empty) {
    throw new Error("Products Not found");
  }
  result.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
}
 */
