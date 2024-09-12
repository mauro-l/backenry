/* import { addDoc, collection } from "firebase/firestore";
import { db } from "/src/services/config"; */
import { categories } from "../helpers";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import postProducts from "../../../services/Products/create.services.js";

function Create() {
  const createProduct = async (values) => {
    /* const productRef = collection(db, "products"); */

    const transformedValues = {
      ...values,
      price: parseFloat(values.price),
      stock: parseInt(values.stock, 10),
      category: values.category.toLowerCase(),
    };

    Swal.fire({
      title: "Crear Producto",
      text: `Se creará el siguiente producto, ${values.title} `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          /* await addDoc(productRef, transformedValues); */
          const response = await postProducts(transformedValues);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Producto agregado!",
          });
        } catch (err) {
          console.error("Error adding document: ", err);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al agregar el producto.",
          });
        }
      }
    });
  };

  const { handleSubmit, handleChange, handleReset, values } = useFormik({
    initialValues: {
      title: "",
      category: "",
      price: "",
      stock: "",
      thumbnail: "",
      img2: "",
      img3: "",
      img4: "",
      description: "",
    },
    onSubmit: (values) => {
      createProduct(values);
    },
  });

  return (
    <div className="d-flex flex-column container col-8 gap-3">
      <h2>Crear nuevo item</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="d-inline-flex align-items-center gap-5">
          <div className="d-inline-flex align-items-center gap-2">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Categorias
              </label>
              <select
                className="form-select"
                name="category"
                id="categoryCreate"
                onChange={handleChange}
                value={values.category}
              >
                {categories.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-inline-flex align-items-center">
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  Nombre
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="createName"
                  aria-describedby="basic-addon3 basic-addon4"
                  placeholder="Nombre del producto"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-floating col-9 mb-4">
          <textarea
            className="form-control"
            name="description"
            onChange={handleChange}
            value={values.description}
            id="createDescription"
            style={{ height: 150 }}
          ></textarea>
          <label htmlFor="createDescription">Descripcion:</label>
        </div>
        <div className="row g-3">
          <div className="col-sm-3">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">
                Code
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group mb-3">
              <span className="input-group-text">Precio</span>
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                name="price"
                onChange={handleChange}
                value={values.price}
              />
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">
                Stock
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                name="stock"
                onChange={handleChange}
                value={values.stock}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 col-sm-9">
            <label htmlFor="basic-url" className="form-label">
              Imágenes
            </label>
            <div className="input-group">
              <span className="input-group-text">URL</span>
              <input
                type="text"
                aria-label="createImg"
                id="createImg"
                className="form-control"
                placeholder="Imagen principal"
                name="thumbnail"
                onChange={handleChange}
                value={values.thumbnail}
              />
              <input
                type="text"
                aria-label="createImg2"
                id="createImg2"
                className="form-control"
                placeholder="Imagen 2 (opcional)"
                name="img2"
                onChange={handleChange}
                value={values.img2}
              />
            </div>
          </div>
          <div className="mb-3 col-sm-9">
            <div className="input-group">
              <span className="input-group-text">URL</span>
              <input
                type="text"
                aria-label="createImg3"
                id="createImg3"
                className="form-control"
                placeholder="Imagen 3 (opcional)"
                name="img3"
                onChange={handleChange}
                value={values.img3}
              />
              <input
                type="text"
                aria-label="createImg4"
                id="createImg4"
                className="form-control"
                placeholder="Imagen 4 (opcional)"
                name="img4"
                onChange={handleChange}
                value={values.img4}
              />
            </div>
          </div>
        </div>
        <div className="col-12 gap-3 d-flex">
          <button type="submit" className="btn btn-danger">
            Agregar Producto
          </button>
          <button type="reset" className="btn btn-secondary">
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
