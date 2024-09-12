import useGetProducts from "/src/hooks/useGetProducts";
import { Pagination } from "/src/components/layout";
import { useSearchParams } from "react-router-dom";
import { LoadingCard, Cards, CardsRows } from "../../../components/cards";
import { AsideFilter, FilterTop } from "/src/components/Product";
import { useState } from "react";

function ProductsPage() {
  // parametros por defecto
  const PRODUCT_LIMITS = 8;
  const STATUS_DEFAULT = true;

  const [params, setParams] = useSearchParams();
  const [cardList, setCardList] = useState(false);
  const { ready, product, error } = useGetProducts(
    PRODUCT_LIMITS,
    STATUS_DEFAULT,
  );
  if (ready && error) {
    console.error(product, error);
  }

  const handlePage = (nextPage) => {
    params.set("page", nextPage);
    setParams(params);
  };
  const handleSorted = (filter, order) => {
    params.set("sortField", filter);
    params.set("sortOrder", order);
    setParams(params);
  };
  const deletSorted = () => {
    params.delete("sortField");
    params.delete("sortOrder");
    setParams(params);
  };
  const handleView = (opt) => {
    setCardList(opt);
  };
  const handleCategory = (category) => {
    if (category === "reset") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    setParams(params);
  };
  const handlemaxPrice = (price) => {
    if (price === "reset") {
      params.delete("maxPrice");
    } else {
      params.set("maxPrice", price);
    }
    setParams(params);
  };

  return (
    <>
      <section className="d-flex my-5">
        <article className="col-2 text-center">
          <h3 className="my-2 text-secondary">Filtros</h3>
          <AsideFilter
            handleCategories={handleCategory}
            handlemaxPrice={handlemaxPrice}
          />
        </article>
        <article className="col-10 mx-auto">
          <div className="d-flex flex-wrap container justify-content-start gap-3">
            <FilterTop
              product={product}
              handleSort={handleSorted}
              deletedSorted={deletSorted}
              handleViews={handleView}
              status={cardList}
            />
          </div>
          <div className="d-flex flex-wrap container justify-content-start gap-3 my-4">
            {!ready && <LoadingCard productsLimits={PRODUCT_LIMITS} />}
            {ready &&
              product.docs.map((prod) => (
                <div key={prod.code}>
                  {cardList ? (
                    <CardsRows
                      id={prod.id}
                      img={prod.thumbnail[0]}
                      name={prod.title}
                      price={prod.price}
                      category={prod.category}
                      description={prod.description}
                    />
                  ) : (
                    <Cards
                      id={prod.id}
                      img={prod.thumbnail[0]}
                      name={prod.title}
                      price={prod.price}
                    />
                  )}
                </div>
              ))}
          </div>
          <div className="mx-auto col-10 d-flex justify-content-center">
            {ready && <Pagination product={product} handlePage={handlePage} />}
          </div>
        </article>
      </section>
    </>
  );
}

export default ProductsPage;
