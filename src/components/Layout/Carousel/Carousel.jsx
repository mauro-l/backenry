const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active" data-bs-interval="1000">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-caf3e.appspot.com/o/Backery%2F1.png?alt=media&token=57b9cdfd-729e-49dc-b992-f90b6cc6ee3b"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img
            src="https://d22fxaf9t8d39k.cloudfront.net/4e32a6737b711bf27051326dad9ebff0867e20583329c2e29ff854068b21a18d21167.jpeg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://d22fxaf9t8d39k.cloudfront.net/cb36a159e4887af9d01a6683b9cca5141d79055c87e13224f3a22fc5e8b6431e21167.jpeg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
