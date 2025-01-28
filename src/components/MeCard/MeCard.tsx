import "./MeCard.scoped.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeCardProps {}

function MeCard(props: MeCardProps) {
  return (
    <div className="Container">
      <div className="Photo">
        <img
          className="Image"
          src={require("../../assets/images/me.jpg")}
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
  );
}

export { MeCard };
