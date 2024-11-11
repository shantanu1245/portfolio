import { Link } from "react-router-dom";

const HeroPreview = () => {
  return (
    <article className="landing__hero">
      <h1 className="hero-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Shantanu Supekar</em>
        <br></br>Web developer
      </h1>
      <p className="gray-text p-tag">Front End Development</p>  
    </article>
  );
};

export default HeroPreview;
