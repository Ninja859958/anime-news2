
var resposta = prompt("Essa é uma caixa de diálogo, mais conhecido como prompt em JavaScript");

console.log(resposta); 

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}