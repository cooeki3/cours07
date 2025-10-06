import "./Card.css";

const Card = ({ titre, description, img }) => {
  return (
    <div className="card">
      <img src={`/img/jpg/${img}`} alt={titre} />
      <h3>{titre}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Card;
