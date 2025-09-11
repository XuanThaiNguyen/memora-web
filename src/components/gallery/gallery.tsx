import GalleryItem from "../galleryItem/galleryItem";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      {items.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;

// TEMPORARY
const items = [
  {
    id: 1,
    media: "memora/pins/pin1.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: "memora/pins/pin2.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 3,
    media: "memora/pins/pin3.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 4,
    media: "memora/pins/pin4.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 5,
    media: "memora/pins/pin5.jpeg",
    width: 1260,
    height: 1243,
  },
  {
    id: 6,
    media: "memora/pins/pin6.jpeg",
    width: 1260,
    height: 1568,
  },
  {
    id: 7,
    media: "memora/pins/pin7.jpeg",
    width: 1260,
    height: 1234,
  },
  {
    id: 8,
    media: "memora/pins/pin8.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 9,
    media: "memora/pins/pin9.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 10,
    media: "memora/pins/pin10.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 11,
    media: "memora/pins/pin11.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 12,
    media: "memora/pins/pin12.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 13,
    media: "memora/pins/pin13.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 14,
    media: "memora/pins/pin14.jpeg",
    width: 1260,
    height: 1600,
  },
  {
    id: 15,
    media: "memora/pins/pin15.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 16,
    media: "memora/pins/pin16.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 17,
    media: "memora/pins/pin17.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 18,
    media: "memora/pins/pin18.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 19,
    media: "memora/pins/pin19.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 20,
    media: "memora/pins/pin20.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 21,
    media: "memora/pins/pin21.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 22,
    media: "memora/pins/pin22.jpeg",
    width: 1260,
    height: 1890,
  },
  {
    id: 23,
    media: "memora/pins/pin23.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 24,
    media: "memora/pins/pin24.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 25,
    media: "memora/pins/pin25.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 26,
    media: "memora/pins/pin26.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 27,
    media: "memora/pins/pin27.jpeg",
    width: 1260,
    height: 1260,
  },
];
