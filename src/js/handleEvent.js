export const handleEvent = () => {
  const title = document.querySelector('.new-event__value').value;
  let participants = document.querySelectorAll('.check');
  const day = document.querySelector('.day').value;
  const time = document.querySelector('.time').value;

  participants = Array.from(participants);
  participants = participants.map(participant => {
    if(participant.checked === true) {
      return participant.value;
    }
  });
  participants = participants.filter((participant) => {
    if(participant !== undefined) 
    return participant
  })

  const data = {
    'title': title,
    'participants': participants,
    'day': day,
    'time': time
  };
  let maxKey = -1;
  for(let i = 0; i < localStorage.length; i++){
    let currentKey = localStorage.key(i)
    let dataFromStorage = JSON.parse(localStorage.getItem(currentKey));

    if (dataFromStorage.day === data.day && dataFromStorage.time === data.time){
      alreadyBooked();
      let closeErrorBtn = document.querySelector('.error-already-booked__close');
      closeErrorBtn.addEventListener('click', () => {
        const errorMassage = document.querySelector('.error-already-booked');
        errorMassage.innerHTML = '';
        errorMassage.parentNode.classList.remove('red');
      })
      return false;
    }

    if(currentKey > maxKey){
      maxKey = currentKey;

    }
  }

  localStorage.setItem(+maxKey + 1, JSON.stringify(data));
  return data;
}

const alreadyBooked = () => {
  const errorMassage = document.querySelector('.error-already-booked');
  errorMassage.parentNode.classList.add('red');
  errorMassage.innerHTML = 
  '<div>Failed to create an event. Time slot is already booked.</div><div class="error-already-booked__close">&times;</div>'
}