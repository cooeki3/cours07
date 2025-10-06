"use client";

import "./ItemCardClient.css";


const ItemCardClient = () => {
  return (
    <div className="ItemCardClient">
      <h2>Titre</h2>
      <div className="imgContainerItem">
        <div className="divAbsoluteItem"></div>
        <img src="img/jpg/Sac_01.jpg" alt="Sac a dos" />
      </div>



      <p>La légende raconte qu’il appartient à un influenceur qui a pour hobby de faire des hikes.</p>
    </div>
  )
}

export default ItemCardClient
