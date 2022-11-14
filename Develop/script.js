// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');
var currentDat = $('#currentDay');

let currentHour = new Date().getHours(); //hours formated and divided into 0-23
let day = new Date().getDay(); //Gets Day from Sunday to Saturday (0-6)

var dayName;
//Date format is YYYY-MM-DD, using .slice to divide format into texts
var dateMonth = new Date().toJSON().slice(5,7); 
var dateDay = new Date().toJSON().slice(8,10); 
var year = new Date().toJSON().slice(0,4); 
var nameMonth;
var nameDay;

$(function () {

  //using GetItem to retrieve information from localstorage
    $('#desc1').val(localStorage.getItem('#desc1'));
    $('#desc2').val(localStorage.getItem('#desc2'));
    $('#desc3').val(localStorage.getItem('#desc3'));
    $('#desc4').val(localStorage.getItem('#desc4'));
    $('#desc5').val(localStorage.getItem('#desc5'));
    $('#desc6').val(localStorage.getItem('#desc6'));
    $('#desc7').val(localStorage.getItem('#desc7'));
    $('#desc8').val(localStorage.getItem('#desc8'));
    $('#desc9').val(localStorage.getItem('#desc9'));

  //using setItem to save information with each button and their corresponding blocks
    $('#button1').on('click', function() {
      let newText = $('#desc1').val();
      $('#desc1').text(newText);
      localStorage.setItem('#desc1',newText);
    })
    $('#button2').on('click', function() {
      let newText = $('#desc2').val();
      $('#desc2').text(newText);
      localStorage.setItem('#desc2',newText);
    })
    $('#button3').on('click', function() {
      let newText = $('#desc3').val();
      $('#desc3').text(newText);
      localStorage.setItem('#desc3',newText);
    })
    $('#button4').on('click', function() {
      let newText = $('#desc4').val();
      $('#desc4').text(newText);
      localStorage.setItem('#desc4',newText);
    })
    $('#button5').on('click', function() {
      let newText = $('#desc5').val();
      $('#desc5').text(newText);
      localStorage.setItem('#desc5',newText);
    })
    $('#button6').on('click', function() {
      let newText = $('#desc6').val();
      $('#desc6').text(newText);
      localStorage.setItem('#desc6',newText);
    })
    $('#button7').on('click', function() {
      let newText = $('#desc7').val();
      $('#desc7').text(newText);
      localStorage.setItem('#desc7',newText);
    })
    $('#button8').on('click', function() {
      let newText = $('#desc8').val();
      $('#desc8').text(newText);
      localStorage.setItem('#desc8',newText);
    })
    $('#button9').on('click', function() {
      let newText = $('#desc9').val();
      $('#desc9').text(newText);
      localStorage.setItem('#desc9',newText);
    })

  $(function timeBlock() {//using if-else to color-coordinate time blocks
  if (currentHour == 8){ //9 AM
    $(hour9).addClass("present"); //Present Time
    $(hour9).removeClass("past future");
    $(hour10).addClass("future");
    $(hour10).removeClass("past present");
    $(hour11).addClass("future");
    $(hour11).removeClass("past present");
    $(hour12).addClass("future");
    $(hour12).removeClass("past present");
    $(hour13).addClass("future");
    $(hour13).removeClass("past present");
    $(hour14).addClass("future");
    $(hour14).removeClass("past present");
    $(hour15).addClass("future");
    $(hour15).removeClass("past present");
    $(hour16).addClass("future");
    $(hour16).removeClass("past present");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  } else if (currentHour == 9){ //10AM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("present"); //Present Time
    $(hour10).removeClass("past future");
    $(hour11).addClass("future");
    $(hour11).removeClass("past present");
    $(hour12).addClass("future");
    $(hour12).removeClass("past present");
    $(hour13).addClass("future");
    $(hour13).removeClass("past present");
    $(hour14).addClass("future");
    $(hour14).removeClass("past present");
    $(hour15).addClass("future");
    $(hour15).removeClass("past present");
    $(hour16).addClass("future");
    $(hour16).removeClass("past present");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  } else if (currentHour == 10){ //11AM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("past");
    $(hour10).removeClass("present future");
    $(hour11).addClass("present"); //Present Time
    $(hour11).removeClass("past future");
    $(hour12).addClass("future");
    $(hour12).removeClass("past present");
    $(hour13).addClass("future");
    $(hour13).removeClass("past present");
    $(hour14).addClass("future");
    $(hour14).removeClass("past present");
    $(hour15).addClass("future");
    $(hour15).removeClass("past present");
    $(hour16).addClass("future");
    $(hour16).removeClass("past present");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  } else if (currentHour == 11){ //12PM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("past");
    $(hour10).removeClass("present future");
    $(hour11).addClass("past");
    $(hour11).removeClass("present future");
    $(hour12).addClass("present"); //Present Time
    $(hour12).removeClass("past future");
    $(hour13).addClass("future");
    $(hour13).removeClass("past present");
    $(hour14).addClass("future");
    $(hour14).removeClass("past present");
    $(hour15).addClass("future");
    $(hour15).removeClass("past present");
    $(hour16).addClass("future");
    $(hour16).removeClass("past present");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  } else if (currentHour == 12){ //1PM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("past");
    $(hour10).removeClass("present future");
    $(hour11).addClass("past");
    $(hour11).removeClass("present future");
    $(hour12).addClass("past"); 
    $(hour12).removeClass("present future");
    $(hour13).addClass("present"); //Present Time
    $(hour13).removeClass("past future");
    $(hour14).addClass("future");
    $(hour14).removeClass("past present");
    $(hour15).addClass("future");
    $(hour15).removeClass("past present");
    $(hour16).addClass("future");
    $(hour16).removeClass("past present");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  } else if (currentHour == 13){ //2PM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("past");
    $(hour10).removeClass("present future");
    $(hour11).addClass("past");
    $(hour11).removeClass("present future");
    $(hour12).addClass("past"); 
    $(hour12).removeClass("present future");
    $(hour13).addClass("past");
    $(hour13).removeClass("present future");
    $(hour14).addClass("present"); //Present Time
    $(hour14).removeClass("past future");
    $(hour15).addClass("future");
    $(hour15).removeClass("past present");
    $(hour16).addClass("future");
    $(hour16).removeClass("past present");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  } else if (currentHour == 14){ //3PM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("past");
    $(hour10).removeClass("present future");
    $(hour11).addClass("past");
    $(hour11).removeClass("present future");
    $(hour12).addClass("past"); 
    $(hour12).removeClass("present future");
    $(hour13).addClass("past"); 
    $(hour13).removeClass("present future");
    $(hour14).addClass("past");
    $(hour14).removeClass("present future");
    $(hour15).addClass("present"); //Present
    $(hour15).removeClass("past future");
    $(hour16).addClass("future");
    $(hour16).removeClass("past present");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  } else if (currentHour == 15){ //4PM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("past");
    $(hour10).removeClass("present future");
    $(hour11).addClass("past");
    $(hour11).removeClass("present future");
    $(hour12).addClass("past"); 
    $(hour12).removeClass("present future");
    $(hour13).addClass("past"); 
    $(hour13).removeClass("present future");
    $(hour14).addClass("past");
    $(hour14).removeClass("present future");
    $(hour15).addClass("past");
    $(hour15).removeClass("present future");
    $(hour16).addClass("present"); //Present
    $(hour16).removeClass("past future");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  } else if (currentHour == 16){ //5PM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("past");
    $(hour10).removeClass("present future");
    $(hour11).addClass("past");
    $(hour11).removeClass("present future");
    $(hour12).addClass("past"); 
    $(hour12).removeClass("present future");
    $(hour13).addClass("past"); 
    $(hour13).removeClass("present future");
    $(hour14).addClass("past");
    $(hour14).removeClass("present future");
    $(hour15).addClass("past");
    $(hour15).removeClass("present future");
    $(hour16).addClass("past");
    $(hour16).removeClass("present future");
    $(hour17).addClass("present"); //Present
    $(hour17).removeClass("past future");
  } else if (currentHour > 16){ //Past 6 PM
    $(hour9).addClass("past");
    $(hour9).removeClass("present future");
    $(hour10).addClass("past");
    $(hour10).removeClass("present future");
    $(hour11).addClass("past");
    $(hour11).removeClass("present future");
    $(hour12).addClass("past"); 
    $(hour12).removeClass("present future");
    $(hour13).addClass("past"); 
    $(hour13).removeClass("present future");
    $(hour14).addClass("past");
    $(hour14).removeClass("present future");
    $(hour15).addClass("past");
    $(hour15).removeClass("present future");
    $(hour16).addClass("past");
    $(hour16).removeClass("present future");
    $(hour17).addClass("past");
    $(hour17).removeClass("present future");
  } else if (currentHour < 8){ //Before 9 AM
    $(hour9).addClass("future");
    $(hour9).removeClass("past present");
    $(hour10).addClass("future");
    $(hour10).removeClass("past present");
    $($(hour11)).addClass("future");
    $($(hour11)).removeClass("past present");
    $(hour12).addClass("future");
    $(hour12).removeClass("past present");
    $(hour13).addClass("future");
    $(hour13).removeClass("past present");
    $(hour14).addClass("future");
    $(hour14).removeClass("past present");
    $(hour15).addClass("future");
    $(hour15).removeClass("past present");
    $(hour16).addClass("future");
    $(hour16).removeClass("past present");
    $(hour17).addClass("future");
    $(hour17).removeClass("past present");
  }
  })
  

$(function daydatedisplay(){//Organizing day and month information to display on the header
  if (day == 0){ //If Statement to declare dayName to display
    dayName = "Sunday";
  } else if (day == 1){
    dayName = "Monday";
  } else if (day == 2){
    dayName = "Tuesday";
  } else if (day == 3){
    dayName = "Wednesday";
  } else if (day == 4){
    dayName = "Thursday";
  } else if (day == 5){
    dayName = "Friday";
  } else if (day == 6){
    dayName = "Saturday";
  }
  if (dateMonth == 1){ //If Statement to declare nameMonth to display
    nameMonth = "January";
  } else if (dateMonth == 2) {
    nameMonth = "February";
  } else if (dateMonth == 3) {
    nameMonth = "March";
  } else if (dateMonth == 4) {
    nameMonth = "April";
  } else if (dateMonth == 5) {
    nameMonth = "May";
  } else if (dateMonth == 6) {
    nameMonth = "June";
  } else if (dateMonth == 7) {
    nameMonth = "July";
  } else if (dateMonth == 8) {
    nameMonth = "August";
  } else if (dateMonth == 9) {
    nameMonth = "September";
  } else if (dateMonth == 10) {
    nameMonth = "October";
  } else if (dateMonth == 11) {
    nameMonth = "November";
  } else if (dateMonth == 12) {
    nameMonth = "December";
  }
  currentDat.text(dayName+", "+nameMonth+" "+dateDay+", "+year); //Displays text for day and date
  })
});
