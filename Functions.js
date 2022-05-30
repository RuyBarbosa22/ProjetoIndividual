window.addEventListener("scroll", function(){
  var nav = document.querySelector(".menu-content");
  nav.classList.toggle("sticky", this.window.scrollY > 0)
})

//função da section invísivel pelo botão

//contador do botão
var btnClicks = 0

function showSection(){

  if(btnClicks%2 == 0){
    
    setTimeout(() => {
      biblioteca.style.opacity = '0'
      
    }, 1);
    biblioteca.style.display = 'none'

    mostrar.style.display = 'flex'
    esconder.style.display = 'none'

  }else{
    setTimeout(() => {
      biblioteca.style.opacity = '1'
    }, 1);
    
    mostrar.style.display = 'none'
    esconder.style.display = 'flex'
    biblioteca.style.display = 'flex'
  }

  btnClicks++

}

//funções de encaminhamento de tela

function Contato(){
  window.location.href = "login.html";
}

function Login(){
  window.location.href = "contato.html";
}