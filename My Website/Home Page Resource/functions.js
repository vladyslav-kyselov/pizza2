/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 11
   Tutorial Case

   Author: 
   Date:   

   Function List:
   showDate(dateObj)
      Returns the current date in the format mm/dd/yyyy

   showTime(dateObj)
      Returns the current time in the format hh:mm:ss a.m./p.m.

   calcDays(currentDate)
      Returns the number of days between the current date and January 1st
      of the next year

*/

function showDate(dateObj){
	thisDate = dateObj.getDate();
	thisMonth = dateObj.getMonth()+1;
	thisYear = dateObj.getFullYear();
	return thisMonth + "/" + thisDate + "/" + thisYear;
}

function showTime(dateObj){
	thisSecond = dateObj.getSeconds();
	thisMinute = dateObj.getMinutes();
	thisHour = dateObj.getHours();
	
	// change thisHour from 24-hour time to 12 hour time by:
	
	// 1) if thisHour < 12 then set ampm to " a.m." otherwise set it to " p.m."
	var ampm = (thisHour < 12) ? " a.m." : " p.m.";
	
	// 2) if thisHour > 12 then subtract 12 from the thisHour variable
	thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;
	
	// 3) if thisHour equals 0, change it to 12
	thisHour = (thisHour == 0) ? 12 : thisHour;
	
	// add leading zeros to minutes and seconds less than 10
	thisMinute = thisMinute < 10 ? "0" + thisMinute : thisMinute;
	thisSecond = thisSecond < 10 ? "0" + thisSecond : thisSecond;
	
	return thisHour + ":" + thisMinute + ":" + thisSecond + ampm;
}

function calcDays(currentDate){
	
	// create a Date Object for January 1 of the next year
	newYear = new Date("January 1, 2015");
	nextYear = currentDate.getFullYear()+1;
	newYear.setFullYear(nextYear);
	// calculate the difference between currentDate and January 1
	days = (newYear - currentDate)/(1000*60*60*24);
	
	return days;

}