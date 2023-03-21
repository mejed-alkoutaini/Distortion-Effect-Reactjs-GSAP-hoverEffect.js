import gsap from "gsap";
import { useEffect, useRef } from "react";
import classes from "./Texts.module.css";
const Texts = ({ slide }) => {
  const pinkNumber = useRef();
  const pinkText1 = useRef();
  const pinkText2 = useRef();
  const greyNumber = useRef();
  const greyText1 = useRef();
  const greyText2 = useRef();
  const pinkParagraph = useRef();
  const greyParagraph = useRef();

  const animateNumberNext = () => {
    gsap.fromTo([pinkNumber.current, pinkText1.current, pinkText2.current], { y: "0" }, { ease: "Expo.easeOut", y: "100%", duration: 2 });
    gsap.fromTo([greyNumber.current, greyText1.current, greyText2.current], { y: "-100%" }, { ease: "Expo.easeOut", y: "0", duration: 2 });
    gsap.fromTo(pinkParagraph.current, { y: "0" }, { ease: "Expo.easeOut", y: "100%", duration: 1, autoAlpha: 0 });
    gsap.fromTo(greyParagraph.current, { y: "-20%" }, { ease: "Expo.easeOut", y: "0", duration: 2, autoAlpha: 1, delay: 0.3 });
  };
  const animateNumberPrev = () => {
    gsap.fromTo([pinkNumber.current, pinkText1.current, pinkText2.current], { y: "-100%" }, { ease: "Expo.easeOut", y: "0", duration: 2 });
    gsap.fromTo([greyNumber.current, greyText1.current, greyText2.current], { y: "0" }, { ease: "Expo.easeOut", y: "100%", duration: 2 });
    gsap.fromTo(greyParagraph.current, { y: "0" }, { ease: "Expo.easeOut", y: "100%", duration: 1, autoAlpha: 0 });
    gsap.fromTo(pinkParagraph.current, { y: "-20%" }, { ease: "Expo.easeOut", y: "0", duration: 2, autoAlpha: 1, delay: 0.3 });
  };

  useEffect(() => {
    if (!slide) return;

    if (slide === "grey") {
      animateNumberNext();
    } else {
      animateNumberPrev();
    }
  }, [slide]);

  return (
    <>
      <div className={classes["left-text"]}>
        <div className={classes.number}>
          <span>0</span>
          <span ref={pinkNumber}>1</span>
          <span ref={greyNumber}>2</span>
        </div>

        <p ref={pinkParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud
        </p>
        <p ref={greyParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud
        </p>
      </div>

      <div className={classes["right-text"]}>
        <h2>
          Come
          <br />
          <div>
            <span ref={pinkText1}>Trick</span>
            <span ref={greyText1}>Crack</span>
          </div>
          My
          <br />
          <div>
            <span ref={pinkText2}>Mind</span>
            <span ref={greyText2}>Brain</span>
          </div>
        </h2>
      </div>
    </>
  );
};

export default Texts;
