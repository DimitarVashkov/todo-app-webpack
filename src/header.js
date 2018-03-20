function header() {
  const element = document.createElement('h1');
  element.innerHTML = 'Awesome Todo';
  element.classList.add('header');
  return element;
}

export default header;
