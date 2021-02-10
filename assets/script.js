//to change header color

const header = document.getElementById('header');
const colorChanger = setInterval(() => {

 const colors = ['none', 'blue','red','green']
  colors.forEach(color => header.classList.remove(color));
  header.classList.add(colors[Math.floor(Math.random()*4)])

},3000);