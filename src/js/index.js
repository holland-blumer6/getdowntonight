import $ from 'jquery';

var seconds = 0;


function countTime(){
    $('#main').html("You\'ve been here for "+ seconds + " seconds");
    seconds += 1;
}

var run = setInterval(countTime,1000);





