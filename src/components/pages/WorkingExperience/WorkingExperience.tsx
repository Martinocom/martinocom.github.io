import React, { useEffect, useRef, useState } from "react";
import "./WorkingExperience.scoped.scss";
import { useNavigate } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
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

import { AppBadge } from "../../AppBadge/AppBadge";
import { AppButton } from "../../AppButton/AppButton";
import { AppCycler } from "../../AppCycler/AppCycler";

type Section = "personal" | "itel" | "blutec" | "csen" | "others";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WorkingExperienceProps {}

function WorkingExperience(props: WorkingExperienceProps) {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<Section>("personal");
  const selectionRef = useRef(null);

  useEffect(() => {
    selectionRef.current && autoAnimate(selectionRef.current);
  }, [currentSection]);

  return (
    <>
      <h1>My Working Experience</h1>
      <AppCycler />

      <div>
        <div className="ButtonList">
          <AppButton
            text="Personal"
            type={currentSection === "personal" ? "fill" : "outline"}
            onPress={() => setCurrentSection("personal")}
          />
          <AppButton
            text="I-Tel"
            color="#6E7DAB"
            type={currentSection === "itel" ? "fill" : "outline"}
            onPress={() => setCurrentSection("itel")}
          />
          <AppButton
            text="CSEN"
            color="#f97d42"
            type={currentSection === "csen" ? "fill" : "outline"}
            onPress={() => setCurrentSection("csen")}
          />
          <AppButton
            text="Blutec"
            color="#3F88C5"
            type={currentSection === "blutec" ? "fill" : "outline"}
            onPress={() => setCurrentSection("blutec")}
          />
          <AppButton
            text="Others"
            color="#23CE6B"
            type={currentSection === "others" ? "fill" : "outline"}
            onPress={() => setCurrentSection("others")}
          />
        </div>

        <div ref={selectionRef}>
          {currentSection === "personal" ? (
            <>
              <p className="DescriptionContainer Text">
                Probably the best thing to do is to visit the{" "}
                <b
                  className="highlight clickable"
                  onClick={() => navigate("/projects")}
                >
                  Project
                </b>{" "}
                page. Otherwise, keep reading for more news!
              </p>

              <div className="DescriptionContainer">
                <h2>Frontend</h2>
                <p>
                  As my personal project <span className="moneyger">Moneyger</span> can show, my main focus is on Frontend.
                </p>{" "}
                <div className="ButtonList Small">
                  <AppBadge
                    Icon={<SiReact color="#20A4F3" />}
                    title="React Native"
                  />
                  <AppBadge
                    Icon={<SiReactquery color="#ca1551" />}
                    title="ReactQuery"
                  />
                  <AppBadge
                    Icon={<SiTypescript color="#3F88C5" />}
                    title="TypeScript"
                  />
                  <AppBadge
                    Icon={<SiJavascript color="#EAC435" />}
                    title="JavaScript *"
                  />
                  <AppBadge
                    Icon={<SiPostman color="#f97d42" />}
                    title="Postman"
                  />
                  <AppBadge
                    Icon={<SiHtml5 color="#f97d42" />}
                    title="HTML *"
                  />
                  <AppBadge
                    Icon={<SiCss3 color="#3F88C5" />}
                    title="CSS *"
                  />
                  <AppBadge
                    Icon={<SiXaml color="#b937e1" />}
                    title="XAML*"
                  />
                  <AppBadge
                    Icon={<VscJson color="#EAC435" />}
                    title="JSON"
                  />
                  <AppBadge
                    Icon={<SiVisualstudiocode color="#3F88C5" />}
                    title="VS Code"
                  />
                  <AppBadge
                    Icon={<SiAndroidstudio color="#23CE6B" />}
                    title="Android Studio"
                  />
                </div>
                <i>* I don't like it, but I know it.</i>
              </div>

              <div className="DescriptionContainer">
                <h2>Backend</h2>
                <p>I'm not scared about Backend things; they're part of my experience but they aren't on my scope.</p>{" "}
                <div className="ButtonList Small">
                  <AppBadge
                    Icon={<SiKotlin color="#f97d42" />}
                    title="Kotlin"
                  />
                  <AppBadge
                    Icon={<FaJava color="#EAC435" />}
                    title="Java*"
                  />
                  <AppBadge
                    Icon={<SiCsharp color="#b937e1" />}
                    title="C# (UWP / WPF)"
                  />
                  <AppBadge
                    Icon={<SiDocker color="#3F88C5" />}
                    title="Docker"
                  />
                  <AppBadge
                    Icon={<SiSpring color="#23CE6B" />}
                    title="SpringBoot"
                  />
                  <AppBadge
                    Icon={<SiJitsi color="#3F88C5" />}
                    title="Jitsi *"
                  />
                  <AppBadge
                    Icon={<SiIntellijidea color="#666373" />}
                    title="IntelliJ"
                  />
                  <AppBadge
                    Icon={<SiVisualstudio color="#b937e1" />}
                    title="Visual Studio"
                  />
                </div>
                <i>
                  * I <b>hate</b> like it, but I know it.
                </i>
              </div>

              <div className="DescriptionContainer">
                <h2>Data</h2>
                <p>I hate working and modeling data: I'd rather prefer to show it! Still, I have some knowledge also here.</p>{" "}
                <div className="ButtonList Small">
                  <AppBadge
                    Icon={<SiPostgresql color="#6E7DAB" />}
                    title="PostgreSQL"
                  />
                  <AppBadge
                    Icon={<SiRealm color="#B3001B" />}
                    title="Realm DB"
                  />
                  <AppBadge
                    Icon={<SiFirebase color="#EAC435" />}
                    title="Firebase"
                  />
                </div>
              </div>

              <div className="DescriptionContainer">
                <h2>Image / Video / Audio / 3D</h2>
                <p>I worked with softwares to elaborate images and 3D projects. I have a 3D printer too!</p>{" "}
                <div className="ButtonList Small">
                  <AppBadge
                    Icon={<SiAdobephotoshop color="#3F88C5" />}
                    title="Photoshop"
                  />
                  <AppBadge
                    Icon={<SiAudacity color="#2e61ed" />}
                    title="Audacity"
                  />
                  <AppBadge
                    Icon={<SiBlender color="#f97d42" />}
                    title="Blender"
                  />
                  <AppBadge
                    Icon={<SiRoundcube color="#0089d8" />}
                    title="Cura"
                  />
                  <AppBadge
                    Icon={<SiRoundcube color="#47bbff" />}
                    title="Photon Workshop"
                  />
                  <AppBadge
                    Icon={<SiAutodesk />}
                    title="Fusion 360"
                  />
                </div>
              </div>

              <div className="DescriptionContainer">
                <h2>Modding & Knowledge</h2>
                <p>
                  I'd like to cite one of the YouTuber I follow: <i>"Life is a DIY project"</i> <span className="Small">(JerryRigEverything)</span>
                </p>
                <div className="ButtonList Small">
                  <AppBadge
                    Icon={<FaMobileAlt color="#6E7DAB" />}
                    title="Phone Modding"
                  />
                  <AppBadge
                    Icon={<SiWindows color="#0089d8" />}
                    title="OS Troubleshooter"
                  />
                  <AppBadge
                    Icon={<FaExclamationCircle color="#EAC435" />}
                    title="Problem Solver"
                  />
                  <AppBadge
                    Icon={<IoHardwareChip />}
                    title="Spec consultant"
                  />
                </div>
              </div>

              <div className="DescriptionContainer">
                <h2>Free Time</h2>
                <p>Going above my programmer life, there are other things I care about.</p>{" "}
                <div className="ButtonList Small">
                  <AppBadge
                    Icon={<FaHeart color="#B3001B" />}
                    title="Friends & Family"
                  />
                  <AppBadge
                    Icon={<FaSkull />}
                    title="Myself"
                  />
                  <AppBadge
                    Icon={<FaWalking color="#23CE6B" />}
                    title="Hikes & Walks"
                  />
                  <AppBadge
                    Icon={<FaBicycle color="#11c9bd" />}
                    title="Bicycle"
                  />
                  <AppBadge
                    Icon={<FaMoneyBillWave color="#23CE6B" />}
                    title="Money"
                  />
                  <AppBadge
                    Icon={<FaGuitar color="#f97d42" />}
                    title="Music"
                  />
                  <AppBadge
                    Icon={<FaFilm color="#0089d8" />}
                    title="Films"
                  />
                  <AppBadge
                    Icon={<BiDrink color="#6E7DAB" />}
                    title="Party"
                  />
                </div>
              </div>
            </>
          ) : null}
          {currentSection === "itel" ? (
            <div className="DescriptionContainer Justified">
              <p>
                Hybrid approach to programming: developing Frontend App/Web and parts of Backend. Polishing, managing and publishing some of the company's application on the Playand App Store.
                Research on libraries, components and how to optimize code. Working with PostgreSQL, Jitsi and Docker. Managing some Angular and SharePoint projects.
              </p>

              <p>Building up a RESTful service around Jitsi in order to create videocalls. Building a Frontend capable of using them.</p>

              <p className="Small">
                <i>
                  <b>Period:</b> 2021 - 2023
                </i>
              </p>
            </div>
          ) : null}
          {currentSection === "blutec" ? (
            <div className="DescriptionContainer Justified">
              <p>Managing some JSP projects. I increased my knowledge in HTML, (S)CSS and JavaScript. I helped in making SQL queries for company and legacy DBs.</p>

              <p className="Small">
                <i>
                  <b>Period:</b> 2018
                </i>
              </p>
            </div>
          ) : null}
          {currentSection === "csen" ? (
            <div className="DescriptionContainer Justified">
              <p>
                I was one of the two programmers in charge of developing CsenPoomsae Score: a suite consisting in a Backend, Backoffice and an App, to manage an entire Taekwondoo torunament. I was
                fully in charge for the Mobile part and I mostly done the UX part of the Backoffice part. All made in C# and WPF.
              </p>

              <p className="Small">
                <i>
                  <b>Period:</b> 2019 - 2021
                </i>
              </p>
            </div>
          ) : null}
          {currentSection === "others" ? (
            <div className="DescriptionContainer Justified">
              <h3>
                Associazione Culturale 'Morena Ugolini' <i className="Small">(2015)</i>
              </h3>
              <p>I helped out managing Facebook page and co-created a page for the event.</p>

              <h3>
                FabLab Romagna <i className="Small">(2014)</i>
              </h3>
              <p>I helped out running the stand during the Maker Fair in Rome. We was presenting some of our projects, as well as some UWP applications.</p>

              <h3>
                Stage offered by "A.I.R. PNEUMATIC CENTER S.R.L." <i className="Small">(2013)</i>
              </h3>
              <p>Programming (micro)controllers in C-like languages.</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export { WorkingExperience };
