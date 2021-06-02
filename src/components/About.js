import React from "react";

function About() {
  return (
    <section>
      <h2 className="about__header">About me</h2>
      <p className="about__text">
        Not long after graduating as a Master of Economics and Business
        Administration in 2020, I got bitten by the developer bug, and since
        then I've been quenching my thirst to create things on the web, that are
        visually appealing and challenge me to become a better developer.
      </p>
      <p className="about__text">
        Here are some technologies I play around with to create web-related
        things:
      </p>
      <div className="tech">
        <p>HTML5</p>
        <p>CSS3</p>
        <p>JavaScript</p>
        <p>React</p>
      </div>
    </section>
  );
}

export default About;
