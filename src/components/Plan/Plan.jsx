import "./Plan.css";

export default function Plan() {
  const plans = [
    {
      title: "How to Reach",
      desc: "Well connected by road & rail. Nearest airport is Chandigarh.",
      icon: "🚌",
      link: "https://hpuna.nic.in/how-to-reach/",
    },
    {
      title: "Best Time to Visit",
      desc: "October to March is ideal for pleasant weather & sightseeing.",
      icon: "🌤️",
      link: "https://www.google.com/search?q=Best+time+to+visit+Una+Himachal+Pradesh",
    },
    {
      title: "Stay & Booking",
      desc: "Luxury, mid-range & budget hotels available for all travelers.",
      icon: "🏨",
      link: "https://www.tripadvisor.in/Hotels-g1156040-Una_Una_District_Himachal_Pradesh-",
    },
    {
      title: "Local Travel",
      desc: "Taxis, buses & autos are easily available within the city.",
      icon: "🚕",
      link: "https://www.google.com/search?q=Local+transport+in+Una+Himachal+Pradesh",
    },
  ];

  return (
    <section className="plan" id="plan">
      <h2>Plan Your Trip</h2>
      <p className="plan-subtitle">
        Everything you need to plan a smooth and memorable visit to Una
      </p>

      <div className="plan-grid">
        {plans.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="plan-card"
          >
            <div className="plan-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

