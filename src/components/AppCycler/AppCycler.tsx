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
  SiHtml5,
  SiCss3,
  SiCsharp,
  SiWindows,
  SiXaml,
  SiJitsi,
  SiVisualstudiocode,
  SiVisualstudio,
  SiIntellijidea,
  SiAndroidstudio,
} from "react-icons/si";
import { FaJava, FaMobileAlt, FaExclamationCircle, FaHeart, FaSkull, FaWalking, FaBicycle, FaGuitar, FaFilm, FaMoneyBillWave } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { BiDrink } from "react-icons/bi";
import { IoHardwareChip } from "react-icons/io5";
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
  { icon: <SiReact color="#20A4F3" />, text: "React Native" },
  { icon: <SiReactquery color="#ca1551" />, text: "ReactQuery" },
  { icon: <SiTypescript color="#3F88C5" />, text: "TypeScript" },
  { icon: <SiJavascript color="#F7DF1E" />, text: "JavaScript" },
  { icon: <SiPostman color="#FF6C37" />, text: "Postman" },
  { icon: <SiHtml5 color="#f97d42" />, text: "HTML5" },
  { icon: <SiCss3 color="#1572B6" />, text: "CSS3" },
  { icon: <SiXaml color="#b937e1" />, text: "XAML" },
  { icon: <VscJson color="#F9AE00" />, text: "JSON" },
  { icon: <SiVisualstudiocode color="#007ACC" />, text: "VS Code" },
  { icon: <SiAndroidstudio color="#3DDC84" />, text: "Android Studio" },

  { icon: <SiKotlin color="#f97d42" />, text: "Kotlin" },
  { icon: <FaJava color="#EAC435" />, text: "Java" },
  { icon: <SiCsharp color="#b937e1" />, text: "C#" },
  { icon: <SiDocker color="#2496ED" />, text: "Docker" },
  { icon: <SiSpring color="#6DB33F" />, text: "SpringBoot" },
  { icon: <SiJitsi color="#20A4F" />, text: "Jitsi" },
  { icon: <SiVisualstudio color="#5C2D91" />, text: "Visual Studio" },
  { icon: <SiIntellijidea color="#FF6C37" />, text: "IntelliJ IDEA" },

  { icon: <SiPostgresql color="#336791" />, text: "PostgreSQL" },
  { icon: <SiFirebase color="#FFCA28" />, text: "Firebase" },
  { icon: <SiRealm color="#39477F" />, text: "Realm DB" },

  { icon: <SiBlender color="#F5792A" />, text: "Blender" },
  { icon: <SiRoundcube color="#1572B6" />, text: "Cura" },
  { icon: <SiAutodesk color="#0696D7" />, text: "Fusion 360" },
  { icon: <SiRoundcube color="#61DAFB" />, text: "Photon Workshop" },
  { icon: <SiAdobephotoshop color="#31A8FF" />, text: "Adobe Photoshop" },
  { icon: <SiAudacity color="#0000CC" />, text: "Audacity" },

  { icon: <SiWindows color="#0078D6" />, text: "Windows" },
  { icon: <FaMobileAlt color="#6E7DAB" />, text: "Mobile Modding" },
  { icon: <FaExclamationCircle color="#FF4136" />, text: "Problem Solving" },
  { icon: <IoHardwareChip color="#FFCA28" />, text: "Spec Consultancy" },

  { icon: <FaHeart color="#B3001B" />, text: "Family & Friends" },
  { icon: <FaSkull color="#6E7DAB" />, text: "Me" },
  { icon: <FaWalking color="#23CE6B" />, text: "Hikes & Walks" },
  { icon: <FaBicycle color="#28A745" />, text: "Bicycle" },
  { icon: <FaFilm color="#0089d8" />, text: "Film" },
  { icon: <FaMoneyBillWave color="#28A745" />, text: "Money" },
  { icon: <BiDrink color="#b937e1" />, text: "Party" },
];

export { AppCycler };
