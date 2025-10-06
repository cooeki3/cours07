"use client";

import { useEffect, useRef } from "react";
import "./ItemCardClient.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";


const ItemCardClient = () => {
  gsap.registerPlugin(SplitText);

  const titreItemRef = useRef();
  useEffect(() => {
    let containerTitre = document.getElementById("containerTitreItem");
    containerTitre.style.overflow = "hidden";


  }, [])


  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        let containerTitre = document.getElementById("containerTitreItem");
        containerTitre.style.overflow = "visible";
      }

    });
    const splitTitre = SplitText.create("h2", { type: "words, chars" });
    const tlShake = gsap.timeline({ repeat: 20 });

    tlShake.fromTo(splitTitre.words,
      { x: 0, y: 0 },
      { x: "random(-40,40)", y: "random(-40,40)", duration: 0.01 }
    )
    tlShake.fromTo(splitTitre.words,
      { x: 0, y: 0 },
      { x: "random(-40,40)", y: "random(-40,40)", duration: 0.01 }
    )
    tlShake.fromTo(splitTitre.words,
      { x: 0, y: 0 },
      { x: "random(-40,40)", y: "random(-40,40)", duration: 0.01 }
    )
    tlShake.fromTo(splitTitre.words,
      { x: 0, y: 0 },
      { x: "random(-40,40)", y: "random(-40,40)", duration: 0.01 }
    )
    tlShake.fromTo(splitTitre.words,
      { x: 0, y: 0 },
      { x: "random(-40,40)", y: "random(-40,40)", duration: 0.01 }
    )
    tlShake.to(splitTitre.words,
      { x: 0, y: 0, duration: 0.01 }
    )
    tl.fromTo(splitTitre.chars,
      { y: "100%" },
      { y: 0, duration: 0.05, stagger: 0.25, ease: "power1.out" }
    ).add(tlShake)




  }, [])







  return (
    <div className="ItemCardClient">
      <div id="containerTitreItem">
        <h2
          ref={titreItemRef}
        >Titre</h2>
      </div>

      <div className="imgContainerItem">
        <div className="divAbsoluteItem"></div>
        <img src="img/jpg/Sac_01.jpg" alt="Sac a dos" />
      </div>



      <p>La légende raconte qu’il appartient à un influenceur qui a pour hobby de faire des hikes.</p>
    </div>
  )
}

export default ItemCardClient
