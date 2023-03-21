import classes from "./Loader.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
const Loader = ({ isLoading }) => {
  const loaderRef = useRef(null);
  const lineRef = useRef(null);
  
  useEffect(() => {
    let initialLoading = gsap.to(lineRef.current, {
      width: "70%",
      duration: 5,
      delay: 0.3,
      overwrite: true,
    });

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
    </div>
  );
};

export default Loader;
