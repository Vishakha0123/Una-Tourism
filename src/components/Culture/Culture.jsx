import "./Culture.css";

export default function Culture({ openModal }) {
  return (
    <section className="culture" id="culture">
      <h2>Culture of Una</h2>
      <p>
        Una showcases rich Himachali culture through local festivals, folk music,
        temples, and traditional cuisine.
      </p>

      <div className="culture-grid">
        <div
          className="culture-card"
          onClick={() => openModal("culture-festivals")}
        >
          <img src="/images/festival.jpg" alt="Festivals of Una" />
          <h3>Festivals</h3>
        </div>

        <div
          className="culture-card"
          onClick={() => openModal("culture-music")}
        >
          <img src="/images/naati.jpg" alt="Folk Music" />
          <h3>Folk Dance</h3>
        </div>

        <div
          className="culture-card"
          onClick={() => openModal("culture-food")}
        >
          <img src="/images/Dham.jpg" alt="Traditional Food" />
          <h3>Traditional Cuisine</h3>
        </div>
      </div>
    </section>
  );
}
