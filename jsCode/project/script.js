/*
  == TASKS ==

  - [x] Add checkbox to new tasks
  - [x] Add tasks from CTA
  - [ ] Delete tasks -> event bubbling + element.closest()
  - [ ] Edit task
    - [ ] Change span to input
    - [ ] Change back to span with new text when Enter is clicked

  == Reading Material ==
  - Event Bubbling: https://en.wikipedia.org/wiki/Event_bubbling
  - Template literals: https://www.javascripttutorial.net/es6/javascript-template-literals/
  - Box Model: https://web.dev/learn/css/box-model/
  - Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  - Rubber duck: https://en.wikipedia.org/wiki/Rubber_duck_debugging

  == Deep Dives ==
  - JS events: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
*/

function main () {
  const newTask = document.querySelector('#newTask');
  const addTaskCta = document.querySelector('div.Input button');
  const list = document.querySelector('#list');

  function addNewTodo() {
    if (newTask.value.trim() === '') return;
    const newItem = document.createElement('li');
    newItem.innerHTML = `
      <input type="checkbox" />
      <span>${newTask.value}</span>
      <button>Delete</button>
    `;

    newItem.addEventListener('change', nossaFuncao);
    list.prepend(newItem);
    newTask.value = '';
  }

  addTaskCta.addEventListener('click', addNewTodo);
  
  newTask.addEventListener('keydown', function(ev){
    if(ev.keyCode === 13) addNewTodo();
  });
}

window.onload = main;

/*
Passos:
  1. Achar o input DONE
  2. Quando o usuário apertar enter, capturar o valor do input DONE
  3. Achar a lista (<ul />) DONE
  4. Adicionar um item novo na lista (<li />)
*/

function isOdd(n) {
  if (n % 2 != 0) {
    return true;
  } else {
    return false;
  }
}


function filter(numbers, callback) {
  let results = [];
  for (const n of numbers) {
    if (callback(n)) {
      results.push(n);
    }
  }
  
  return results;
}

let list = [33, 18, 10, 3, 22];
const filteredList = filter(list, isOdd);
const greaterThan15 = filter(list, function(n) {
  return n > 15;
});

console.log(filteredList);

/* 
Variaveis:
  1. A variável é a gavetinha aonde eu coloco o meu valor
  2. O nome da variável é só o adesivo em cima da gavetinha

Funções:
  1. As funções permitem reutilizar um comportamento
  2. Os parâmetros das funções são variáveis
  3. O valor de cada parâmetro é definido pela ordem que eu passo ele pra função

Callbacks:
  1. Callback é uma variável que espera receber uma função
  2. Eu chamo esse callback de dentro da minha função pra permitir ao dev customizar uma parte do comportamento da minha função
*/
