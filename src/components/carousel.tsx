import { useState } from "react";

import { images } from "../data/images";

export function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);

  function previousImage() {
    if (imgIndex - 4 < 0) {
      setImgIndex(images.length - 4);
      return;
    }
    setImgIndex((oldIndex) => oldIndex - 4);
  }

  function nextImage() {
    if (images.length - 4 <= imgIndex) {
      setImgIndex(0);
      return;
    }
    setImgIndex((oldIndex) => oldIndex + 4);
  }
  return (
    <>
      <div>
        <h1>Hello</h1>
        <img
          src={images[imgIndex].imageURL}
          alt={images[imgIndex].description}
        />
        <img
          src={images[imgIndex + 1].imageURL}
          alt={images[imgIndex + 1].description}
        />
        <img
          src={images[imgIndex + 2].imageURL}
          alt={images[imgIndex + 2].description}
        />
        <img
          src={images[imgIndex + 3].imageURL}
          alt={images[imgIndex + 3].description}
        />
      </div>
      <div>
        <button type="button" onClick={previousImage}>
          Previous image
        </button>
        <button type="button" onClick={nextImage}>
          Next Image
        </button>
      </div>
    </>
  );
}
