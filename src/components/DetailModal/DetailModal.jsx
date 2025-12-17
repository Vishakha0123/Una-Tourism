import { useEffect, useState } from "react";
import "./DetailModal.css";

export default function DetailModal() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    window.openDetail = (key) => setActive(key);
    window.closeDetail = () => setActive(null);
  }, []);

  if (!active) return null;

  const content = {
    stay: {
      title: "Accommodation in Una",
      text: "Hotels, guest houses, dharamshalas, and luxury stays available.",
      images: ["/images/hotel.jpg"]
    },

    "culture-festivals": {
      title: "Festivals of Una",
      text: "Navratri at Chintpurni, local melas, and village fairs.",
      images: ["/images/festival.jpg"]
    },

    "culture-food": {
      title: "Traditional Cuisine",
      text: "Dham, Siddu, Madra, and local Himachali dishes.",
      images: ["/images/food.jpg"]
    }
  };

  const data = content[active];

  return (
    <div className="modal-overlay" onClick={() => setActive(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>

        <div className="modal-images">
          {data.images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>

        <button onClick={() => setActive(null)}>Close</button>
      </div>
    </div>
  );
}
