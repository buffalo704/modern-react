import { Image } from '../../types/image.type';

interface ImageShowProps {
  image: Image;
}

export const ImageShow = ({ image }: ImageShowProps) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};
