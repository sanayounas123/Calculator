var datePicker = document.querySelector('#datepicker');
var Bdate = document.querySelector('.birthDate');
var BMonth = document.querySelector('.birthMonth');
var Byear = document.querySelector('.birthYear');

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageFortniht = document.getElementById('ageFortniht');
var ageWeeks = document.getElementById('ageWeeks');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageMinute = document.getElementById('ageMinute');
var ageSecond = document.getElementById('ageSecond');
var ageMillseconds = document.getElementById('ageMillseconds');
var dateFormet = document.querySelector('.dateFormet');


datePicker.addEventListener('change',function(){
    var Options = {year: 'numeric', month: 'long', day: 'numeric'}; 
  var selecteDate = new Date(this.value);
  var DOB = selecteDate.toLocaleDateString('en-US',Options);

 
  dateFormet.innerHTML = "DOB : " + " " + DOB;

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












// const months = [31, 28, 31, 30, 31, 30, 31, 31, 30,31, 30, 31]

// datePicker.addEventListener('change',() =>{
     
//     let today = new Date()
//     let birthDates = new Date(datePicker.value)

//     let todaytime = today.getTime()
//     let birthTime = birthDates.getTime()

//     let result = todayTime - birthTime

//     let birthDate, birthMonth, birthYear

//     let birthDetails = {
//         year: birthDates.getFullYear(),
//         month:birthDates.getMonth()+1,
//         date: birthDates.getDate()
//     }

//     let currentDetails = {
//         year: today.getFullYear(),
//         month: today.getMonth()+1,
//         date: today.getDate()
//     }

//     // calculate Age...

//     birthYear = currentDetails.year - birthDetails.year

//    if(currentDetails.month >= currentDetails.month){

//     birthMonth = currentDetails.month - birthDetails.month
//    }
//    else{

//     birthYear--
//     birthMonth = 12 + currentDetails.month - birthDetails.month
//    }
 
//    if(currentDetails.date >= birthDetails.date){
//     birthDate = currentDetails.date - birthDetails
//    }
//    else{
//     birthMonth--
//     let days = months[currentDetails.month - 2]
//     birthDate = days + currentDetails.date - birthDetails.date

//     if(birthMonth < 0){

    
//     birthMonth = 11
//     birthYear--
//    }
// }

// let option = {year: 'numeric', month: 'long', day: 'numeric'}
// let DOB = birthDates.toLocaleDateString('en-us',option)

// if(birthDetails.year > currentDetails.year || (birthDetails.month >
//     currentDetails.month && birthDetails.year == currentDetails.year)
//      || (birthDetails.date > currentDetails.date && birthDetails.month == 
//         currentDetails.month && birthDetails.year == currentDetails.year)){
//             alert("not Born Yet, May be Your given DOB is Wrong.")
//            datePicker.value = "" 
//            Byear.innerHTML = "-"
//            BMonth.innerHTML = "-"
//            Bdate.innerHTML = ""
          
//         }
//         else{
//             Byear.innerHTML = birthYear
//             BMonth.innerHTML = birthMonth
//             Bdate.innerHTML = birthDate
//             dateFormet.innerHTML = 'DOB: <span class="birthDate">${DOB}</span>'
//         }

// })