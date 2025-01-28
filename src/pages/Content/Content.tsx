import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { AboutMe } from "../AboutMe/AboutMe";
import { Home } from "../Home/Home";
import { Projects } from "../Projects/Projects";
import "./Content.scoped.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContentProps {}

function Content(props: ContentProps) {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransistionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage} Content`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route
          index
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export { Content };
