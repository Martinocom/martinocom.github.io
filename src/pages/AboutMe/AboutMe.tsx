import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import "./AboutMe.scoped.scss";
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

import { AppButton } from "../../components/AppButton/AppButton";
import { Section } from "../../components/Section/Section";

type Section = "personal" | "itel" | "blutec" | "csen" | "others";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AboutMeProps {}

function AboutMe(props: AboutMeProps) {
  const [isTextDisabled, setIsTextDisabled] = useState<boolean>(true);
  const [currentSection, setCurrentSection] = useState<Section>("personal");
  const aboutMeRef = useRef(null);
  const selectionRef = useRef(null);

  useEffect(() => {
    aboutMeRef.current && autoAnimate(aboutMeRef.current);
  }, [isTextDisabled]);

  useEffect(() => {
    selectionRef.current && autoAnimate(selectionRef.current);
  }, [currentSection]);

  return (
    <div className="Container">
      <h1>My story</h1>

      <div ref={aboutMeRef}>
        {isTextDisabled ? (
          <div id="long">
            <p className="Centered">
              <b>Text is boring</b>: <i>would you really want to read an entire story of someone?</i>.<br />
              That's why I'm trying to keep it simple.{" "}
              <span
                className="highlight clickable"
                onClick={() => setIsTextDisabled(!isTextDisabled)}
              >
                Click here
              </span>{" "}
              for text version :)
            </p>

            <div className="Experiences">
              <Section title="1. At the beginning">
                <p>
                  There was no "me" before 15th October 1994. Then I was born in <i>Wrocław</i> (Poland) thanks to a colaboration of both of my mother and father. So that's the date when I decided to
                  make my first real <code className="highlight">Hello world</code>!
                </p>
              </Section>

              <Section title="2. My passion">
                <p>
                  Since I was 🧒 <b className="highlight">6yo</b> I started to explore the magnificent world of IT with my first computer: a <i>white box</i> with Windows 98. Yes, it was that time
                  when I thought computer was inside the Cathode-ray Tube Monitor <i>(I still have it!)</i>.
                </p>
              </Section>

              <Section title="3. Road to Italy">
                <p>
                  Moving out from my country gave to me an important learning mark: I was able to reach a <b className="highlight">conversational</b> level in Italian just only after
                  <b className="highlight"> 6 months</b>! Today I'm a native speaker in 🇵🇱 Polish and 🇮🇹 Italian, not mentioning 🇬🇧 English :)
                </p>
              </Section>

              <Section title="4. Studies">
                <p>
                  At <b className="highlight">Università of Bologna</b> I got my 🎓 <b className="highlight">Master Degree</b> in Computer Engineering and Science. My grade of <code>105/110</code>{" "}
                  perfectly represeting my constant search of perfection that not always fits into the standards.
                </p>
              </Section>

              <Section title="5. Never stop learning">
                <p>
                  Too many things to describe here. My <b className="highlight">programming skills</b> grows since I was a child, but I'm honestly my ‍💻 "
                  <b className="highlight">Real Programmer Life</b>" started when I passed 18yo. Check my work and projects to learn more!
                </p>
              </Section>

              <Section title="6. Today">
                <p>
                  Exploring, learning, and who knows... maybe even teaching! I'm full of energies and ready to accomplish even greater goals: sometimes you need to detatch from the border to explore
                  what's along the river!
                </p>
              </Section>
            </div>
          </div>
        ) : null}
        {!isTextDisabled ? (
          <div id="short">
            <p className="Centered">
              <b>Text is text</b>: <i>you really like formatted things!</i>.<br />
              That's why I'm allowing you to read my story as a book. You can go back to{" "}
              <span
                className="highlight clickable"
                onClick={() => setIsTextDisabled(!isTextDisabled)}
              >
                the summary!
              </span>
            </p>

            <div>
              <p>
                Ever since I was young, I have had a deep affinity for the world of IT. Over nine years ago, I began my career as a programmer with an insatiable curiosity to explore all the different
                avenues of this vast field. In fact, I have explored various aspects of backend development, including working with technologies such as SpringBoot (<b className="highlight">Kotlin</b>
                ), PostgreSQL, and Docker. Through these experiences, I have gained a more comprehensive understanding of the IT field as a whole, and I remain eager to continue exploring new
                opportunities and challenges in this dynamic and exciting industry.
              </p>
              <p>
                As time passed, my focus shifted to <b className="highlight">Frontend Development</b>, despite my initial reservations about working with HTML and Native App platforms, which seemed
                incomplete or disorganized. All changed when I discovered <b className="highlight">React Native</b>. This powerful tool provided a streamlined solution for deploying applications on
                both OS platforms with ease and significantly reducing the cumbersome Angular boilerplate (that I had always found challenging). Through hard work and dedication, I'm becoming an
                expert in React Native, reaching my goal(s).
                <br />
                Now, I am eager to continue exploring and discovering new opportunities in this exciting and dynamic field.
              </p>
              <p>
                I have a <b className="highlight">Master Degree</b> in Computer Science & Engineering, acquired with sweat and hard work at University of Bologna. I'm a very transparent person and I'm
                not afraid to tell that my grade was <code>105/110</code>.
              </p>
              <p>
                In addition to my passion for programming and IT, I also have a keen interest in creating 3D objects using my 3D printer. I have honed my skills in programs like Blender and Fusion
                360, experimenting with different designs and materials to create unique and functional objects. While this is not my primary focus, it has been a fulfilling hobby that allows me to
                explore my creative side and learn new skills. Beyond 3D printing, I have also dabbled in other creative pursuits like using Photoshop and Video-Making. While I am by no means an
                expert in these areas, I enjoy learning new techniques and exploring the possibilities they offer. As with my programming work, my approach to these creative endeavors is largely DIY -
                I prefer to figure things out on my own and learn through trial and error. This DIY approach extends beyond my hobbies and into my daily life as well. I enjoy taking on new challenges
                and solving problems, whether that means fixing something around the house or finding a creative solution to a programming challenge. This mindset has served me well throughout my
                career and has allowed me to continually expand my knowledge and skills in the ever-changing field of IT.
              </p>
              <p>
                <b>Native speaker</b>
                <br />
                🇵🇱 Polish 🇮🇹 Italian
              </p>
              <p>
                <b>Proficient</b>
                <br />
                🇬🇧 English
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <h2>My Working Experience</h2>
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
            text="Blutec"
            color="#3F88C5"
            type={currentSection === "blutec" ? "fill" : "outline"}
            onPress={() => setCurrentSection("blutec")}
          />
          <AppButton
            text="CSEN"
            color="#f97d42"
            type={currentSection === "csen" ? "fill" : "outline"}
            onPress={() => setCurrentSection("csen")}
          />
          <AppButton
            text="Others"
            color="#23CE6B"
            type={currentSection === "others" ? "fill" : "outline"}
            onPress={() => setCurrentSection("others")}
          />
        </div>

        <div
          className="DescriptionContainer"
          ref={selectionRef}
        >
          {currentSection === "personal" ? (
            <div>
              <p>
                Probably the best thing to do is to visit the <b className="highlight clickable">Project</b> page. But if you're too lazy, I'm the creator of{" "}
                <span className="moneyger">Moneyger </span> app. By my own I created (and/or released afterwards) some Open Source projects: small and big ones. Developing my app I contributed in some
                libraries that I'm using, helping solving problems or marking them. Also, this site is 100% made by myself not following any of the templates.
              </p>
              <p>
                As my personal project <span className="moneyger">Moneyger</span> can show, my main focus is on <b className="highlight">Frontend</b>, developing apps with <SiReact color="#20A4F3" />
                <span> React Native</span> and <SiTypescript color="#3F88C5" /> TypeScript{" "}
                <i>
                  (please don't use <SiJavascript color="#EAC435" />
                </i>
                ). As Frontend Dev I know how to test APIs with <SiPostman color="#f97d42" /> Postman and use <SiReactquery color="#ca1551" /> ReactQuery. I'm not scared about Backend things written
                in <SiKotlin color="#f97d42" /> Kotlin <i>(please stop using Java)</i>, as I explored environments of <SiSpring color="#23CE6B" /> SpringBoot,
                <SiPostgresql color="#6E7DAB" /> PostgreSQL and <SiDocker color="#3F88C5" /> Docker. Still, this is not my main focus, although I think that every good programmer should know at least
                what's going on <i>behind the scenes</i>. I also explored other platforms such as <SiRealm color="#B3001B" /> RealmDB and <SiFirebase color="#EAC435" /> Firebase. Important mentions
                goes to <SiWindows color="#167ee0" /> C# and WPF/UWP that I saw many years ago, but I liked them: XAML was way more standardized than HTML!
              </p>
              <p>
                I'm not scared about learning new thigs and I'm very flexible on doing that. They needs to be related on something I like, and when they're, I always achieve my goals quicker than any
                others.
              </p>
              <p>
                I have experience with some 3D modeling software, like <SiBlender color="#f97d42" /> Blender or <SiAutodesk /> Fusion 360.
                <br />I have a <SiRoundcube color="#6E7DAB" /> 3D printer and I like the DIY aspect of the life where you're the
                <i> architect of your own destiny</i>. <SiAdobephotoshop color="#3F88C5" /> Photoshop does not scare me; neither some Video Making software and <SiAudacity color="#0e41cd" /> Audacity
                does.
              </p>
              <p>
                All my previous phones (LG Nexus 5 and Xiaomi Mi A2) survived my SO and Kernel modding. My current Pixel 7 deserve a better threatment (for now). I'm always trying to find the best
                solution for all problems (software or hardware related), but since I can define myself as a "lazy" person, I'll find it way faster in order to achieve my objectives quicker.
              </p>
              <p>
                And finally, I like going to trips by foot or bike, and I really dislike the <i>rush to visit f***ing everything</i> in any place. I like to enjoy the moment, not to take pictures of
                it. I can play guitar and I always wanted to learn play piano, bass and drums <i>(programming wins for now)</i>.
              </p>
            </div>
          ) : null}
          {currentSection === "itel" ? (
            <div>
              <p>
                Hybrid approach to programming: developing Frontend App/Web and parts of Backend. Polishing, managing and publishing some of the company's application on the Playand App Store.
                Research on libraries, components and how to optimize code. Working with PostgreSQL, Jitsi and Docker. Managing some Angular and SharePoint projects.
              </p>

              <p>Building up a RESTful service around Jitsi in order to create videocalls. Building a Frontend capable of using them.</p>
            </div>
          ) : null}
          {currentSection === "blutec" ? (
            <div>
              <p>Managing some JSP projects. I increased my knowledge in HTML, (S)CSS and JavaScript. I helped in making SQL queries for company and legacy DBs.</p>
            </div>
          ) : null}
          {currentSection === "csen" ? (
            <div>
              <p>
                I was one of the two programmers in charge of developing CsenPoomsae Score: a suite consisting in a Backend, Backoffice and an App, to manage an entire Taekwondoo torunament. I was
                fully in charge for the Mobile part and I mostly done the UX part of the Backoffice part. All made in C# and WPF.
              </p>
            </div>
          ) : null}
          {currentSection === "others" ? (
            <div>
              <b>FabLab Romagna</b>
              <br />
              <p>I helped out running the stand during the Maker Fair in Rome. We was presenting some of our projects, as well as some UWP applications.</p>
              <b>Associazione Culturale 'Morena Ugolini'</b>
              <br />
              <p>I helped out managing Facebook page and co-created a page for the event.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ); /*

      <p>
        Ever since I was young, I have had a deep affinity for the world of IT.
        Over nine years ago, I began my career as a programmer with an insatiable
        curiosity to explore all the different avenues of this vast field.
        In fact, I have explored various aspects of backend development,
        including working with technologies such as SpringBoot (<b className="highlight">Kotlin</b>), PostgreSQL, and Docker.
        Through these experiences, I have gained a more comprehensive understanding of the IT
        field as a whole, and I remain eager to continue exploring new opportunities and
        challenges in this dynamic and exciting industry.
      </p>
      <p>
        As time passed, my focus shifted to <b className="highlight">Frontend Development</b>,
        despite my initial reservations about working with HTML and Native App platforms,
        which seemed incomplete or disorganized. All changed when 
        I discovered <b className="highlight">React Native</b>. 
        This powerful tool provided a streamlined 
        solution for deploying applications on both OS platforms with ease and 
        significantly reducing the cumbersome Angular boilerplate (that I had always 
        found challenging). Through hard work and dedication, I'm becoming an expert 
        in React Native, reaching my goal(s).<br/>
        Now, I am eager to continue exploring and discovering new opportunities
        in this exciting and dynamic field.
      </p>
      <p>
        I have a <b className="highlight">Master Degree</b> in Computer Science & Engineering,
        acquired with sweat and hard work at University of Bologna. I'm a very transparent person
        and I'm not afraid to tell that my grade was <code>105/110</code>.
      </p>
      <p>
        In addition to my passion for programming and IT, I also have a keen interest in
        creating 3D objects using my 3D printer. I have honed my skills in programs like
        Blender and Fusion 360, experimenting with different designs and materials to
        create unique and functional objects. While this is not my primary focus, it has
        been a fulfilling hobby that allows me to explore my creative side and learn new skills.

        Beyond 3D printing, I have also dabbled in other creative pursuits like using Photoshop
        and Video-Making. While I am by no means an expert in these areas, I enjoy learning
        new techniques and exploring the possibilities they offer. As with my programming work,
        my approach to these creative endeavors is largely DIY - I prefer to figure things
        out on my own and learn through trial and error.
        
        This DIY approach extends beyond my hobbies and into my daily life as well.
        I enjoy taking on new challenges and solving problems, whether that means fixing
        something around the house or finding a creative solution to a programming challenge.
        This mindset has served me well throughout my career and has allowed me to continually
        expand my knowledge and skills in the ever-changing field of IT.
      </p>
      <p>
        <b>Native speaker</b><br/>
        🇵🇱 Polish  🇮🇹 Italian
      </p>
      <p>
        <b>Proficient</b><br/>
        🇬🇧 English
      </p>

      <div className="Badges">
        <AppBadge
          Icon={<TbBrandReactNative size={23} color="#20A4F3"/>}
          title="React Native"
        />
        <AppBadge
          Icon={<TbBrandTypescript size={23} color="#6E7DAB"/>}
          title="TypeScript"
        />
        <AppBadge
          Icon={<TbBrandKotlin size={23} color="#f97d42"/>}
          title="Kotlin"
        />
        <AppBadge
          Icon={<TbBrandDocker size={23} color="#3F88C5"/>}
          title="Docker"
        />
        <AppBadge
          Icon={<TbDatabase size={23} color="#ca1551"/>}
          title="PostgreSQL"
        />
        <AppBadge
          Icon={<SiSpring size={23} color="#23CE6B"/>}
          title="Spring Boot"
        />
        <AppBadge
          Icon={<TbBrandJavascript size={23} color="#EAC435"/>}
          title="JavaScript"
        />
        <AppBadge
          Icon={<TbBrandHtml5 size={23} color="#FF9770"/>}
          title="HTML 5"
        />
        <AppBadge
          Icon={<TbBrandCss3 size={23} color="#B3001B"/>}
          title="SCSS / CSS"
        />

        <AppBadge
          Icon={<TbBrandAndroid size={23} color="#90A959"/>}
          title="Android ©"
        />
        <AppBadge
          Icon={<TbBrandApple size={23} color="#8B4513"/>}
          title="Apple ©"
        />
      </div>

      <h1>My Working Experience</h1>
      <div className="Experiences">
        <Section title="Personal">
          <p>
            Creator of <a className="Moneyger" href="https://play.google.com/store/apps/details?id=com.martinocom.moneyger">Moneyger</a>, a money-oriented application that
            helps people to reach their goals setting up a monthly budget.
          </p>
          <p>
            Creator of some open-source projects:
            <ul>
              <li><a href="https://github.com/Martinocom/pervasive-semantic-exam">Semantic Web & Agents</a></li>
              <li><a href="https://github.com/Martinocom/g-code-z-increaser">g-code-z-increaser</a></li>
              <li><a href="https://github.com/Martinocom/martinocom.github.io">this page</a></li>
            </ul>
          </p>
        </Section>

        <Section title="I-Tel">
          <p>
            Hybrid approach to programming: developing Frontend App/Web and
            parts of Backend. Polishing, managing and publishing some of the company's
            application on the Playand App Store. Research on libraries, components
            and how to optimize code. Working with PostgreSQL, Jitsi and Docker.
            Managing some Angular and SharePoint projects.
          </p>

          <p>
            Building up a RESTful service around Jitsi in order to create
            videocalls. Building a Frontend capable of using them.
          </p>
        </Section>

        <Section title="Blutec">
          <p>
            Managing a JSP project. HTML + CSS + JavaScript experience.
            Making SQL queries for legacy DBs.
          </p>
        </Section>

        <Section title="CSEN">
          <p>
            I was one of the two programmers in charge of developing CsenPoomsae Score: 
            a suite consisting in a Backend, Backoffice and an App,
            to manage an entire Taekwondoo torunament.
          </p>
        </Section>

        <Section title="FabLab Romagna">
          <p>
            Helping out running the stand at Rome Maker Fair.
          </p>
        </Section>

        <Section title="Associazione Culturale 'Morena Ugolini'">
          <p>
            Helping out running Facebook page. Creating a Web-Page for the event.
          </p>
        </Section>
      </div>

    </div>
  );*/
}

export { AboutMe };
