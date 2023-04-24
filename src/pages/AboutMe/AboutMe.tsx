import React from 'react';
import './AboutMe.scoped.scss';
import { Section } from "../../components/Section/Section";

interface AboutMeProps {}

function AboutMe(props: AboutMeProps) {
  return (
    <div className="Container">
      <h1>My story</h1>
      <p>
        Ever since I was young, I have had a deep affinity for the world of IT. 
        Over nine years ago, I began my career as a programmer with an insatiable 
        curiosity to explore all the different avenues of this vast field. 
        As time passed, my focus shifted to Frontend development, despite my 
        initial reservations about working with HTML and Native App platforms, 
        which seemed incomplete or disorganized. However, my world changed when 
        I discovered <b>React Native</b>. This powerful tool provided a streamlined 
        solution for deploying applications on both OS platforms with ease and 
        significantly reducing the cumbersome Angular boilerplate that I had always 
        found challenging. Through hard work and dedication, I'm becoming an expert 
        in React Native, reaching my goal(s).<br/>
        Now, I am eager to continue exploring 
        and discovering new opportunities in this exciting and dynamic field.
      </p>
      <p>
        I have a <b>Master Degree</b> in Computer Science & Engineering,
        acquired with sweat and hard work at University of Bologna. I'm also
        transparent with my grade, that was <code>105/110</code>.
      </p>
      <p>
        <b>Native speaker</b><br/>
        🇵🇱 Polish  🇮🇹 Italian
      </p>
      <p>
        <b>Proficient</b><br/>
        🇬🇧 English
      </p>

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