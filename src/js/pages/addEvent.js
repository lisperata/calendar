import { goTo } from "../router";
import { handleEvent } from '../handleEvent'
import { createHtmlTableEv } from './home'

export function renderAddEventPage () {
  showPage();
  const backBtn = document.querySelector('.back');
  const createBtn = document.querySelector('.create');

  backBtn.addEventListener('click', () => {
    goTo('');
  });

  createBtn.addEventListener('click', () => {
    let partic = handleEvent();
    if (partic){
      goTo('');
  
      let idElem = '#' + partic.day.substr(0, 2) + partic.time.substr(0, 2);
  
      createHtmlTableEv(idElem, partic.title)}
  })
};


const showPage = () => {
  const addEvPage = document.querySelector('.add-event');
  const homePage = document.querySelector('.home');

  homePage.classList.add('hide');
  homePage.classList.remove('show');

  addEvPage.innerHTML = createAddEventPageHtml();
}

const createAddEventPageHtml = () => {
  return `  <div><div class="container error-already-booked"></div></div>
  <div class="container">
  <form class='new-event'>
    <div class='new-event__wrapper'>
      <div class='new-event__title'>Name of the event</div>
      <input type='text' class="new-event__value title" value='FE team sync'>
    </div>
    <div class='new-event__wrapper'>
      <div class='new-event__title'>Participants</div>
      <input type="checkbox" class ='check' value="Maria" id="Maria" checked>
      <label for="Maria">Maria</label>
      <input type="checkbox" class ='check' value="Bob" id="Bob">
      <label for="Bob">Bob</label>
      <input type="checkbox" class ='check' value="Alex" id="Alex">
      <label for="Alex">Alex</label>
      <input type="checkbox" class ='check' value="Joe" id="Joe">
      <label for="Joe">Joe</label>
    </div>
    <div class='new-event__wrapper'>
      <div class='new-event__title'>Day</div>
      <select class="new-event__value day">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
      </select>
    </div>
    <div class='new-event__wrapper'>
      <div class='new-event__title'>Time</div>
      <select class="new-event__value time">
        <option>10:00</option>
        <option>11:00</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
        <option>17:00</option>
        <option>18:00</option>
      </select>
    </div>
    <div class='new-event__buttons'>
      <button class='btn new-event__btn back'>Cancel</button>
      <button class='btn new-event__btn create'>Create</button>
    </div>
  </form>
</div>`;
}

