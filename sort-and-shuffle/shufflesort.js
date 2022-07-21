let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export function shuffleCards(element) {
  element.addEventListener("click", () => {
    arr.sort(() => Math.random() - 0.5);
    let ulItem = document.getElementById("shuffleAndSort");
    let str = '<ul>'
    arr.forEach((arrItem)=> {
      str += '<li class="li-'+arrItem+'">'+ arrItem + '</li>';
    }); 
    str += '</ul>';
    document.getElementById("first").innerHTML = str;
  });
}
export function sortCards(element) {
  element.addEventListener("click", () => {
    arr.sort(function (a, b) {
      return a - b;
    });
    let ulItem = document.getElementById("shuffleAndSort");
    let str = '<ul>'
    arr.forEach((arrItem)=> {
      str += '<li class="li-'+arrItem+'">'+ arrItem + '</li>';
    }); 
    str += '</ul>';
    document.getElementById("first").innerHTML = str;
  });
}
