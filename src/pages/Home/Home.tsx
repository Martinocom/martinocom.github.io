import React from 'react';
import './Home.scoped.scss';
import { MeCard } from "../../components/MeCard/MeCard";
import { Section } from "../../components/Section/Section";
import { Paragraph } from "../../components/Paragraph/Paragraph";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <MeCard />
      
      <div className="Info">
        <Section title="Skills & Experience">
          <Paragraph title="9+ years of programming">
            From Backend to Frontend, from Apps to SQL queries. I touched everything in order to find what I really like.
          </Paragraph>

          <Paragraph title="React Native & TypeScript">
            My main focus is creating stunning apps that can be used by many without hassle.
          </Paragraph>

          <Paragraph title="UX Design">
            I always design with the user in mind. I'd like to imagine myself as the final user that wants the feature "right there".
          </Paragraph>

          <Paragraph title="Working with companies">
            <ul>
              <li><b>I-Tel</b><br/> Hybrid development. <code>BE</code> (<code>Kotlin</code>, <code>SpringBoot</code>) App management and publication on store (<code>React Native</code>), PostgreSQL, Docker</li>
              <li><b>Blutec</b><br/> Backend/frontend management and SQL query creation</li>
            </ul>
          </Paragraph>

          <Paragraph title="Associations and Stages">
            <ul>
              <li><b>FabLab Romagna</b><br/> Helping with stand at Rome Maker Fair, presenting an UWP application.</li>
              <li><b>Pneumatic Center</b><br/> Microcontrollers programming</li>
              <li><b>Associazione Culturale "Morena Ugolini"</b><br/> Facebook page management and creation of a simple Web Page for the Event</li>
            </ul>
          </Paragraph>
        </Section>

        <Section title="Projects & Collabs">
          <Paragraph title="Moneyger" flag="beta-testing" url="https://play.google.com/store/apps/details?id=com.martinocom.moneyger">
            Faster than a cheetah, smoother than butter, and won't cost you a penny (aren't you trying to save money?). The ultimate app for money saving that starts as a monthly goal!
          </Paragraph>

          <Paragraph title="CSEN Poomsae Score" flag="private">
            Backend, Backoffice and App for managing Taekwondo tournaments.
          </Paragraph>

          <Paragraph title="Semantic Web & Agents" flag="open-source" url="https://github.com/Martinocom/pervasive-semantic-exam">
            Agent-Oriented Programming nested with Semantic Web and IoT.
          </Paragraph>

          <Paragraph title="g-code-z-increaser" flag="open-source" url="https://github.com/Martinocom/g-code-z-increaser">
            Spin-Off project that post-process a <code>.gcode</code> file to increase the Z height after the first layer.
          </Paragraph>

          <Paragraph title="This page" flag="open-source" url="https://github.com/Martinocom/martinocom.github.io">
            100% self-made. No styles, no templates. Pure React.js and experience.
          </Paragraph>
        </Section>
      </div>
    </>
  );
};

export { Home };
