import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config";
import Swal from "sweetalert2";

const deleteProducts = async (id) => {
  try {
    const productsRef = doc(db, "products", id);
    await deleteDoc(productsRef);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export async function confirmProducts(id) {
  const result = await Swal.fire({
    title: "¿Deseas eliminar el producto?",
    text: "¡Esta acción es irreversible!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
  });
  if (result.isConfirmed) {
    const isDeleted = await deleteProducts(id);
    if (isDeleted) {
      Swal.fire({
        title: "¡Eliminado!",
        text: "Tu archivo ha sido eliminado.",
        icon: "success",
      }).then(() => {
        window.location.href = "/admin/products";
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al eliminar el archivo.",
        icon: "error",
      });
    }
  }
}
