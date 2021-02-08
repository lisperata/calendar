/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/handleEvent.js":
/*!*******************************!*\
  !*** ./src/js/handleEvent.js ***!
  \*******************************/
/*! exports provided: handleEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleEvent", function() { return handleEvent; });
const handleEvent = () => {
  const title = document.querySelector('.new-event__value').value;
  let participants = document.querySelectorAll('.check');
  const day = document.querySelector('.day').value;
  const time = document.querySelector('.time').value;
  participants = Array.from(participants);
  participants = participants.map(participant => {
    if (participant.checked === true) {
      return participant.value;
    }
  });
  participants = participants.filter(participant => {
    if (participant !== undefined) return participant;
  });
  const data = {
    'title': title,
    'participants': participants,
    'day': day,
    'time': time
  };
  let maxKey = -1;

  for (let i = 0; i < localStorage.length; i++) {
    let currentKey = localStorage.key(i);
    let dataFromStorage = JSON.parse(localStorage.getItem(currentKey));

    if (dataFromStorage.day === data.day && dataFromStorage.time === data.time) {
      alreadyBooked();
      let closeErrorBtn = document.querySelector('.error-already-booked__close');
      closeErrorBtn.addEventListener('click', () => {
        const errorMassage = document.querySelector('.error-already-booked');
        errorMassage.innerHTML = '';
        errorMassage.parentNode.classList.remove('red');
      });
      return false;
    }

    if (currentKey > maxKey) {
      maxKey = currentKey;
    }
  }

  localStorage.setItem(+maxKey + 1, JSON.stringify(data));
  return data;
};

const alreadyBooked = () => {
  const errorMassage = document.querySelector('.error-already-booked');
  errorMassage.parentNode.classList.add('red');
  errorMassage.innerHTML = '<div>Failed to create an event. Time slot is already booked.</div><div class="error-already-booked__close">&times;</div>';
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ "./src/js/pages/home.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/js/router.js");


window.addEventListener("DOMContentLoaded", function () {
  Object(_pages_home_js__WEBPACK_IMPORTED_MODULE_0__["initHome"])();
  window.addEventListener('hashchange', _router__WEBPACK_IMPORTED_MODULE_1__["handleHash"]);
  Object(_router__WEBPACK_IMPORTED_MODULE_1__["handleHash"])();
});

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/js/pages/home.js");

const modal = document.querySelector('.modal');
function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}
const openModal = cell => {
  modal.classList.add('show');
  modal.classList.remove('hide');
  const descr = document.querySelector('.modal__dialog_descr');
  const titleOfEv = cell.querySelector('.title-event');
  descr.innerHTML = `Are you sure you want to delete "${titleOfEv.innerHTML}" event?`;
  const delEvent = document.querySelector('.delete-event-btn');

  const callDeleteEvent = () => {
    Object(_pages_home__WEBPACK_IMPORTED_MODULE_0__["deleteEvent"])(cell);
    delEvent.removeEventListener('click', callDeleteEvent);
  };

  delEvent.addEventListener('click', callDeleteEvent);

  const listModalClose = () => {
    delEvent.removeEventListener('click', callDeleteEvent);
    modalClose.forEach(el => {
      el.removeEventListener('click', listModalClose);
    });
  };

  const modalClose = document.querySelectorAll('.close');
  modalClose.forEach(element => element.addEventListener('click', listModalClose));
};

/***/ }),

/***/ "./src/js/pages/addEvent.js":
/*!**********************************!*\
  !*** ./src/js/pages/addEvent.js ***!
  \**********************************/
/*! exports provided: renderAddEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAddEventPage", function() { return renderAddEventPage; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./src/js/router.js");
/* harmony import */ var _handleEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handleEvent */ "./src/js/handleEvent.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/js/pages/home.js");



function renderAddEventPage() {
  showPage();
  const backBtn = document.querySelector('.back');
  const createBtn = document.querySelector('.create');
  backBtn.addEventListener('click', () => {
    Object(_router__WEBPACK_IMPORTED_MODULE_0__["goTo"])('');
  });
  createBtn.addEventListener('click', () => {
    let partic = Object(_handleEvent__WEBPACK_IMPORTED_MODULE_1__["handleEvent"])();

    if (partic) {
      Object(_router__WEBPACK_IMPORTED_MODULE_0__["goTo"])('');
      let idElem = '#' + partic.day.substr(0, 2) + partic.time.substr(0, 2);
      Object(_home__WEBPACK_IMPORTED_MODULE_2__["createHtmlTableEv"])(idElem, partic.title);
    }
  });
}
;

