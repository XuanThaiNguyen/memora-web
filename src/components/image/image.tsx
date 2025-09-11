import { IKImage } from "imagekitio-react";

interface ImageProps {
  path: string;
  src?: any;
  alt: string;
  className?: string;
  w?: number;
  h?: number;
  onClick?: () => void;
}

const Image = ({ path, src, alt, className, w, h, onClick }: ImageProps) => {
  return (
    <IKImage
      onClick={onClick}
      //@ts-ignore
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      src={src}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading="lazy"
      className={className}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
