'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p> // replace
  <section></section> // insert before
  <h1><h1> // remove
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---
const pEl = divEl.children[0];
const navEl = document.createElement('NAV');
divEl.replaceChild(navEl, pEl);

const headerEl = document.createElement('H1');
const sectionEl = divEl.children[1];
divEl.insertBefore(headerEl, sectionEl);


const secondHeader = divEl.children[3];
const PElAdd = document.createElement('P');
divEl.replaceChild(PElAdd, secondHeader);

const thirdHeader = divEl.children[4];
divEl.removeChild(thirdHeader);

// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4,
  'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV',
  'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H1',
  'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION',
  'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P',
  'Test: 4th child');
