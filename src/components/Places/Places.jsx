import "./Places.css";

export default function Places() {
  const places = [
    {
      name: "Chintpurni Temple",
      desc: "Major Shakti Peetha.",
      img: "/images/temple.jpg",
      mapLink: "https://maps.google.com/?q=Chintpurni+Temple+Himachal+Pradesh",
      siteLink: "https://www.matashrichintpurni.com/",
    },
    {
      name: "Pong Dam",
      desc: "Bird sanctuary.",
      img: "/images/PongDam.jpg",
      mapLink: "https://maps.google.com/?q=Pong+Dam+Himachal+Pradesh",
      siteLink: "https://hpkangra.nic.in/tourist-place/pong-dam/",
    },
    {
      name: "Dera Baba Barbhag Singh",
      desc: "Spiritual hilltop site.",
      img: "/images/baba.jpg",
      mapLink: "https://maps.google.com/?q=Dera+Baba+Barbhag+Singh",
      siteLink: "https://hpuna.nic.in/tourist-place/dera-baba-gurbarbhag-singh-mairi/",
    },
  ];

  return (
    <section className="places" id="places">
      <h2>Places to Visit</h2>

      <div className="places-grid">
        {places.map((p, i) => (
          <div className="place-card" key={i}>
            <img src={p.img} alt={p.name} className="place-image" />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>

            <div className="place-links">
              <a
                href={p.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>

              <a
                href={p.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
