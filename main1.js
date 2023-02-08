'use strict'

const stopwatch =document.getElementById('stopwatch');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let timerId;
let  elapsedMs = 0;


start.addEventListener('click', ()  => {
  let startMs = Date.now(); //開始時間ミリ秒
  startMs -= elapsedMs;
  
  timerId = setInterval(() => {
      const nowMs = Date.now();
       elapsedMs = nowMs - startMs;
      const ms = elapsedMs % 10;
      const s  = Math.floor(elapsedMs / 1000) % 60;
      const m  = Math.floor(elapsedMs / 1000 / 60) % 60;
      const h  = Math.floor(elapsedMs / 1000 / 60 / 60) % 60;
      
      const formattedMs = ms.toString().padStart(1,'0');
      const formattedS  =  s.toString().padStart(1,'0');
      const formattedM  =  m.toString().padStart(1,'0');
      const formattedH  =  h.toString().padStart(1,'0');
      
      document.getElementById("start").disabled = true;
      document.getElementById("stop").disabled = false;
      document.getElementById("reset").disabled = false;
     
      
     // stopwatch.textContent = formattedM + ':' + formattedS + '.' + formattedMs;
      stopwatch.textContent = `${formattedH}:${formattedM}:${formattedS}.${formattedMs}`;
  },10);
});

stop.addEventListener('click',() => {
  clearInterval(timerId);
      document.getElementById("start").disabled = false;
      document.getElementById("stop").disabled = true;
      document.getElementById("reset").disabled = false;
     
  
});

reset.addEventListener('click',() => {
 clearInterval(timerId);
 start.textContent = 'スタート';
 start.classList.remove('stop');
 elapsedMs = 0;
 stopwatch.textContent = '0:0:0:0'
 document.getElementById("start").disabled = false;
 document.getElementById("stop").disabled = true;
 document.getElementById("reset").disabled = true;
 
 
});

