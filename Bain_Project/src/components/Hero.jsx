import heroImg from "../assets/hero-bg.png";

const Hero = () => (
  <section
    className="hero"
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    <h1>We champion the bold to achieve the extraordinary.</h1>
    <p>Answer two questions and put our thinking to work on your challenges.</p>
  </section>
);

export default Hero;
