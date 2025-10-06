import "./Card.css";

const Card = ({ titre, description, img }) => {
  return (
    <div className="card">
      <img className="card-img" src={`/img/jpg/${img}`} alt={titre} />
      <h3 className="card-titre">{titre}</h3>
      <p className="card-description">{description}</p>
      <button className="card-btn">BOO</button>
    </div>
  );
};
export default Card;
