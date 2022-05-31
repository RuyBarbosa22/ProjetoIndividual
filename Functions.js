window.addEventListener('scroll', function () {
  var nav = document.querySelector('.menu-content');
  nav.classList.toggle('sticky', this.window.scrollY > 0);
});

//função da section invísivel pelo botão

//contador do botão ver mais
var btnClicks = 0;

function showSection() {
  if (btnClicks % 2 == 0) {
    setTimeout(() => {
      biblioteca.style.opacity = '0';
    }, 1);
    biblioteca.style.display = 'none';

    mostrar.style.display = 'flex';
    esconder.style.display = 'none';
  } else {
    setTimeout(() => {
      biblioteca.style.opacity = '1';
    }, 1); // 1000 = 1s

    mostrar.style.display = 'none';
    esconder.style.display = 'flex';
    biblioteca.style.display = 'flex';
  }

  btnClicks++;
}

//funções de encaminhamento de tela

function Contato() {
  window.location.href = 'login.html'; //encaminhamento tela de Login
}

function Login() {
  window.location.href = 'contato.html'; //encaminhamento tela de Contato
}

//função do quiz

var erros = 0;
var acertos = 0;
var contadorQuestao = 0;

var questoes = [
  'Qual o minério mais raro do minecraft?',
  'Quantos GTA existem?',
  'Qual desses é exclusivo da Sony?',
  'Qual desses é exclusivo do Xbox?',
  'Qual desses é exclusivo da Nintendo?',
  'Em Sonic, quantas esmeraldas do caos existem?',
  'Qual o nome da princesa de Mario?',
  'Qual personagem é o mestre das runas em league of legends?',
  'Qual o primeiro ginásio em pokemon fire red?',
  'Em celeste, qual o nome da personagem principal?',
];

var opcoes = [
  ['Ouro', 'Netherite', 'Diamante', 'Esmeralda'],
  ['7', '11', '13', '5'],
  ['Forza Horizizon', 'Sonic', 'Plants Vs Zombies', 'Bloodborne'],
  ['Halo', 'Hollow Knight', 'Sekiro', 'Celeste'],
  ['Vallheim', 'New World', 'Zelda', 'Rocket League'],
  ['10', '5', '8', '7'],
  ['Peach', 'Silver', 'Isabel', 'Mônica'],
  ['Jax', 'Ryze', 'Aurelion Sol', 'Xerath'],
  ['Pedra', 'Água', 'Grama', 'Elétrico'],
  ['Mabel', 'Melina', 'Madeline', 'Merlin'],
];

var respostasC = [
  'Netherite',
  '13',
  'Bloodborne',
  'Halo',
  'Zelda',
  '7',
  'Peach',
  'Ryze',
  'Pedra',
  'Madeline',
];

function Quiz() {
  if (contadorQuestao == 0) {
    ct_btn_quiz.style.display = 'none';
    ct_score.style.display = 'none';
    ct_quiz.style.display = 'flex';
  }

  if (contadorQuestao == 10) {
    const acertosSpan = document.getElementById('acertos');
    const errosSpan = document.getElementById('erros');

    ct_quiz.style.display = 'none';
    ct_score.style.display = 'flex';
    acertosSpan.innerHTML = `Acertos: ${acertos}`;
    errosSpan.innerHTML = `Erros: ${erros}`;
    console.log(acertos, erros);
    contadorQuestao = 0;
    return;
  }

  cleanAlternativesStyle();
  handleAlternative(contadorQuestao);
}

function handleAlternative(alternative) {
  const alternativas = document.querySelectorAll('.alternativa');
  pergunta.innerHTML = `${alternative + 1} - ${questoes[alternative]}`;

  alternativas.forEach((alternativa, index) => {
    alternativa.innerHTML = opcoes[alternative][index];

    alternativa.onclick = () => {
      // se ta certo ou errado
      if (opcoes[alternative][index] == respostasC[alternative]) {
        alternativa.classList.add('correct');
        acertos++;
      } else {
        alternativa.classList.add('incorrect');
        erros++;
      }
      setTimeout(() => {
        contadorQuestao++;
        Quiz();
      }, 600);
    };
  });
}

function cleanAlternativesStyle() {
  const alternativas = document.querySelectorAll('.alternativa');
  alternativas.forEach(alternativa => {
    if (alternativa.classList.contains('correct')) {
      alternativa.classList.remove('correct');
    }
    if (alternativa.classList.contains('incorrect')) {
      alternativa.classList.remove('incorrect');
    }
  });
}