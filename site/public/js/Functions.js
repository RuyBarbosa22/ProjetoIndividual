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

function TelaCadastro() {
  window.location.href = 'cadastro.html' //encaminhamento tela de Cadastro
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


// função quiz começa o jogo

function Quiz() { // defino quais divs ficam a mostra para o usuário
  if (contadorQuestao == 0) { // validação que inicia o jogo, que tira a div de apresentação e apresenta a div do quiz
    ct_btn_quiz.style.display = 'none';
    ct_score.style.display = 'none';
    ct_quiz.style.display = 'flex';
  }


// validação que verifica se o jogo acabou e reseta contadores

  if (contadorQuestao == 10) { // casoo em algum momento o contador de questoes chegar ao limite
    const acertosSpan = document.getElementById('acertos'); // declaro o span do html como uma constante 
    const errosSpan = document.getElementById('erros');

    ct_quiz.style.display = 'none'; //defino a div do quiz como invisível para apresentar a tela de resultados
    ct_score.style.display = 'flex';
    acertosSpan.innerHTML = `Acertos: ${acertos}`; //apresento o valor da quantidade de acertos (variável) para o usuário
    errosSpan.innerHTML = `Erros: ${erros}`;
    contadorQuestao = 0; // defino o valor das questões como 0 para caso o usuário queira recomeçar
    erros = 0 // o mesmo para os contadores de pontuação
    acertos = 0
    return; //  para o programa
  }

// chamando funções para continuidade do jogo

  cleanAlternativesStyle(); // função para limpar a cor das bordas das alternativas
  handleAlternative(contadorQuestao); // função que insere as informações da matriz no HTML
}

// valida qual opção usuário escolheu e se está certa e imprime os resultados na tela

function handleAlternative(alternative) { //função que usa "alternative" como contador 
  const alternativas = document.querySelectorAll('.alternativa'); // pega todos os elementos com a classe "alternativa" e coloca dentro de uma constante (array)
  pergunta.innerHTML = `${alternative + 1} - ${questoes[alternative]}`; // insere as questões baseadas no contador definido como parametro da função

  alternativas.forEach((alternativa, index) => { // for each é como um for para cada elemento contido em "alternativas" 
    alternativa.innerHTML = opcoes[alternative][index]; // o for each insere o valor do vetor com as alternativas baseado na posição de "alternative" (contador - eixo Y)
    //  e o número da questão baseado em "index" (contador - eixo X) da matriz opções

    alternativa.onclick = () => { // quando o usuário clicar em alguma das divs com a classe alternativa
      // se ta certo ou errado
      if (opcoes[alternative][index] == respostasC[alternative]) { // valida se o valor que o usuário escolheu se assemelha com o vetor com as respostas certas
        // baseados na posição de "alternative", que representa qual questão entamos dentro da matriz, ou em qual posição no eixo Y.
        alternativa.classList.add('correct'); // caso estiver certo adiciona uma classe verde e soma o contador de acertos
        acertos++;
      } else {
        alternativa.classList.add('incorrect'); // caso contrario adiciona uma classe vermelha e soma no contador de erros
        erros++;
      }
      setTimeout(() => { // define um delay pra que o quiz passe para a próxima questão
        contadorQuestao++; //soma no contador que identifica em qual questão estamos
        Quiz(); // reinicia a função do quiz
      }, 600); // 600ms
    };
  });
}

// função que basicamente tira as classes de estilização de certo ou errado (bordas verdes e vermelhas)

function cleanAlternativesStyle() { // função que limpa as cores das alternativas selecionadas
  const alternativas = document.querySelectorAll('.alternativa');  // pega as todas as divs de alternativas 
  alternativas.forEach(alternativa => { // e valida uma por uma
    if (alternativa.classList.contains('correct')) { // e caso ela tiver a classe correct ela remove a borda verde
      alternativa.classList.remove('correct');
    }
    if (alternativa.classList.contains('incorrect')) { // e o mesmo aqui, caso ela tiver a classe incorrect ela remove a borda vermelha
      alternativa.classList.remove('incorrect');
    }
  });
}



// função de Cadastro na tela de Cadastro.

function cadastrar() {
  aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = nome_input.value;
  var emailVar = email_input.value;
  var senhaVar = senha_input.value;
  var confirmacaoSenhaVar = confirmacao_senha_input.value;

  if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
      cardErro.style.display = "block"
      mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

      finalizarAguardar();
      return false;
  }
  else {
      setInterval(sumirMensagem, 5000)
  }

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: nomeVar,
          emailServer: emailVar,
          senhaServer: senhaVar
      })
  }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {
          cardErro.style.display = "block";

          mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

          setTimeout(() => {
              window.location = "login.html";
          }, "2000")
          
          limparFormulario();
          finalizarAguardar();
      } else {
          throw ("Houve um erro ao tentar realizar o cadastro!");
      }
  }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar();
  });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none"
}



// script do arquivo "/js/funcoes.js"

// sessão
function validarSessao() {
  // aguardar();

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
      // window.alert(`Seja bem-vindo, ${nome}!`);
      b_usuario.innerHTML = nome;

      // finalizarAguardar();
  } else {
      window.location = "../login.html";
  }
}

function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
      divErrosLogin.innerHTML = texto;
  }
}


// modal
function mostrarModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "flex";
}

function fecharModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "none";
}


function entrar() {
  aguardar();

  var emailVar = email_input.value;
  var senhaVar = senha_input.value;

  if (emailVar == "" || senhaVar == "") {
      cardErro.style.display = "block"
      mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
      finalizarAguardar();
      return false;
  }
  else {
      setInterval(sumirMensagem, 5000)
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          emailServer: emailVar,
          senhaServer: senhaVar
      })
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
          console.log(resposta);

          resposta.json().then(json => {
              console.log(json);
              console.log(JSON.stringify(json));

              sessionStorage.EMAIL_USUARIO = json.email;
              sessionStorage.NOME_USUARIO = json.nome;
              sessionStorage.ID_USUARIO = json.id;

              setTimeout(function () {
                  window.location = "./dashboard/cards.html";
              }, 1000); // apenas para exibir o loading

          });

      } else {

          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then(texto => {
              console.error(texto);
              finalizarAguardar(texto);
          });
      }

  }).catch(function (erro) {
      console.log(erro);
  })

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none"
}