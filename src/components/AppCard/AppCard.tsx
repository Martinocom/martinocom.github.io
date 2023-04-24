import React from 'react';
import './AppCard.scoped.scss';

interface AppCardProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  url: string;
  description: string;
}

function AppCard(props: AppCardProps) {
  return (
    <div className="Container" onClick={() => window.open(props.url)}>
      <div className="Title">
        <div className="Image">
          <img src={require("../../assets/images/" + props.imgSrc)} alt="App Logo" />
        </div>
        <div>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      </div>

      <div className="Description">
        {props.description}
      </div>
    </div>
  );
};

export { AppCard };
