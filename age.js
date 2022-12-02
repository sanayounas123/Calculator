var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');


// variables for priniting value

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSecond = document.getElementById('ageSecond');
var ageMillseconds = document.getElementById('ageMillseconds');

datePicker.addEventListener('change',function(){
    var Options = {year: 'numeric', month: 'long', day: 'numeric'}; 
  var selecteDate = new Date(this.value);
  var DOB = selecteDate.toLocaleDateString('en-US',Options);

 
  choseDate.innerHTML = "DOB : " + " " + DOB;

  var millSeconds_Btw_DOB = Date.parse(DOB);

  var  millSecond_Btw_NOW = Date.now();

  var age_in_MillSeconds = millSecond_Btw_NOW - millSeconds_Btw_DOB;

  console.log(age_in_MillSeconds);


//   console.log(age-in-MillSeconds);

var millSeconds = age_in_MillSeconds;
var second = 1000;
var minute = second*60;
var hour = minute*60;
var day = hour*24;
var month = day*30;
var year = day*365;

// NCW START THE CALCULATION

var years = Math.round(millSeconds/year);
var months = years*12;
var days = years*365;
var hours = Math.round(millSeconds/hour);
var seconds = Math.round(millSeconds/second);

// now it is time to print values is boxes

ageYear.innerHTML = years
ageMonth.innerHTML = months
ageDays.innerHTML = days
ageHours.innerHTML = hours
ageSecond.innerHTML = seconds
ageMillseconds.innerHTML = millSeconds;

document.querySelector('.age-calc').classList.add('expand')
})

