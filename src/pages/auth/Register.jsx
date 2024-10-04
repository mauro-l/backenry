import { useFormik } from "formik";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    //validacion de contraseña =
    if (values.password !== values.repeatPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    //formato requerido por el backend
    const newValues = {
      first_name: values.name,
      password: values.password,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      birthdate: values.birthDate,
    };

    try {
      setLoading(true);
      console.log(newValues);
      const response = await fetch(
        "https://backery-ak8h.onrender.com/api/session/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newValues),
        },
      );
      console.log("pasa por acá");
      if (!response) {
        console.error(response);
      }
      const data = await response.json();
      console.log("Y pasa por acá", data);
      return data;
    } catch (error) {
      console.error("error al crear usuario", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      password: "",
      repeatPassword: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: "",
    },
    onSubmit: (values) => {
      registerUser(values);
      /* console.log(values.birthDate);
      console.log(typeof values.birthDate); */
    },
  });

  return (
    <div className="container justify-content-center d-flex my-5 p-5">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputPhone" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPhone"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputDate" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            name="birthDate"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputRepeatPassword" className="form-label">
            Repetir contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputRepeatPassword"
            name="repeatPassword"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Acepto términos y condiciones
            </label>
          </div>
        </div>
        <div className="col-12">
          {loading ? (
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Registrarme
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
