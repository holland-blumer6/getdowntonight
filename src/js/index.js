import $ from 'jquery';

let seconds = 0;

function countTime() {
  $('#main').html(`You've been here for ${seconds} seconds`);
  seconds += 1;
}

setInterval(countTime, 1000);
