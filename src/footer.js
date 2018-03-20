function footer() {
  const element = document.createElement('h3');
  element.innerHTML = 'Built using webpack. Todo app by Dimitar Vashkov';
  element.classList.add('footer');
  return element;
}

export default footer;
