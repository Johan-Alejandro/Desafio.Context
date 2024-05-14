import { useContext } from "react";
import { PictureContext } from "../Context/PictureContext";

const Favorites = () => {
  const { picture, setPicture } = useContext(PictureContext);

  const quitarFavorito = (id) => {
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
    <div>
      <h1>Fotos Favoritas</h1>
      <div className="gallery grid-columns-4 p-3">
        {picture
          .filter((picture) => picture.like)
          .map((picture) => (
            <div
              key={picture.id}
              onClick={() => quitarFavorito(picture.id)}
              className="picture-item"
            >
              <div className="picture-container">
                <img src={picture.src.original} alt={picture.photographer} />
                <h5>{picture.alt}</h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Favorites;
