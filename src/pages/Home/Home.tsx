import React from "react";
import { BsBookHalf, BsBriefcaseFill, BsCodeSlash, BsFillCalendarCheckFill, BsKanban } from "react-icons/bs";

import { AppBadge } from "../../components/AppBadge/AppBadge";
import { MeCard } from "../../components/MeCard/MeCard";
import "./Home.scoped.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <MeCard />

      <div className="BadgeContainer">
        <AppBadge
          Icon={
            <BsFillCalendarCheckFill
              size={23}
              color="#009272"
            />
          }
          title="9+ Years of Experience"
          text="Programming is flowing inside me"
        />

        <AppBadge
          Icon={
            <BsBriefcaseFill
              size={23}
              color="#f97d42"
            />
          }
          title="Rich working history"
          text="Exploring and coding in all shapes"
        />

        <AppBadge
          Icon={
            <BsKanban
              size={23}
              color="#EAC435"
            />
          }
          title="Project-Oriented"
          text="Show me the code, not the theory"
        />

        <AppBadge
          Icon={
            <BsCodeSlash
              size={23}
              color="#20A4F3"
            />
          }
          title="Universal knowledge"
          text="No scecrets in Frontend and Backend"
        />

        <AppBadge
          Icon={
            <BsBookHalf
              size={23}
              color="#ca1551"
            />
          }
          title="Always Learning"
          text="Never stopping self-improvement"
        />
      </div>
    </>
  );
};

export { Home };
