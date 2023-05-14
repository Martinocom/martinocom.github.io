import "./AboutMe.scoped.scss";

import { MyStory } from "../../components/pages/MyStory/MyStory";
import { WorkingExperience } from "../../components/pages/WorkingExperience/WorkingExperience";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AboutMeProps {}

function AboutMe(props: AboutMeProps) {
  return (
    <div className="Container">
      <WorkingExperience />
      <MyStory />
    </div>
  );
}

export { AboutMe };
