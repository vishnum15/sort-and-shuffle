import "./style.css";

import { shuffleCards, sortCards } from "./shufflesort.js";

document.querySelector("#app").innerHTML = `
  <div> 
  <div id="first" class="first">
  
  </div>
  
    <div id="second" class="second">
      <button id="shuffle" type="button" class="btn">Shuffle</button>
      <button id="sort" type="button" class="btn">Sort</button>
    </div>
    
  </div>
`;
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("sort").click();
});

shuffleCards(document.querySelector("#shuffle"));
sortCards(document.querySelector("#sort"));
