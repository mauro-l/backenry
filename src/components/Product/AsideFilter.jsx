function AsideFilter({ handleCategories, handlemaxPrice }) {
  const handleCategoriaChange = (event) => {
    handleCategories(event.target.value);
  };
  const handlemaxPriceChange = (event) => {
    handlemaxPrice(event.target.value);
  };
  return (
    <aside className="ms-5">
      <article>
        <h3 className="text-pink-bold">Categorias</h3>
        <div className="text-secondary mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="flexCannolis"
              value={"cannolis"}
              onChange={handleCategoriaChange}
            />
            <label className="form-check-label" htmlFor="flexCannolis">
              Cannolis
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="TortasRadio"
              value={"tortas"}
              onChange={handleCategoriaChange}
            />
            <label className="form-check-label" htmlFor="TortasRadio">
              Tortas
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="CheesecakeRadio"
              value={"cheesecake"}
              onChange={handleCategoriaChange}
            />
            <label className="form-check-label" htmlFor="CheesecakeRadio">
              Cheesecake
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="MacaronsRadio"
              value={"macarons"}
              onChange={handleCategoriaChange}
            />
            <label className="form-check-label" htmlFor="MacaronsRadio">
              Macarons
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="resetCategory"
              value={"reset"}
              onChange={handleCategoriaChange}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="resetCategory">
              Todos
            </label>
          </div>
        </div>
      </article>
      <article>
        <h3 className="text-pink-bold">Precios</h3>
        <div className="text-secondary mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="maxPrice"
              id="price1"
              value={"10000"}
              onChange={handlemaxPriceChange}
            />
            <label className="form-check-label" htmlFor="price1">
              Hasta $10000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="maxPrice"
              id="price2"
              value={"25000"}
              onChange={handlemaxPriceChange}
            />
            <label className="form-check-label" htmlFor="price2">
              Hasta $25000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="maxPrice"
              id="price3"
              value={"35000"}
              onChange={handlemaxPriceChange}
            />
            <label className="form-check-label" htmlFor="price3">
              Hasta $35000
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="maxPrice"
              id="price4"
              value={"reset"}
              onChange={handlemaxPriceChange}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="price4">
              Ver Todos
            </label>
          </div>
        </div>
        {/* <ul>
          <li>Hasta $10000</li>
          <li>Hasta $25000</li>
          <li>Hasta $35000</li>
          <li>Ver Todos</li>
        </ul> */}
      </article>
    </aside>
  );
}

export default AsideFilter;
