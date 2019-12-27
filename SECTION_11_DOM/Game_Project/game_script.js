// get fields from board

var f1 = document.querySelector('#r1c1')
var f2 = document.querySelector('#r1c2')
var f3 = document.querySelector('#r1c3')
var f4 = document.querySelector('#r2c1')
var f5 = document.querySelector('#r2c2')
var f6 = document.querySelector('#r2c3')
var f7 = document.querySelector('#r3c1')
var f8 = document.querySelector('#r3c2')
var f9 = document.querySelector('#r3c3')

// add event listeners

f1.addEventListener('click', function () {
  if (f1.textContent == ''){
    f1.textContent = 'X'
  }
  else if (f1.textContent == 'X') {
    f1.textContent = 'O'
  }
  else{
    f1.textContent = ''
  }
});

f2.addEventListener('click', function () {
  if (f2.textContent == ''){
    f2.textContent = 'X'
  }
  else if (f2.textContent == 'X') {
    f2.textContent = 'O'
  }
  else{
    f2.textContent = ''
  }
});

f3.addEventListener('click', function () {
  if (f3.textContent == ''){
    f3.textContent = 'X'
  }
  else if (f3.textContent == 'X') {
    f3.textContent = 'O'
  }
  else{
    f3.textContent = ''
  }
});

f4.addEventListener('click', function () {
  if (f4.textContent == ''){
    f4.textContent = 'X'
  }
  else if (f4.textContent == 'X') {
    f4.textContent = 'O'
  }
  else{
    f4.textContent = ''
  }
});

f5.addEventListener('click', function () {
  if (f5.textContent == ''){
    f5.textContent = 'X'
  }
  else if (f5.textContent == 'X') {
    f5.textContent = 'O'
  }
  else{
    f5.textContent = ''
  }
});

f6.addEventListener('click', function () {
  if (f6.textContent == ''){
    f6.textContent = 'X'
  }
  else if (f6.textContent == 'X') {
    f6.textContent = 'O'
  }
  else{
    f6.textContent = ''
  }
});

f7.addEventListener('click', function () {
  if (f7.textContent == ''){
    f7.textContent = 'X'
  }
  else if (f7.textContent == 'X') {
    f7.textContent = 'O'
  }
  else{
    f7.textContent = ''
  }
});

f8.addEventListener('click', function () {
  if (f8.textContent == ''){
    f8.textContent = 'X'
  }
  else if (f8.textContent == 'X') {
    f8.textContent = 'O'
  }
  else{
    f8.textContent = ''
  }
});

f9.addEventListener('click', function () {
  if (f9.textContent == ''){
    f9.textContent = 'X'
  }
  else if (f9.textContent == 'X') {
    f9.textContent = 'O'
  }
  else{
    f9.textContent = ''
  }
});

document.querySelector('button').addEventListener('click', function () {
  f1.textContent = '';
  f2.textContent = '';
  f3.textContent = '';
  f4.textContent = '';
  f5.textContent = '';
  f6.textContent = '';
  f7.textContent = '';
  f8.textContent = '';
  f9.textContent = '';
})
