import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle, AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
          <h1>Shayanlab.</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Humanity has always been a curious species, constantly seeking to understand and manipulate the world around us. Through our ingenuity and creativity, we have invented countless tools and machines to help us achieve our goals, from the simple wheel to the powerful computer. Our ability to innovate and improve upon existing technologies has led to incredible advancements in fields such as transportation, communication, energy, medicine, and more.

At the same time, technology has also presented us with new challenges and ethical considerations, such as privacy, security, and the impact on the environment. As we continue to push the boundaries of what is possible, it is important that we approach these issues with thoughtfulness and care, and use technology to benefit all of humanity.

Overall, "who we are" as a species is deeply intertwined with our relationship to technology, and the potential for both progress and risk that it represents. A technology website can explore these themes and offer insights into the latest developments and trends, as well as encourage critical thinking and discussion around the impact of technology on society.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={
              {
                animationDelay: "0.3s",
              }
            }>
              <AiFillGoogleCircle/>
              <p>Google</p>

            </div>
            <div style={
              {
                animationDelay: "0.5s",
              }
            }>
              <AiFillAmazonCircle/>
              <p>Amazon</p>

            </div>

            <div style={
              {
                animationDelay: "0.7s",
              }
            }>
              <AiFillYoutube/>
              <p>YouTube</p>

            </div>
            <div style={
              {
                animationDelay: "1s",
              }
            }>
              <AiFillInstagram/>
              <p>Instagram</p>

            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
