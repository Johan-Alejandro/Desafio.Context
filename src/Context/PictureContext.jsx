import { createContext, useState, useEffect } from "react";

export const PictureContext = createContext();

const PictureProvider = ({ children }) => {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/photos.json");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setPicture(data);
        const photos = data.photos.map((photo) => ({
          ...photo,
        }));
        setPicture(photos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <PictureContext.Provider value={{ picture, setPicture }}>
      {children}
    </PictureContext.Provider>
  );
};

export default PictureProvider;
