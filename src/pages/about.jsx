import React from "react";
import { Card } from "react-bootstrap";
import { StackedCardsInteraction } from "../components/stackedCards.tsx";
import About2 from "../components/About.jsx";
const About = () => {
  const cards = [
    {
      image: "/img1.jpg",
      title: "",
      description: "",
    },
    {
      image: "/img2.jpg",
      title: "",
      description: "",
    },
    {
      image: "/img3.jpg",
      title: "",
      description: "",
    },
  ];
  return (
    <>
    
      <div style={{ paddingTop:"3vh",overflow: "hidden" }} className=" mt-10">
        <StackedCardsInteraction
          cards={cards}
          spreadDistance={300}
          rotationAngle={3} 
          animationDelay={0.15} 
        />
      </div>
      <div>
        <About2 />
      </div>
    </>
  );
};

export default About;
