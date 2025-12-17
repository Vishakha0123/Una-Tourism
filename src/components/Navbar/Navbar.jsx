import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li><a href="#about">About</a></li>
        <li><a href="#places">Places</a></li>
      </ul>

      <div className="nav-center">
        <img src="/images/logo.jpg" alt="Himachal Pradesh Logo" />
        <span>Una Tourism</span>
      </div>

      <ul className="nav-right">
        <li><a href="#stay">Stay</a></li>
        <li><a href="#culture">Culture</a></li>
        <li><a href="#plan">Plan</a></li>
      </ul>
    </nav>
  );
}
