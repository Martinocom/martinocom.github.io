import React from 'react';
import './AboutMe.scoped.scss';
import { Section } from "../../components/Section/Section";
import { AppBadge } from "../../components/AppBadge/AppBadge";

import { TbBrandKotlin, TbBrandAndroid, TbBrandApple, TbBrandReactNative, TbBrandTypescript, TbBrandDocker, TbDatabase, TbBrandVscode, TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";
import { SiSpring  } from "react-icons/si";

interface AboutMeProps {}

function AboutMe(props: AboutMeProps) {
  return (
    <div className="Container">
      <h1>My story</h1>
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
  );
};

export { AboutMe };