// VARIÁVEIS

const addTarefa = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
const btnAdicionar = document.getElementById('criar-tarefa');
const btnApagar = document.getElementById('apaga-tudo');
const btnRemover = document.getElementById('remover-finalizados');
const btnRemoverSelecionado = document.getElementById('remover-selecionado');

// const btnSalvar = document.getElementById('salvar-tarefas');
// const btnMoverCima = document.getElementById('mover-cima');
// const btnMoberBaixo = document.getElementById('mover-baixo');

// FUNÇÕES
// manda o texto do input para a lista ordenada criada

function criaTarefa() {
  const task = document.createElement('li');
  addTarefa.appendChild(task);
  task.classList.add('tarefa');
  task.innerText = inputValue.value;
  inputValue.value = '';
}

// manda o texto teclando enter

function criaEnter(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    criaTarefa();
  }
}

// add ou remove (toggle) uma classe no evento do addListener, no caso click

function selectItem() {
  const target = event.target.classList;
  if (target.contains('tarefa')) {
    target.toggle('selected');
  }
}

// add ou remove completed como classe seguido da classe selected a cada dblclick.

function clickDuplo() {
  const target = event.target.classList;
  if (target.contains('tarefa')) {
    target.toggle('completed');
    target.toggle('selected', true);
  } else if (target.contains('completed')) {
    target.remove('completed');
  }
}

// apaga o conteúdo da lista

function apagarLista() {
  addTarefa.innerHTML = '';
}

// percorro toda a lista criada decrementando e removo os itens com a classe completed
// atente-se: ByClassName éso entre aspas simples e sem .

function removeFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  for (let itens = finalizados.length - 1; itens >= 0; itens -= 1) {
    finalizados[itens].remove();
  }
}

function removeSelecinados() {
  const selecionados = document.getElementsByClassName('selected');
  for (let itens = selecionados.length - 1; itens >= 0; itens -= 1) {
    selecionados[itens].remove();
  }
}

// EVENT LISTENERS

addTarefa.addEventListener('click', selectItem);
addTarefa.addEventListener('dblclick', clickDuplo);
btnAdicionar.addEventListener('click', criaTarefa);
btnApagar.addEventListener('click', apagarLista);
inputValue.addEventListener('keyup', criaEnter);
btnRemover.addEventListener('click', removeFinalizados);
btnRemoverSelecionado.addEventListener('click', removeSelecinados);

// BONUS

// 1 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista.
// Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.

// 2 - Como sua lista é ordenada, o que acontece se você esquecer de um item? Você
// teria que apagar a lista e começar tudo de novo, pois só é possível inserir um item
// no final, certo? Adicione dois botões, um com id="mover-cima" e outro com
// id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo
// na lista de tarefas. Pontos importantes sobre este requisito bônus:

// * Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa
// mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui
// todas as habilidades necessárias para fazer isso.

// * Habitue-se a pensar nos casos especiais ao construir programas. O que acontece
// se o usuário tentar mover o primeiro item para cima ou o último para baixo?
