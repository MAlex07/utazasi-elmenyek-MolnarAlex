import { Elmeny } from "./elmeny"

function Megjelenit(){
  const hely = document.getElementById("helyszin") as HTMLInputElement;
  const utazasHely = hely.value;
  const sztori = document.getElementById("sztori") as HTMLInputElement;
  const utazasSztori = sztori.value;
  const evszak = document.getElementById("evszak") as HTMLInputElement;
  const utazasEvszak = evszak.value;
  const gomb = document.getElementById("bekuldes") as HTMLInputElement;

  gomb.addEventListener('submit', (e)=>{
    e.preventDefault()
    const h2 = document.createElement("h2")
    h2.textContent = utazasHely
    const p = document.createElement("p")
    p.textContent = utazasSztori
    const main = document.getElementById("megjelenites")
    const article = document.createElement("article")

    article.appendChild(h2)
    article.appendChild(p)
    main?.appendChild(article)


  })
}


document.addEventListener("DOMContentLoaded", ()=>{
  const post = new Elmeny("Barcelona", "Várost néztünk", "tavasz");
  Megjelenit()
})