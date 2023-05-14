import React, { useEffect, useRef, useState } from "react";
import "./AppCycler.scoped.scss";
import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiKotlin,
  SiSpring,
  SiPostgresql,
  SiDocker,
  SiPostman,
  SiReactquery,
  SiFirebase,
  SiRealm,
  SiBlender,
  SiAutodesk,
  SiRoundcube,
  SiAdobephotoshop,
  SiAudacity,
  SiWindows,
} from "react-icons/si";
import { TiHeartFullOutline } from "react-icons/ti";
import autoAnimate from "@formkit/auto-animate";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppCyclerProps {}

function AppCycler(props: AppCyclerProps) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (currentItemIndex + 1 < cyclingValues.length) {
        setCurrentItemIndex(currentItemIndex + 1);
      } else {
        setCurrentItemIndex(0);
      }
      containerRef.current && autoAnimate(containerRef.current);
    }, 2500);
  }, [currentItemIndex]);

  return (
    <div className="Container">
      <h1>Because I know something about</h1>
      <div
        className="Animated"
        ref={containerRef}
      >
        {/* Yes, I know, ugly trick, but does the job done ¯\_(ツ)_/¯ */}
        {currentItemIndex % 2 ? (
          <>
            <span>{cyclingValues[currentItemIndex].icon}</span>
            <b>{cyclingValues[currentItemIndex].text}</b>
          </>
        ) : null}
        {!(currentItemIndex % 2) ? (
          <>
            <span>{cyclingValues[currentItemIndex].icon}</span>
            <b>{cyclingValues[currentItemIndex].text}</b>
          </>
        ) : null}
      </div>
    </div>
  );
}

interface CyclingValue {
  icon: JSX.Element;
  text: string;
}

const cyclingValues = [
  { icon: <SiTypescript color="#3F88C5" />, text: "TypeScript" },
  { icon: <SiReact color="#20A4F3" />, text: "React Native" },
  { icon: <SiJavascript color="#EAC435" />, text: "JavaScript" },
  { icon: <SiKotlin color="#f97d42" />, text: "Kotlin" },
  { icon: <SiSpring color="#23CE6B" />, text: "Spring" },
  { icon: <SiPostgresql color="#6E7DAB" />, text: "PostgreSQL" },
  { icon: <SiDocker color="#3F88C5" />, text: "Docker" },
  { icon: <SiPostman color="#f97d42" />, text: "Postman" },
  { icon: <SiReactquery color="#ca1551" />, text: "ReactQuery" },
  { icon: <SiFirebase color="#EAC435" />, text: "Firebase" },
  { icon: <SiRealm color="#B3001B" />, text: "Realm DB" },
  { icon: <SiBlender color="#f97d42" />, text: "Blender" },
  { icon: <SiAutodesk />, text: "Fusion 360" },
  { icon: <SiRoundcube color="#6E7DAB" />, text: "3D Printing" },
  { icon: <SiAdobephotoshop color="#3F88C5" />, text: "Adobe Photoshop" },
  { icon: <SiAudacity color="#2e61ed" />, text: "Audacity" },
  { icon: <SiWindows color="#167ee0" />, text: "WPF / UWP" },
  { icon: <TiHeartFullOutline color="#B3001B" />, text: "Life" },
];

export { AppCycler };
