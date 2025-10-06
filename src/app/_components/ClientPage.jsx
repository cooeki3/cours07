"use client";
import Card from "./Card";
import "./ClientPage.css";
import contenu from "./../_data/contenu.json";

const ClientPage = () => {
  return (
    <div className="card-container">
      {contenu.map((item, index) => (
        <Card
          key={index}
          titre={item.titre}
          description={item.description}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default ClientPage;
