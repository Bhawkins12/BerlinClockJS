var BerlinClock = {	
	tick: function(){
		var date = new Date(),
			hour = date.getHours(),
			minute = date.getMinutes()
			second = date.getSeconds();
	
		BerlinClock.updateHours(hour);
		BerlinClock.updateMinutes(minute);
		BerlinClock.updateSeconds(second);
		BerlinClock.updateClock(hour, minute, second);
	},
	updateClock: function(hour, minute, second){
		var setTime = function(n){
			if(n<10){
				return "0" +n;
			}
				return n;
			}
			hour = setTime(hour);
			minute = setTime(minute);
			second = setTime(second);
			document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
		
	},
	updateSeconds: function(second) {
		var seconds = document.getElementById("seconds").children[0];
			if(second % 2 == 0) {
				seconds.classList.remove("yellow");
			} else {
				seconds.classList.add("yellow");
			}
	},
	updateHours: function(hour) {
	
		var hoursOfFive = document.getElementById("hoursOfFive").children;
			if (hour / 5 < 1) {
				hoursOfFive[0].classList.remove("red");
				hoursOfFive[1].classList.remove("red");
				hoursOfFive[2].classList.remove("red");
				hoursOfFive[3].classList.remove("red");
			} else if (hour / 5 >= 1 && hour / 5 < 2) {
				hoursOfFive[0].classList.add("red");
				hoursOfFive[1].classList.remove("red");
				hoursOfFive[2].classList.remove("red");
				hoursOfFive[3].classList.remove("red");
			}
			  else if (hour / 5 >= 2 && hour / 5 < 3) {
				hoursOfFive[0].classList.add("red");
				hoursOfFive[1].classList.add("red");
				hoursOfFive[2].classList.remove("red");
				hoursOfFive[3].classList.remove("red");
			}
			  else if (hour/5 >= 3 && hour / 5 <4){
				hoursOfFive[0].classList.add("red");
				hoursOfFive[1].classList.add("red");
				hoursOfFive[2].classList.add("red");
				hoursOfFive[3].classList.remove("red");
			}
			  else if (hour/5 >=4) {
				hoursOfFive[0].classList.add("red");
				hoursOfFive[1].classList.add("red");
				hoursOfFive[2].classList.add("red");
				hoursOfFive[3].classList.add("red");
			}
		var hoursOfOne = document.getElementById("hoursOfOne").children;
			if (hour % 5 == 0) {
				hoursOfOne[0].classList.remove("red");
				hoursOfOne[1].classList.remove("red");
				hoursOfOne[2].classList.remove("red");
				hoursOfOne[3].classList.remove("red");
			} 
			  else if (hour % 5 == 1) {
				hoursOfOne[0].classList.add("red");
				hoursOfOne[1].classList.remove("red");
				hoursOfOne[2].classList.remove("red");
				hoursOfOne[3].classList.remove("red");
			} 
			  else if (hour % 5 == 2) {
				hoursOfOne[0].classList.add("red");
				hoursOfOne[1].classList.add("red");
				hoursOfOne[2].classList.remove("red");
				hoursOfOne[3].classList.remove("red");
			} 
			  else if (hour % 5 == 3) {
				hoursOfOne[0].classList.add("red");
				hoursOfOne[1].classList.add("red");
				hoursOfOne[2].classList.add("red");
				hoursOfOne[3].classList.remove("red");
			} 
			  else if (hour % 5 == 4) {
				hoursOfOne[0].classList.add("red");
				hoursOfOne[1].classList.add("red");
				hoursOfOne[2].classList.add("red");
				hoursOfOne[3].classList.add("red");
			}

	},
		updateMinutes: function(minute){
		var minutesOfFive = document.getElementById("minutesOfFive").children;
			if( minute / 5 < 1) {
				minutesOfFive[0].classList.remove("yellow");
				minutesOfFive[1].classList.remove("yellow");
				minutesOfFive[2].classList.remove("red");
				minutesOfFive[3].classList.remove("yellow");
				minutesOfFive[4].classList.remove("yellow");
				minutesOfFive[5].classList.remove("red");
				minutesOfFive[6].classList.remove("yellow");
				minutesOfFive[7].classList.remove("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 1 && minute / 5 < 2) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.remove("yellow");
				minutesOfFive[2].classList.remove("red");
				minutesOfFive[3].classList.remove("yellow");
				minutesOfFive[4].classList.remove("yellow");
				minutesOfFive[5].classList.remove("red");
				minutesOfFive[6].classList.remove("yellow");
				minutesOfFive[7].classList.remove("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 2 && minute / 5 < 3) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.remove("red");
				minutesOfFive[3].classList.remove("yellow");
				minutesOfFive[4].classList.remove("yellow");
				minutesOfFive[5].classList.remove("red");
				minutesOfFive[6].classList.remove("yellow");
				minutesOfFive[7].classList.remove("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 3 && minute / 5 < 4) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.remove("yellow");
				minutesOfFive[4].classList.remove("yellow");
				minutesOfFive[5].classList.remove("red");
				minutesOfFive[6].classList.remove("yellow");
				minutesOfFive[7].classList.remove("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 4 && minute / 5 < 5) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.add("yellow");
				minutesOfFive[4].classList.remove("yellow");
				minutesOfFive[5].classList.remove("red");
				minutesOfFive[6].classList.remove("yellow");
				minutesOfFive[7].classList.remove("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 5 && minute / 5 < 6) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.add("yellow");
				minutesOfFive[4].classList.add("yellow");
				minutesOfFive[5].classList.remove("red");
				minutesOfFive[6].classList.remove("yellow");
				minutesOfFive[7].classList.remove("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 6 && minute / 5 < 7) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.add("yellow");
				minutesOfFive[4].classList.add("yellow");
				minutesOfFive[5].classList.add("red");
				minutesOfFive[6].classList.remove("yellow");
				minutesOfFive[7].classList.remove("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 7 && minute / 5 < 8) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.add("yellow");
				minutesOfFive[4].classList.add("yellow");
				minutesOfFive[5].classList.add("red");
				minutesOfFive[6].classList.add("yellow");
				minutesOfFive[7].classList.remove("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 8 && minute / 5 < 9) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.add("yellow");
				minutesOfFive[4].classList.add("yellow");
				minutesOfFive[5].classList.add("red");
				minutesOfFive[6].classList.add("yellow");
				minutesOfFive[7].classList.add("yellow");
				minutesOfFive[8].classList.remove("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 9 && minute / 5 < 10) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.add("yellow");
				minutesOfFive[4].classList.add("yellow");
				minutesOfFive[5].classList.add("red");
				minutesOfFive[6].classList.add("yellow");
				minutesOfFive[7].classList.add("yellow");
				minutesOfFive[8].classList.add("red");
				minutesOfFive[9].classList.remove("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 10 && minute / 5 < 11) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.add("yellow");
				minutesOfFive[4].classList.add("yellow");
				minutesOfFive[5].classList.add("red");
				minutesOfFive[6].classList.add("yellow");
				minutesOfFive[7].classList.add("yellow");
				minutesOfFive[8].classList.add("red");
				minutesOfFive[9].classList.add("yellow");
				minutesOfFive[10].classList.remove("yellow");
			}
			  else if( minute / 5 >= 11 && minute / 5 < 12) {
				minutesOfFive[0].classList.add("yellow");
				minutesOfFive[1].classList.add("yellow");
				minutesOfFive[2].classList.add("red");
				minutesOfFive[3].classList.add("yellow");
				minutesOfFive[4].classList.add("yellow");
				minutesOfFive[5].classList.add("red");
				minutesOfFive[6].classList.add("yellow");
				minutesOfFive[7].classList.add("yellow");
				minutesOfFive[8].classList.add("red");
				minutesOfFive[9].classList.add("yellow");
				minutesOfFive[10].classList.add("yellow");
			}
		var minutesOfOne = document.getElementById("minutesOfOne").children;
			if( minute % 5 ==0) {
				minutesOfOne[0].classList.remove("yellow");
				minutesOfOne[1].classList.remove("yellow");
				minutesOfOne[2].classList.remove("yellow");
				minutesOfOne[3].classList.remove("yellow");
			}
			  else if( minute % 5 ==1) {
				minutesOfOne[0].classList.add("yellow");
				minutesOfOne[1].classList.remove("yellow");
				minutesOfOne[2].classList.remove("yellow");
				minutesOfOne[3].classList.remove("yellow");
			}
			  else if( minute % 5 ==2) {
				minutesOfOne[0].classList.add("yellow");
				minutesOfOne[1].classList.add("yellow");
				minutesOfOne[2].classList.remove("yellow");
				minutesOfOne[3].classList.remove("yellow");
			}
			  else if( minute % 5 ==3) {
				minutesOfOne[0].classList.add("yellow");
				minutesOfOne[1].classList.add("yellow");
				minutesOfOne[2].classList.add("yellow");
				minutesOfOne[3].classList.remove("yellow");
			}
			  else if( minute % 5 ==4) {
				minutesOfOne[0].classList.add("yellow");
				minutesOfOne[1].classList.add("yellow");
				minutesOfOne[2].classList.add("yellow");
				minutesOfOne[3].classList.add("yellow");
			}
	}
	
}

