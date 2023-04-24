import './Projects.scoped.scss';
import { AppCard } from "../../components/AppCard/AppCard";

interface ProjectsProps {}

function Projects(props: ProjectsProps) {
  return (
    <div className="Container">
      <AppCard 
        title="Moneyger" 
        subtitle="Money Management App"
        imgSrc="moneyger.png"
        url="https://play.google.com/store/apps/details?id=com.martinocom.moneyger"
        description="Faster than a cheetah, smoother than butter, and won't cost you a penny (aren't you trying to save money?). The ultimate app for money saving that starts as a monthly goal!"
      />
    </div>
  );
};

export { Projects };
