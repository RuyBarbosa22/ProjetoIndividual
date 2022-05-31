window.addEventListener("scroll", function(){
  var nav = document.querySelector(".menu-content");
  nav.classList.toggle("sticky", this.window.scrollY > 0)
})

//função da section invísivel pelo botão

//contador do botão ver mais
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
  window.location.href = "login.html"; //encaminhamento tela de Login
}

function Login(){
  window.location.href = "contato.html"; //encaminhamento tela de Contato
}


//função do quiz

var erros = 0
var acertos = 0
var ContadorQuestão = 0;
var Questoes = ["Qual o minério mais raro do minecraft?", "Quantos GTA existem?", "Qual desses é exclusivo da Sony?", 
"Qual desses é exclusivo do Xbox?", "Qual desses é exclusivo da Nintendo?", "Em Sonic, quantas esmeraldas do caos existem?",
"Qual o nome da princesa de Mario?", "Qual personagem é o mestre das runas em league of legends?", "Qual o primeiro ginásio em pokemon fire red?",
"Em celeste, qual o nome da personagem principal?"];


var respostasC = ["Netherite", "13", "Bloodborne", "Halo", "Zelda", "7", "Peach", "Ryze", "Pedra", "Madeline"];

opt1 = {alternativaA: "Ouro", alternativaB: "Netherite", alternativaC: "Diamante", alternativaD: "Esmeralda"};

opt2 = {alternativaA: "7", alternativaB: "11", alternativaC: "13", alternativaD: "5"};

opt3 = {alternativaA: "Forza Horizizon", alternativaB: "Sonic", alternativaC: "Plants Vs Zombies", alternativaD: "Bloodborne"};

opt4 = {alternativaA: "Halo", alternativaB: "Hollow Knight", alternativaC: "Sekiro", alternativaD: "Celeste"};

opt5 = {alternativaA: "Vallheim", alternativaB: "New World", alternativaC: "Zelda", alternativaD: "Rocket League"};

opt6 = {alternativaA: "10", alternativaB: "5", alternativaC: "8", alternativaD: "7"};

opt7 = {alternativaA: "Peach", alternativaB: "Silver", alternativaC: "Isabel", alternativaD: "Mônica"};

opt8 = {alternativaA: "Jax", alternativaB: "Ryze", alternativaC: "Aurelion Sol", alternativaD: "Xerath"};

opt9 = {alternativaA: "Pedra", alternativaB: "Água", alternativaC: "Grama", alternativaD: "Elétrico"};

opt10 = {alternativaA: "Mabel", alternativaB: "Melina", alternativaC: "Madeline", alternativaD: "Merlin"};


function Quiz() {

  if(ContadorQuestão == 0){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA1.innerHTML = `A - ${opt1.alternativaA}`
  alternativaB1.innerHTML = `B - ${opt1.alternativaB}`
  alternativaC1.innerHTML = `C - ${opt1.alternativaC}`
  alternativaD1.innerHTML = `D - ${opt1.alternativaD}`

  }

  if(ContadorQuestão == 1){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA2.innerHTML = `A - ${opt2.alternativaA}`
  alternativaB2.innerHTML = `B - ${opt2.alternativaB}`
  alternativaC2.innerHTML = `C - ${opt2.alternativaC}`
  alternativaD2.innerHTML = `D - ${opt2.alternativaD}`

  ContadorQuestão++
  }


  if(ContadorQuestão == 2){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA3.innerHTML = `A - ${opt3.alternativaA}`
  alternativaB3.innerHTML = `B - ${opt3.alternativaB}`
  alternativaC3.innerHTML = `C - ${opt3.alternativaC}`
  alternativaD3.innerHTML = `D - ${opt3.alternativaD}`

  ContadorQuestão++
  }


  if(ContadorQuestão == 3){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA4.innerHTML = `A - ${opt4.alternativaA}`
  alternativaB4.innerHTML = `B - ${opt4.alternativaB}`
  alternativaC4.innerHTML = `C - ${opt4.alternativaC}`
  alternativaD4.innerHTML = `D - ${opt4.alternativaD}`

  ContadorQuestão++
  }


  if(ContadorQuestão == 4){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA5.innerHTML = `A - ${opt5.alternativaA}`
  alternativaB5.innerHTML = `B - ${opt5.alternativaB}`
  alternativaC5.innerHTML = `C - ${opt5.alternativaC}`
  alternativaD5.innerHTML = `D - ${opt5.alternativaD}`

  ContadorQuestão++
  }


  if(ContadorQuestão == 5){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA6.innerHTML = `A - ${opt6.alternativaA}`
  alternativaB6.innerHTML = `B - ${opt6.alternativaB}`
  alternativaC6.innerHTML = `C - ${opt6.alternativaC}`
  alternativaD6.innerHTML = `D - ${opt6.alternativaD}`

  ContadorQuestão++
  }


  if(ContadorQuestão == 6){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA7.innerHTML = `A - ${opt7.alternativaA}`
  alternativaB7.innerHTML = `B - ${opt7.alternativaB}`
  alternativaC7.innerHTML = `C - ${opt7.alternativaC}`
  alternativaD7.innerHTML = `D - ${opt7.alternativaD}`

  ContadorQuestão++
  }


  if(ContadorQuestão == 7){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA8.innerHTML = `A - ${opt8.alternativaA}`
  alternativaB8.innerHTML = `B - ${opt8.alternativaB}`
  alternativaC8.innerHTML = `C - ${opt8.alternativaC}`
  alternativaD8.innerHTML = `D - ${opt8.alternativaD}`

  ContadorQuestão++
  }


  if(ContadorQuestão == 8){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA9.innerHTML = `A - ${opt9.alternativaA}`
  alternativaB9.innerHTML = `B - ${opt9.alternativaB}`
  alternativaC9.innerHTML = `C - ${opt9.alternativaC}`
  alternativaD9.innerHTML = `D - ${opt9.alternativaD}`

  ContadorQuestão++
  }

  
  if(ContadorQuestão == 9){
    
  ct_btn_quiz.style.display = 'none';
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';

  pergunta1.innerHTML = `1 - ${Questoes[0]}`
  alternativaA10.innerHTML = `A - ${opt10.alternativaA}`
  alternativaB10.innerHTML = `B - ${opt10.alternativaB}`
  alternativaC10.innerHTML = `C - ${opt10.alternativaC}`
  alternativaD10.innerHTML = `D - ${opt10.alternativaD}`

  }
  

}