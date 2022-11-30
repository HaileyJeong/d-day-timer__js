const clockTitle = document.querySelector(".js-clock");

function xMasClock() {
  const targetdate = new Date("2022-12-25");
  const today = new Date();

  const diff = targetdate - today;
  
  const day = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor(diff / 1000 % 60);
  clockTitle.innerText = (`${day}d ${hours}h ${minutes}m ${seconds}s`)
}

xMasClock();
setInterval(xMasClock, 1000);