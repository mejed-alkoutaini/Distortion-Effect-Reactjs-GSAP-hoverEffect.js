import { useEffect, useRef, useState } from "react";
import classes from "./App.module.css";
import Model from "./components/Model";
import gsap from "gsap";
import Loader from "./components/loader/Loader";
import Texts from "./components/Texts/Texts";

const App = () => {
  const [slide, setSlide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const rightArrow = useRef();
  const leftArrow = useRef();

  const navigationHandler = (arrow) => {
    if (slide === "grey") {
      setSlide("pink");
    } else {
      setSlide("grey");
    }
    gsap.fromTo(arrow.current, { rotate: 0 }, { ease: "Expo.easeOut", rotate: 360, duration: 2 });
  };

  useEffect(() => {
    const removeLoader = () => setIsLoading(false);
    window.addEventListener("load", () => {
      removeLoader();
    });

    return window.removeEventListener("load", removeLoader);
  }, []);

  return (
    <>
      <div className={`${classes[slide]} ${classes.home}`}>
        <Loader isLoading={isLoading} />
        <div className={classes.noise}></div>
        <nav>
          <h2>Confidence</h2>
        </nav>
        <div className={`${classes[slide]} ${classes.bg}`}></div>
        <Model slide={slide} />

        <Texts slide={slide} />

        <div className={classes.arrows}>
          <button onClick={() => navigationHandler(leftArrow)}>
            <img ref={leftArrow} src="/left-arrow.png" />
          </button>
          <button onClick={() => navigationHandler(rightArrow)}>
            <img ref={rightArrow} src="/right-arrow.png" />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
