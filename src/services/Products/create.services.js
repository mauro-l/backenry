const postProducts = async (data) => {
  try {
    const pepe = await fetch("https://backery-ak8h.onrender.com/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const response = await pepe.json();
    return response;
  } catch (err) {
    console.error("Error al crear el producto ", err);
    throw new Error(err);
  }
};

export default postProducts;
