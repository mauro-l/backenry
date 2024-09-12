function LoadingCard(productsLimits) {
  const renderCardsNumbers = ({ productsLimits }) => {
    const cardsNumbers = [];
    for (let i = 1; i <= productsLimits; i++) {
      cardsNumbers.push(
        <div
          key={i}
          className="card"
          aria-hidden="true"
          style={{ width: "18rem" }}
        >
          <div className="spinner-border text-secondary m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7 bg-dark"></span>
              <span className="placeholder col-4 bg-dark"></span>
              <span className="placeholder col-4 bg-dark"></span>
              <span className="placeholder col-6 bg-dark"></span>
              <span className="placeholder col-8 bg-dark"></span>
            </p>
          </div>
        </div>,
      );
    }
    return cardsNumbers;
  };
  return <>{renderCardsNumbers(productsLimits)}</>;
}

export default LoadingCard;