const showPage = () => {
  const addEvPage = document.querySelector('.add-event');
  const homePage = document.querySelector('.home');
  homePage.classList.add('hide');
  homePage.classList.remove('show');
  addEvPage.innerHTML = createAddEventPageHtml();
};

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
};

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/*! exports provided: initHome, homePage, createHtmlTableEv, deleteEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHome", function() { return initHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePage", function() { return homePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtmlTableEv", function() { return createHtmlTableEv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEvent", function() { return deleteEvent; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./src/js/router.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal */ "./src/js/modal.js");
/* harmony import */ var _selectParticipants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectParticipants */ "./src/js/selectParticipants.js");




const initHome = () => {
  const modalClose = document.querySelectorAll('.close');
  modalClose.forEach(element => {
    element.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_1__["closeModal"]);
  });
  Object(_selectParticipants__WEBPACK_IMPORTED_MODULE_2__["showEvents"])();
  const selectPartic = document.querySelector('.header__edit-calendar_filter');
  selectPartic.addEventListener('change', _selectParticipants__WEBPACK_IMPORTED_MODULE_2__["showEvents"]);
  const addEvent = document.querySelector('.header__edit-calendar_add');
  addEvent.addEventListener('click', function () {
    Object(_router__WEBPACK_IMPORTED_MODULE_0__["goTo"])('addEvent');
  });
};
const homePage = () => {
  const home = document.querySelector('.home');
  const addEvPage = document.querySelector('.add-event');
  home.classList.add('show');
  home.classList.remove('hide');
  addEvPage.innerHTML = '';
};
const createHtmlTableEv = (idElem, title) => {
  const cell = document.querySelector(idElem);
  cell.classList.add('green');
  cell.innerHTML = `<div class='table__wrap'>  
  <div class='title-event'>${title}</div>
  <div class='delete-event'>&#10005;</div>
  </div>`;
  const deleteBtn = cell.querySelector('.delete-event');
  deleteBtn.addEventListener('click', () => Object(_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])(cell));
};
const deleteEvent = cell => {
  const day = cell.id.substr(0, 2);
  const time = cell.id.substr(2, 2);
  const title = cell.querySelector('.title-event').innerHTML;
  let keyArr = [];

  for (let i = 0; i < localStorage.length; i++) {
    keyArr.push(localStorage.key(i));
  }

  keyArr.forEach(key => {
    let obj = JSON.parse(localStorage.getItem(key));

    if (obj.day.substr(0, 2) === day && obj.time.substr(0, 2) == time && obj.title === title) {
      localStorage.removeItem(key);
      cell.innerHTML = '';
      cell.classList.remove('green');
    }
  });
  Object(_modal__WEBPACK_IMPORTED_MODULE_1__["closeModal"])();
};

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! exports provided: goTo, handleHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goTo", function() { return goTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleHash", function() { return handleHash; });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/js/pages/home.js");
/* harmony import */ var _pages_addEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/addEvent */ "./src/js/pages/addEvent.js");


const goTo = hash => {
  window.location.hash = hash;
};
const handleHash = () => {
  const {
    hash
  } = window.location;

  if (!hash || hash === '#') {
    Object(_pages_home__WEBPACK_IMPORTED_MODULE_0__["homePage"])();
  } else if (hash === '#addEvent') {
    Object(_pages_addEvent__WEBPACK_IMPORTED_MODULE_1__["renderAddEventPage"])();
  }
};

/***/ }),

/***/ "./src/js/selectParticipants.js":
/*!**************************************!*\
  !*** ./src/js/selectParticipants.js ***!
  \**************************************/
/*! exports provided: clearEvents, showEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearEvents", function() { return clearEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEvents", function() { return showEvents; });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/js/pages/home.js");

const clearEvents = () => {
  let eventWrapper = document.querySelectorAll('.table__wrap');
  eventWrapper = Array.from(eventWrapper);
  eventWrapper.forEach(el => {
    el.parentElement.classList.remove('green');
    el.parentElement.innerHTML = '';
  });
};
const showEvents = () => {
  clearEvents();
  const participant = document.querySelector('.header__edit-calendar_filter').value;
  let keyArr = [];

  for (let i = 0; i < localStorage.length; i++) {
    keyArr.push(localStorage.key(i));
  }

  keyArr.forEach(key => {
    let partic = JSON.parse(localStorage.getItem(key));

    for (let i = 0; i < partic.participants.length; i++) {
      if (partic.participants[i] === participant) {
        let idElem = '#' + partic.day.substr(0, 2) + partic.time.substr(0, 2);
        Object(_pages_home__WEBPACK_IMPORTED_MODULE_0__["createHtmlTableEv"])(idElem, partic.title);
      } else if (participant === 'All members') {
        let idElem = '#' + partic.day.substr(0, 2) + partic.time.substr(0, 2);
        Object(_pages_home__WEBPACK_IMPORTED_MODULE_0__["createHtmlTableEv"])(idElem, partic.title);
        break;
      }
    }
  });
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map