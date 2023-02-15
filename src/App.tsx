import { createContext, useState } from 'react';
import { Router } from 'router';
import { ImageType } from 'types';

export const ImagesContext = createContext({
  images: [] as ImageType[],
  addNewImages: (newImages: ImageType[]) => {},
  updateImage: (id: string, data: Partial<ImageType>[]) => {},
});

function App() {
  const [images, setImages] = useState<ImageType[]>([]);

  const addNewImages = (newImages: ImageType[]) => {
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const updateImage = (id: string, data: Partial<ImageType>[]) => {
    setImages((prevImages) =>
      prevImages.map((image) => {
        if (image.id === id) {
          return {
            ...image,
            ...data,
          };
        }
        return image;
      })
    );
  };

  return (
    <ImagesContext.Provider value={{ images, addNewImages, updateImage }}>
      <Router />
    </ImagesContext.Provider>
  );
}

export default App;
