import { useContext } from "react";
import { PictureContext } from "../Context/PictureContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { picture, setPicture } = useContext(PictureContext);

  const agregarFavorito = (id) => {
    const newPicture = picture.map((picture) => {
      if (picture.id === id) {
        return {
          ...picture,
          like: !picture.like,
        };
      }
      return picture;
    });

    setPicture(newPicture);
  };
  return (
    <div className="gallery grid-columns-4 p-3">
      {picture.map((picture) => (
        <div
          key={picture.id}
          onClick={() => agregarFavorito(picture.id)}
          className="picture-item"
        >
          <div className="picture-container">
            <img src={picture.src.original} alt={picture.photographer} />
            <h5>{picture.alt}</h5>
          </div>
          <IconHeart filled={picture.like} />
        </div>
      ))}
    </div>
  );
};
export default Gallery;
