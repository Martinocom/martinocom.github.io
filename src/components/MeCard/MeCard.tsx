import React from 'react';
import './MeCard.scoped.scss';

interface MeCardProps {}

function MeCard(props: MeCardProps) {
  return (
    <div className="Container">
      <div className="Child">
        <div className="Photo">
          <img className="Image" src={require("../../assets/images/logo.png")} alt="Logo"></img>
        </div>
        <div className="Headers">
          <h1>Hi! I'm Marcin Pabich</h1>
          <h2>Also known as Martinocom</h2>
        </div>
      </div>
      <p className="Paragraph">
        Versatile Frontend Engineer with focus on TypeScript and React Native,
        eager to take on new challenges in programming.
      </p>
    </div>
  );
};

export { MeCard };
