/* import { apiKey } from "../env";

export async function getAllProductMongoDB() {
  try {
    const uri = apiKey + "/api/products";
    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Error al traer los productos de la BBDD ${err}`);
  }
} */
