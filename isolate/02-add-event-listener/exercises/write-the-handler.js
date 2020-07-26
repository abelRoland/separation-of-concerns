'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));


const truthTestHandler = () => {

  const test = confirm('Are you a honest person?');
  if (!test) {
    alert('This is a honest answer!');
    return;
  } else {
    alert('This is not a honest answer!');
    return;
  }

};

buttonEl.addEventListener('click', truthTestHandler);


// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
