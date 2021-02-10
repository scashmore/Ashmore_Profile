//to change header color

const header = document.getElementById('body');
const colorChanger = setInterval(() => {

 const colors = ['none', 'blue','red']
  colors.forEach(color => header.classList.remove(color));
  header.classList.add(colors[Math.floor(Math.random()*3)])

},3000);