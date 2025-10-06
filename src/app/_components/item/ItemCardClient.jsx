"use client";

import { useEffect, useRef } from "react";
import "./ItemCardClient.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";


const ItemCardClient = () => {
  gsap.registerPlugin(SplitText);

  const titreItemRef = useRef();
  // useEffect(() => {
  //   let containerTitre = document.getElementById("containerTitreItem");
  //   containerTitre.style.overflow = "hidden";


  // }, [])


  const descrItemRef = useRef();
  const imgItemRef = useRef();


  useGSAP(() => {
    const tl = gsap.timeline({
      // onComplete: () => {
      //   let containerTitre = document.getElementById("containerTitreItem");
      //   containerTitre.style.overflow = "visible";
      // }

    });

    const splitTitre = SplitText.create("h2", { type: "words, chars" });
    const tlShake = gsap.timeline({ repeat: 20 });
    const tlDepart = gsap.timeline();
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
    tl.to(titreItemRef.current,
      {opacity:1,duration:0}
    )
    tl.fromTo(splitTitre.chars,
      { y: "100%" ,opacity:0},
      { y: 0,opacity:1, duration: 0.05, stagger: 0.25, ease: "power1.out" }
    ).add(tlShake)



    tlDepart.to(descrItemRef.current,
      { position: "absolute", duration: 0, opacity: 0 }
    )
    tlDepart.to(imgItemRef.current,
      { position: "absolute", duration: 0, opacity: 0 },
      "<"
    )

    tlDepart.to(titreItemRef.current,
      { y: "20vh", duration: 0 ,opacity:1}
    )

    tlDepart.to(splitTitre.words,
      { duration: 0 ,opacity:1},
      "<"
    )

    tlDepart.fromTo(descrItemRef.current,
      { opacity: 0, position: "absolute" },
      { opacity: 1, position: "relative", duration: 1, delay: 0.5 }
    )

    tlDepart.fromTo(imgItemRef.current,
      { opacity: 0, position: "absolute" },
      { opacity: 1, position: "relative", duration: 1 }
      , "<"
    )

    tlDepart.to(titreItemRef.current,
      { x: 0, y: 0, duration: 0, ease: "power1.out",opacity:1 },
      "<"
    )
    tlDepart.add(tl);





  }, [])







  return (
    <div className="ItemCardClient">
      <div ref={titreItemRef} id="containerTitreItem">
        <h2

        >Titre</h2>
      </div>

      <div ref={imgItemRef} className="imgContainerItem">
        <div className="divAbsoluteItem"></div>
        <img src="img/jpg/Sac_01.jpg" alt="Sac a dos" />
      </div>



      <p ref={descrItemRef} >La légende raconte qu’il appartient à un influenceur qui a pour hobby de faire des hikes.</p>
    </div>
  )
}

export default ItemCardClient
