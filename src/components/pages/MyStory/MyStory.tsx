import React, { useEffect, useRef, useState } from "react";
import "./MyStory.scoped.scss";
import autoAnimate from "@formkit/auto-animate";

import { Section } from "../../Section/Section";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MyStoryProps {}

function MyStory(_: MyStoryProps) {
  const [isTextDisabled, setIsTextDisabled] = useState<boolean>(true);
  const aboutMeRef = useRef(null);
  useEffect(() => {
    aboutMeRef.current && autoAnimate(aboutMeRef.current);
  }, [isTextDisabled]);

  return (
    <>
      <h1>My story</h1>

      <div ref={aboutMeRef}>
        {isTextDisabled ? (
          <div>
            <p className="Centered">
              <b>Text is boring</b>: I'm keeping it simple!
              <br />
              <span
                className="highlight clickable"
                onClick={() => setIsTextDisabled(!isTextDisabled)}
              >
                Click here
              </span>{" "}
              for long text version.
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
          <div>
            <p className="Centered">
              <b>Text is rich</b>: in front of your eyes!
              <br />
              But I sugget to go back to{" "}
              <span
                className="highlight clickable"
                onClick={() => setIsTextDisabled(!isTextDisabled)}
              >
                the summary
              </span>
              !
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
    </>
  );
}

export { MyStory };
