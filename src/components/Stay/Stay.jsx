import "./Stay.css";

export default function Stay() {
  return (
    <section className="stay" id="stay">
      <h2>Stay in Una</h2>

      <div className="stay-grid">
        <a
          href="https://www.makemytrip.com/hotels/hotel_parth-details-una.html"
          target="_blank"
          rel="noopener noreferrer"
          className="stay-card"
        >
          <img src="/images/look.jpg" alt="Luxury Hotel in Una" />
          <h3>Luxury Hotels</h3>
          <p>Comfort, views & premium service</p>
        </a>

        <a
          href="https://www.makemytrip.com/hotels/shukrana_resort_and_spa-details-una.html"
          target="_blank"
          rel="noopener noreferrer"
          className="stay-card"
        >
          <img src="/images/images.jpg" alt="Mid range hotel" />
          <h3>Mid-range Hotels</h3>
          <p>Affordable & family friendly</p>
        </a>

        <a
          href="https://www.makemytrip.com/hotels/hotel_suvidha_palace-details-una.html"
          target="_blank"
          rel="noopener noreferrer"
          className="stay-card"
        >
          <img src="/images/hotel.jpg" alt="Budget stay" />
          <h3>Budget Stays</h3>
          <p>Comfortable stays with modern amenities</p>
        </a>
      </div>
    </section>
  );
}
