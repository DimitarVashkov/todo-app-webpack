
function main() {
  const todoList = document.createElement('div');
  todoList.classList.add('main-list');
  todoList.setAttribute('id', 'todo');
  return todoList;
}

function content() {
  const element = document.createElement('div');
  const addButton = button();
  addButton.addEventListener('click', addTask);
  element.append(form('Title'));
  element.append(form('Description'));
  element.append(form('Due'));
  element.append(form('Priority'));
  element.append(addButton);

  return element;
}

function form(name) {
  const element = document.createElement('input');
  element.setAttribute('type', 'text');
  element.setAttribute('id', name);
  element.setAttribute('placeholder', name);

  return element;
}

function button() {
  const element = document.createElement('button');
  element.innerHTML = 'Add task';

  return element;
}

function addTask() {
  const title = document.querySelector('#Title');
  const description = document.querySelector('#Description');
  const due = document.querySelector('#Due');
  const priority = document.querySelector('#Priority');
  const list = document.getElementById('todo');

  const element = document.createElement('p');
  element.setAttribute('id', 'task');
  element.innerHTML += `${title.value} | `;
  element.innerHTML += `${description.value} | `;
  element.innerHTML += `${due.value} | `;
  element.innerHTML += `${priority.value}`;
  element.append(deleteButton());

  list.append(element);
}

function deleteButton() {
  const element = document.createElement('button');
  element.innerHTML = 'Remove';
  element.addEventListener('click', function () {
    const parent = document.querySelector('#todo');
    const element = document.querySelector('#task');
    parent.removeChild(element);
  });

  return element;
}

export {content, main};
