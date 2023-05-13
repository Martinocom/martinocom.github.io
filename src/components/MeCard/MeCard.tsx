import "./MeCard.scoped.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeCardProps {}

function MeCard(props: MeCardProps) {
  return (
    <div className="Container">
      <div className="Child">
        <div className="Photo">
          <img
            className="Image"
            src={require("../../assets/images/logo.png")}
            alt="Logo"
          />
        </div>
        <div className="Headers">
          <h1>
            Hi! I'm <span className="highlight">Marcin Pabich</span>
          </h1>
          <h2>
            Also known as <i>Martinocom</i>
          </h2>
        </div>
      </div>
      <h3 className="Paragraph">
        Versatile Frontend Engineer with focus on <span className="highlight">TypeScript</span> and <span className="highlight">React Native</span>, eager to take on new challenges in programming.
      </h3>
    </div>
  );
}

export { MeCard };
