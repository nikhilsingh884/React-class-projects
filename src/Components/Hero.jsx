import image from "./Images/bw-laptop.jpg";
import "./styles.css";

function Hero() {
  return (
    <>
      <section
        className="hero  w-100 d-flex flex-column justify-content-center align-items-center img-fluid "
        style={{ height: "500px" }}
      >
        <h1 className="text-light">
          Welcome to <span className="text-info">HeroBiz</span>
        </h1>
        <p className="fs-4 text-light px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fugit labore eum.
        </p>
        <div className="button-group d-flex align-items-center mt-3">
          <button className="get-btn px-3 py-2 me-4 border-0 bg-info rounded text-light">
            Get Started
          </button>
          <a className="fs-4 text-decoration-none text-light" href="/">
            <span className="bi bi-play-circle"></span> Watch video
          </a>
        </div>
      </section>
    </>
  );
}
export default Hero;
