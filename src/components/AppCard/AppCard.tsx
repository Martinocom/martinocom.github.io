import { IoGlobeOutline, IoLogoAppleAppstore, IoLogoGithub, IoLogoGooglePlaystore } from "react-icons/io5";
import "./AppCard.scoped.scss";

import { AppIconButton } from "../AppIconButton/AppIconButton";

type AppCardProps =
  | {
      imgSrc: string;
      title: string;
      subtitle: string;
      description: string;
      site?: string;
      repo?: string;
      androidStore?: string;
      appleStore?: string;
    }
  | {
      Icon: JSX.Element;
      title: string;
      subtitle: string;
      description: string;
      site?: string;
      repo?: string;
      androidStore?: string;
      appleStore?: string;
    };

function AppCard(props: AppCardProps) {
  return (
    <div className="Container">
      <div className="Title">
        <div className="Image">
          {"imgSrc" in props ? (
            <img
              src={require("../../assets/images/" + props.imgSrc)}
              alt="App Logo"
            />
          ) : null}
          <span className="Icon">{"Icon" in props ? props.Icon : null}</span>
        </div>
        <div>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      </div>

      <div className="Description">{props.description}</div>

      <div className="Badges">
        {props.site ? (
          <AppIconButton
            Icon={<IoGlobeOutline />}
            onPress={() => window.open(props.site)}
            color="#20A4F3"
          />
        ) : null}

        {props.repo ? (
          <AppIconButton
            Icon={<IoLogoGithub />}
            onPress={() => window.open(props.repo)}
            color="#6E7DAB"
          />
        ) : null}

        {props.androidStore ? (
          <AppIconButton
            Icon={<IoLogoGooglePlaystore />}
            onPress={() => window.open(props.androidStore)}
            color="#23CE6B"
          />
        ) : null}

        {props.appleStore ? (
          <AppIconButton
            Icon={<IoLogoAppleAppstore />}
            onPress={() => window.open(props.appleStore)}
            color="#8B4513"
          />
        ) : null}
      </div>
    </div>
  );
}

export { AppCard };
