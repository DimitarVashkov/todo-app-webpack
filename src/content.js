
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

  const forms = todoForms();
  for (let i in forms) {
    element.append(forms[i]);
  }

  element.append(addButton);

  return element;
}

function todoForms() {
  const titleForm = form('Title');
  const descForm = form('Description');
  const dueForm = form('Due');
  const priorityForm = form('Priority');

  titleForm.required = true;
  descForm.required = true;
  dueForm.required = true;
  priorityForm.required = true;

  titleForm.setAttribute('pattern', '[A-z 0-9.]+');
  descForm.setAttribute('pattern', '[A-z 0-9.]+');
  dueForm.setAttribute('pattern', '[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]');

  return [titleForm, descForm, dueForm, priorityForm];
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

  const validityCont = [title, description, due, priority];
  for (let i in validityCont) {
    if (!validityCont[i].checkValidity()) {
      console.log('Invalid');
      return;
    }
  }

  const element = document.createElement('p');
  element.setAttribute('id', 'task');

  for (let i in validityCont) {
    element.innerHTML += `${validityCont[i].value} | `;
    validityCont[i].value = null;
  }

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
