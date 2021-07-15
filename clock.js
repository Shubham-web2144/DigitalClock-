
// main function for running clock
function run_Clock(){

// week day name array 
let week_day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday ","Saturday"];

// months name array 
let month_name = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// date method function 
var Time = new Date();
var hour = Time.getHours();
var minute = Time.getMinutes();
var second = Time.getSeconds();
var day = week_day[Time.getDay()];
var current_date = Time.getDate();
var month = month_name[Time.getMonth()];
var year = Time.getFullYear();

// accessing selectors by id 
var hr = document.getElementById("hr");
var min = document.getElementById("mnt");
var sec = document.getElementById("sec");
var type = "am";
var day_name = document.getElementById("day");
var date_box = document.getElementById("date_box");

// type = pmam;
// if condition for 12 hour clock
if(hour > 12){
				hour= hour-12;
				type = "pm";
}


// condition for double digits number
if(second < 10){
				second= "0" + second;
}
if(minute < 10){
				minute = "0" + minute;
}
if(hour < 10){
			hour = "0" + hour;
}

// printing time in html page
var type_am = type;
hr.innerHTML = hour;
min.innerHTML = minute;
sec.innerHTML = second +" "+ type_am;
day_name.innerHTML = day;
date_box.innerHTML = current_date+ "-" + month + "-" + year;


// running clock function 
setInterval(run_Clock,1000);
}

//calling the function 
run_Clock();
