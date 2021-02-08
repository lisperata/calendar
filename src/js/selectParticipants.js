import { createHtmlTableEv } from './pages/home'

export const clearEvents = () => {
  let eventWrapper = document.querySelectorAll('.table__wrap');
  eventWrapper = Array.from(eventWrapper);
  eventWrapper.forEach (el => {
    el.parentElement.classList.remove('green');
    el.parentElement.innerHTML='';
  });
}


export const showEvents = () => {
  clearEvents();

  const participant = document.querySelector('.header__edit-calendar_filter').value;

  let keyArr = [];
  for(let i = 0; i < localStorage.length; i++){
    keyArr.push(localStorage.key(i));
  }
  keyArr.forEach(key => {
    let partic = JSON.parse(localStorage.getItem(key));
    for(let i = 0; i < partic.participants.length; i++){
      if(partic.participants[i] === participant ){
        let idElem = '#' + partic.day.substr(0, 2) + partic.time.substr(0, 2);
        createHtmlTableEv(idElem, partic.title);
      } else if (participant === 'All members') {
        let idElem = '#' + partic.day.substr(0, 2) + partic.time.substr(0, 2);
        createHtmlTableEv(idElem, partic.title);
        break;
      }
    }
    
  })
} 