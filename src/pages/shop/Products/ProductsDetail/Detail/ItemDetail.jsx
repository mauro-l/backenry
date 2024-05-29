import { useState } from "react";

const ItemDetail = ({ images }) => {
  const [mainImage, setSelectedImage] = useState(images);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div>
        <img src={mainImage} alt="Imagen principal" />
      </div>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index}`}
            style={{ width: "50px", cursor: "pointer" }}
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;
