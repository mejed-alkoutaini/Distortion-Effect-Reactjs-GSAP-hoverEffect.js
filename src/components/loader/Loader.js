import classes from "./Loader.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
const Loader = ({ isLoading }) => {
  const loaderRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    let initialLoading = gsap.to(lineRef.current, {
      width: "70%",
      duration: 5,
      delay: 0.3,
      overwrite: true,
    });

    gsap.to(headingRef.current, { y: 0, skewY: "0deg", rotate: 0, duration: 1, delay: 0.5, ease: "Expo.easeOut" });

    if (!isLoading) {
      initialLoading.kill();
      gsap.to(lineRef.current, {
        width: "100%",
        duration: 1,
      });

      gsap.to(loaderRef.current, {
        top: "-100%",
        ease: "Expo.easeInOut",
        duration: 2,
        delay: 1,
      });
    }
  }, [isLoading]);

  return (
    <div ref={loaderRef} className={classes.loader}>
      <div className={classes.line}>
        <span ref={lineRef}></span>
      </div>
      <div className={classes["text-box"]}>
        <h2 ref={headingRef}>Confidence</h2>
      </div>
    </div>
  );
};

export default Loader;
