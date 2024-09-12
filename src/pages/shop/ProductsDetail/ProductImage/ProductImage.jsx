import { useState } from "react";

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState(images.mainImage);

  const handleImage = (image) => {
    setMainImg(image);
  };

  return (
    <section>
      {Object.keys(images).length > 1 && (
        <article>
          {Object.entries(images).map(([key, value]) => (
            <button key={key} onClick={() => handleImage(value)}>
              <img src={value} alt={`product image ${key}`} />
            </button>
          ))}
        </article>
      )}
      <article>
        <img src={mainImg} alt="main product image" />
      </article>
    </section>
  );
}

export default ProductImage;
