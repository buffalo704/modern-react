import { SearchBar } from "../components/SearchBar/SearchBar";
import { ImageList} from "../components/ImageList/ImageList";
import { searchImages} from "../api";
import {useState} from "react";
import {Image} from "../types/image.type";

export function App() {
  const [images, setImages] = useState<Image[]>([]);

  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div>
     <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
