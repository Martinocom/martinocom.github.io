import './Projects.scoped.scss';
import { AppCard } from "../../components/AppCard/AppCard";

import { MdDesignServices } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";



interface ProjectsProps {}

function Projects(props: ProjectsProps) {
  return (
    <div className="Container">
      <AppCard 
        title="Moneyger" 
        subtitle="Money Management App"
        imgSrc="moneyger.png"
        site="https://raw.githubusercontent.com/Martinocom/MoneygerAppSite/main/PolicyPrivacy.md"
        androidStore="https://play.google.com/store/apps/details?id=com.martinocom.moneyger"
        description="Faster than a cheetah, smoother than butter, and won't cost you a penny (aren't you trying to save money?). The ultimate app for money saving that starts as a monthly goal!"
      />

      <AppCard 
        title="G-code Z-Increaser" 
        subtitle="Tool for 3D Printing"
        Icon={<MdDesignServices />}
        repo="https://github.com/Martinocom/g-code-z-increaser"
        description="Increase the z-hegiht of a .gcode file after the first layer. Improve adhesion at cost of awful first layer. Just an experiment."
      />

      <AppCard 
        title="Prevasive Sematic Exam" 
        subtitle="AOP for IoT"
        Icon={<MdDesignServices />}
        repo="https://github.com/Martinocom/pervasive-semantic-exam"
        description="Exploring possibilities of Agent Oriented Programming in the field of IoT. Using Thing Descriptions to auto-detect capabilities."
      />

      <AppCard 
        title="This Site" 
        subtitle="Autopromotion at 100%"
        Icon={<IoGlobeOutline />}
        site="https://martinocom.github.io/"
        repo="https://github.com/Martinocom/Martinocom-Site"
        description="Having a nice self-made portfolio is always a good idea. No premade styles, no copied values: just expression of yourself in a simple way."
      />
    </div>
  );
};

export { Projects };
