import { modale } from "./modele.js";
document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    console.log(e.target);
   /* 
    const elementParent = document.querySelector(".modal-parent"); // Arrière-plan de la modale
    const modal = document.querySelector(".modal"); // La modale elle-même
    const btn_open = document.querySelector("h1 a"); // Bouton d'ouverture
    const btn_closed = document.querySelector(".btn-closed");
    const closed = document.querySelector(".closed");
    const elementFigure = document.querySelector("figure")
    */

    /* object js */

    const modale = {
        elementParent: document.querySelector(".modal-parent"),
        btn_open: document.querySelector("h1, a"),
        btn_closed: document.querySelector(".btn-closed"),
        closed: document.querySelector(".closed"),
        elementFigure: document.querySelector("figure")
    }

    // Ouvrir la modale
    modale.btn_open.addEventListener("click", (e) => {
        e.stopPropagation();
        modale.elementParent.classList.add("appear-modal");
      });

    // Fermer la modale avec les boutons
    modale.btn_closed.addEventListener("click", (e) => {
        e.stopPropagation();
        modale.elementParent.classList.remove("appear-modal");
      });

    modale.closed.addEventListener("click", (e) => {
    e.stopPropagation();
    modale.elementParent.classList.remove("appear-modal");
  });


    // Fermer la modale en cliquant en dehors
    modale.elementFigure.addEventListener("click", (e) => {
        e.stopPropagation();
      });

    // Empêcher la propagation du clic à l’intérieur de la modale
    document.addEventListener("click", () => {
        modale.elementParent.classList.remove("appear-modal"); /* click exterieur */
      });
});
