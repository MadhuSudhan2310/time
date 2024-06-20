const display = document.getElementById('display');

function updateTime() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000); 
updateTime(); 
