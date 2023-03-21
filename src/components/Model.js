import { useEffect, useState } from "react";
import classes from "../App.module.css";
import hoverEffect from "hover-effect";
import image1Hair from "../image1-hair.png";
import image1Head from "../image1-head.png";
import image1Body from "../image1-body.png";
import image2Hair from "../image2-hair.png";
import image2Head from "../image2-head.png";
import image2Body from "../image2-body.png";
import dis from "../dis.png";

const Model = ({ slide }) => {
  const [hairAnimate, setHairAnimate] = useState();
  const [headAnimate, setHeadAnimate] = useState();
  const [bodyAnimate, setBodyAnimate] = useState();

  useEffect(() => {
    setHairAnimate(
      new hoverEffect({
        parent: document.querySelector(".image-hair"),
        intensity: 0.3,
        speedIn: 1.3,
        speedOut: 1.3,
        angle1: 90,
        angle2: 90,
        image1: image1Hair,
        image2: image2Hair,
        displacementImage: dis,
        hover: false,
      })
    );
    setHeadAnimate(
      new hoverEffect({
        parent: document.querySelector(".image-head"),
        intensity: 0.1,
        angle: 4,
        speedIn: 1,
        speedOut: 1,
        image1: image1Head,
        image2: image2Head,
        displacementImage: dis,
        hover: false,
      })
    );
    setBodyAnimate(
      new hoverEffect({
        parent: document.querySelector(".image-body"),
        intensity: 0.3,
        angle1: 20,
        angle2: 4,
        image1: image1Body,
        image2: image2Body,
        speedIn: 2,
        speedOut: 2,
        displacementImage: dis,
        hover: false,
      })
    );
  }, []);

  useEffect(() => {
    if (slide === "grey") {
      hairAnimate.next();
      headAnimate.next();
      bodyAnimate.next();
    } else if (slide === "pink") {
      hairAnimate.previous();
      headAnimate.previous();
      bodyAnimate.previous();
    }
  }, [slide]);

  let x = document?.querySelector(".image-hair canvas");

  return (
    <>
      <div className={`image-hair ${classes["item-image"]} ${classes["image-hair"]}`}></div>
      {/*       <img src={image1Headt} className={`image-hair3 ${classes["item-image"]} ${classes["image-hair"]}`}/> */}
      <div className={`image-head ${classes["item-image"]} ${classes["image-head"]}`}></div>
      <div className={`image-body ${classes["item-image"]} ${classes["image-body"]}`}></div>
    </>
  );
};

export default Model;
