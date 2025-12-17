import "./Map.css";

export default function Map() {
  return (
    <section className="map-section">
      <h2>Locate Una, Himachal Pradesh</h2>

      <div className="map-container">
        <iframe
          title="Una Himachal Pradesh"
          src="https://www.google.com/maps?q=Una,Himachal%20Pradesh&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
