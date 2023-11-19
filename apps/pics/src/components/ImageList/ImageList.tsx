import { Image } from '../../types/image.type';
import { ImageShow } from '../ImageShow/ImageShow';
import './ImageList.css';

interface ImageListProps {
  images: Image[];
}
export const ImageList = ({ images }: ImageListProps) => {
  const ImageShows = images?.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));
  return <div className="image-list">{ImageShows}</div>;
};
