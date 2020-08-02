'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---

const tdFirst = document.createElement('TD'); 
divEl.children[0].children[0].children[0].appendChild(tdFirst);
divEl.children[0].children[0].children[0].children[0].innerHTML = 'a';

const tdSecond = document.createElement('TD');
divEl.children[0].children[0].children[0].appendChild(tdSecond);
divEl.children[0].children[0].children[0].children[1].innerHTML = 'b';

const tdThird = document.createElement('TD'); 
divEl.children[0].children[0].children[1].appendChild(tdThird);
divEl.children[0].children[0].children[1].children[0].innerHTML = 'c';

const tdForth = document.createElement('TD');
divEl.children[0].children[0].children[1].appendChild(tdForth);
divEl.children[0].children[0].children[1].children[1].innerHTML = 'd';


// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
