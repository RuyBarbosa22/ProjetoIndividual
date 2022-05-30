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

  }else{
    setTimeout(() => {
      biblioteca.style.opacity = '1'
    }, 1);
    
    biblioteca.style.display = 'flex'
  }

  btnClicks++

}