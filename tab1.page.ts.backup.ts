import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router){}

	navigate(personId){

		let HTable = {
			"H1": {
				"Element": "Wood",
				"Sign": "+",
				"Color": "Green"
			},
			"H2": {
				"Element": "Wood",
				"Sign": "-",
				"Color": "Green"
			},
			"H3": {
				"Element": "Fire",
				"Sign": "+",
				"Color": "Red"
			},
			"H4": {
				"Element": "Fire",
				"Sign": "-",
				"Color": "Red"
			},
			"H5": {
				"Element": "Earth",
				"Sign": "+",
				"Color": "Brown"
			},
			"H6": {
				"Element": "Earth",
				"Sign": "-",
				"Color": "Brown"
			},
			"H7": {
				"Element": "Metal",
				"Sign": "+",
				"Color": "Gray"
			},
			"H8": {
				"Element": "Metal",
				"Sign": "-",
				"Color": "Gray"
			},
			"H9": {
				"Element": "Water",
				"Sign": "+",
				"Color": "Blue"
			},
			"H10": {
				"Element": "Water",
				"Sign": "-",
				"Color": "Blue"
			}
		};

		let ETable = {
			"E1": {
				"Element": "Water",
				"Sign": "+",
				"Zodiac": "Rat",
				"Color": "Blue"
			},
			"E2": {
				"Element": "Earth",
				"Sign": "-",
				"Zodiac": "Ox",
				"Color": "Brown"
			},
			"E3": {
				"Element": "Wood",
				"Sign": "+",
				"Zodiac": "Tiger",
				"Color": "Green"
			},
			"E4": {
				"Element": "Wood",
				"Sign": "-",
				"Zodiac": "Rabbit",
				"Color": "Green"
			},
			"E5": {
				"Element": "Earth",
				"Sign": "+",
				"Zodiac": "Dragon",
				"Color": "Brown"
			},
			"E6": {
				"Element": "Fire",
				"Sign": "-",
				"Zodiac": "Snake",
				"Color": "Red"
			},
			"E7": {
				"Element": "Fire",
				"Sign": "+",
				"Zodiac": "Horse",
				"Color": "Red"
			},
			"E8": {
				"Element": "Earth",
				"Sign": "-",
				"Zodiac": "Sheep",
				"Color": "Brown"
			},
			"E9": {
				"Element": "Metal",
				"Sign": "+",
				"Zodiac": "Monkey",
				"Color": "Gray"
			},
			"E10": {
				"Element": "Metal",
				"Sign": "-",
				"Zodiac": "Rooster",
				"Color": "Gray"
			},
			"E11": {
				"Element": "Earth",
				"Sign": "+",
				"Zodiac": "Dog",
				"Color": "Brown"
			},
			"E12": {
				"Element": "Water",
				"Sign": "-",
				"Zodiac": "Pig",
				"Color": "Blue"
			},
		};

		let HD = 5;
		let ED = 9;
		let HM = 5;
		let EM = 3;
		let HY = 7;
		let EY = 1;

		let ALL = [8,6,4,5,5,6,7,7,7,7,8,7];
		
		//Riya 7/6/1989 1:15 Day: H4 - E4, Month: H7 - E7, Year: H6 - E6 ----- Time: H8 - E2, VeyChor: 0
		//VyLy 10/20/1984 18:15 Day: H4 - E12, Month: H1 - E11, Year: H1 - E1  ------ Time: H6 - E10, VeyChor: 4
		//Robert 3/2/1984 15:32 Day: H2 - E8, Month: H3 - E3, Year: H1 - E1 ------- Time: H1 - E9, VeyChor: 1
		//Boon 1/1/1977 2:22 Day: H5 - E7, Month: H7 - E1, Year: H4 - E6 ------ Time: H10 - E2, VeyChor: 8

		
		let startYear = moment("1/1/1900", "MM/DD/YYYY");

		let rangeH = 10;
		let rangeE = 12;
		let startDate = moment("2/4/1900", "MM/DD/YYYY");
		let endDate = moment("1/1/1977", "MM/DD/YYYY");
		let gender = "Male";
		// let timeHour = 1;
		// let timeMinute = 15;

		// let middleDate = moment(endDate, "MM/DD/YYYY");
		let getDate = parseInt(endDate.format('D'));
		let getMonth = parseInt(endDate.format('M'));
		let getYear = parseInt(endDate.format('Y'));
		// getMonth = (getMonth == 12) ? 0 : getMonth;
		// let leftDate = (getDate < 15) ? 15 - getDate : getDate;
		// middleDate.add(leftDate, 'day');
		
		// let days = Math.abs(moment.duration(endDate.diff(startDate)).asDays());
		// days = Math.round(days);

		// let months = Math.abs(moment.duration(endDate.diff(startDate)).asMonths());
		// let middleMonth = Math.abs(moment.duration(middleDate.diff(startDate)).asMonths());
		// let firstDateOfMonth = ALL[getMonth];
		// let EMonth = getMonth;
		// if (getDate >= firstDateOfMonth){
		// 	EMonth = EMonth + 1;
		// }



		

		

				
		// let years = Math.abs(moment.duration(endDate.diff(startYear)).asYears());
		// years = Math.floor(years);
		// let yearMonth = parseInt(endDate.format('M'));

		// if (yearMonth == 12 && getDate >= 22){
		// 	years ++;
		// }

		// let fMonths = Math.floor(months);
		// let fMidMonth = Math.floor(middleMonth);

		// if (getDate < firstDateOfMonth && fMonths == fMidMonth){
		// 	months = Math.floor(months) - 1;
		// }
		// else{
		// 	months = Math.floor(months);
		// }

		// let modHD = days % rangeH;
		// let modED = days % rangeE;
		// let modHM = months % rangeH;
		// let modEM = months % rangeE;
		// let modHY = years % rangeH;
		// let modEY = years % rangeE;
		

		// HD = HD + modHD;
		// ED = ED + modED;
		// HM = HM + modHM;
		// EM = EM + modEM;
		// HY = HY + modHY;
		// EY = EY + modEY;
		
		// HD = (HD > rangeH) ? HD % rangeH : HD;
		// ED = (ED > rangeE) ? ED % rangeE : ED;
		// HM = (HM > rangeH) ? HM % rangeH : HM;
		// EM = (EM > rangeE) ? EM % rangeE : EM;
		// HY = (HY > rangeH) ? HY % rangeH : HY;
		// EY = (EY > rangeE) ? EY % rangeE : EY;

		// HM = (EM < EMonth) ? HM + 1 : HM;
		// if (HM > rangeH){
		// 	HM = 1;
		// }

		// EM = (EM < EMonth) ? EM + 1 : EM;
		// if (HM > rangeE){
		// 	EM = 1;
		// }

		

		// let timeTableH = {
		// 	"H1": [1,2,3,4,5,6,7,8,9,10,2,2],
		// 	"H2": [3,4,5,6,7,8,9,10,1,2,3,4],
		// 	"H3": [5,7,8,9,10,1,2,3,4,5,6,7],
		// 	"H4": [7,8,9,10,1,2,3,4,5,6,7,8],
		// 	"H5": [9,10,1,2,3,4,5,6,7,8,9,10]
		// }


		// let timeHD = "H" + HD;
		

		// let ET = 1;
		// console.log('timeHour', timeHour);
		// if (timeHour < 23){
		// 	ET = 12;
		// }
		// if (timeHour < 21){
		// 	ET = 11;
		// }
		// if (timeHour < 19){
		// 	ET = 10;
		// }
		// if (timeHour < 17){
		// 	ET = 9;
		// }
		// if (timeHour < 15){
		// 	ET = 8;
		// }
		// if (timeHour < 13){
		// 	ET = 7;
		// }
		// if (timeHour < 11){
		// 	ET = 6;
		// }
		// if (timeHour < 9){
		// 	ET = 5;
		// }
		// if (timeHour < 7){
		// 	ET = 4;
		// }
		// if (timeHour < 5){
		// 	ET = 3;
		// }
		// if (timeHour < 3){
		// 	ET = 2;
		// }
		// if (timeHour < 1){
		// 	ET = 1;
		// }

		
		

		// let timeEIndex = ET - 1;
		
		// timeEIndex = (timeEIndex == 0) ? 12 : timeEIndex;

		

		// let HT = 1;
		// if (timeHD == "H1" || timeHD == "H6"){
		// 	HT = timeTableH["H1"][timeEIndex];
		// }
		// else if (timeHD == "H2" || timeHD == "H7"){
		// 	HT = timeTableH["H2"][timeEIndex];
		// }
		// else if (timeHD == "H3" || timeHD == "H8"){
		// 	HT = timeTableH["H3"][timeEIndex];
		// }
		// else if (timeHD == "H4" || timeHD == "H9"){
		// 	HT = timeTableH["H4"][timeEIndex];
		// }
		// else if (timeHD == "H5" || timeHD == "H10"){
		// 	HT = timeTableH["H5"][timeEIndex];
		// }


		let myYear = this.getYears("1/1/1977");
		HY = myYear["HY"];
		EY = myYear["EY"];

		let myMonth = this.getMonths("1/1/1977");
		HM = myMonth["HM"];
		EM = myMonth["EM"];

		let myDays = this.getDays("1/1/1977");
		HD = myDays["HD"];
		ED = myDays["ED"];

		let timeHour = 1;
		let timeMinute = 15;
		let myTimes = this.getTimes(HD, timeHour, timeMinute);
		let HT = myTimes["HT"];
		let ET = myTimes["ET"];



		console.log({HT, ET, HD, ED, HM, EM, HY, EY});


		let myVeyChors = this.getVeyChors("Male", "1/1/1977");

		// let veyChorKeys = Object.keys(myVeyChors);
		for (let i = 0; i < myVeyChors.length; i ++){
			let veyChor = myVeyChors[i];
			let veyChorKeys = Object.keys(veyChor);
			let keyT = veyChorKeys[0];
			let keyB = veyChorKeys[1];
			let VT = veyChor[keyT];
			let VB = veyChor[keyB];
			console.log({keyT, VT, keyB, VB});
		}


		// // Count Forward
		// let myYearH = HTable["H" + HY];
		// let checkMonth = ALL[getMonth];
		// let countMonth = getMonth;
		// let firstNewMonth = ALL[countMonth];
		// let newCountMonth = (countMonth == 0) ? 12 : countMonth;
		// let veyChorYears = getYear;
		// let countDirection = "Forward";
		// //Count Backward
		// if ((gender == "Female" && myYearH['Sign'] == "+") || 
		// 	(gender == "Male" && myYearH['Sign'] == "-")){
		// 	countDirection = "Backward";
		// 	if (getDate < checkMonth){
		// 		countMonth --;
		// 	}
		// 	firstNewMonth = ALL[countMonth];
		// 	newCountMonth = (countMonth == 0) ? 12 : countMonth;
		// 	veyChorYears = getYear;
		// 	if (getDate < checkMonth && getMonth == 1){
		// 		veyChorYears --;
		// 	}
		// }

		// //Count Forward
		// if ((gender == "Female" && myYearH['Sign'] == "-") || 
		// 	(gender == "Male" && myYearH['Sign'] == "+")){
		// 	countDirection = "Forward";
		// 	if (getDate >= checkMonth){
		// 		countMonth ++;
		// 	}
		//  	firstNewMonth = ALL[countMonth];
		// 	newCountMonth = (countMonth == 0) ? 12 : countMonth;
		// 	veyChorYears = getYear;
		// 	if (getDate > checkMonth && getMonth == 12){
		// 		veyChorYears ++;
		// 	}
		// }

		// let newMonthFirstDay = moment(newCountMonth+"/"+firstNewMonth+"/"+veyChorYears, "MM/DD/YYYY");
		// let diffVeyChorDays = Math.round(Math.abs(moment.duration(endDate.diff(newMonthFirstDay)).asDays()));
		// let veyChor = Math.round(diffVeyChorDays / 3);
		// // console.log({veyChor});
		// // console.log('diffVeyChorDays => ' + newMonthFirstDay.format('l') + ' ' + endDate.format('l'), diffVeyChorDays);

		// let countHM = HM;
		// let countEM = EM;
		// // console.log({countHM, countEM});
		// for (let i = veyChor; i < 100; i = i + 10){
		// 	if (countDirection == "Backward"){
		// 		countHM --;
		// 		countEM --;
		// 		countHM = (countHM == 0) ? 10 : countHM;
		// 		countEM = (countEM == 0) ? 12 : countEM;
		// 	}
		// 	if (countDirection == "Forward"){
		// 		countHM ++;
		// 		countEM ++;
		// 		countHM = (countHM == 11) ? 1 : countHM;
		// 		countEM = (countEM == 13) ? 1 : countEM;
		// 	}
		// 	let eachH = HTable["H"+countHM];
		// 	let eachE = ETable["E"+countEM];
		// 	console.log(i + "-" + (i + 5), eachH["Element"] + eachH["Sign"]);
		// 	console.log((i + 5) + "-" + (i + 10), eachE["Zodiac"]);
		// 	console.log('--------');	
			
		// }

		let bornElements = ["Water", "Wood", "Fire", "Earth", "Metal"];

		let HTimeElement = HTable["H"+HT]["Element"];
		let ETimeElement = ETable["E"+ET]["Element"];
		let HDayElement = HTable["H"+HD]["Element"];
		let EDayElement = ETable["E"+ED]["Element"];
		let HMonthElement = HTable["H"+HM]["Element"];
		let EMonthElement = ETable["E"+EM]["Element"];
		let HYearElement = HTable["H"+HY]["Element"];
		let EYearElement = ETable["E"+EY]["Element"];

		

		let myElement = HDayElement;
		let myElementIndex = bornElements.indexOf(myElement);
		let motherElementIndex = myElementIndex - 1;
		let myElementMother = (motherElementIndex == -1 ) ? bornElements[4] : bornElements[motherElementIndex];
		console.log({myElement, myElementMother});
		
		

		let allMyElements = [
		HTimeElement, 
		ETimeElement, 
		HDayElement, 
		EDayElement, 
		HMonthElement, 
		EMonthElement, 
		HYearElement, 
		EYearElement
		];
		
		let count = 0;

		if (HTimeElement == myElement || HTimeElement == myElementMother){
			count ++;
		}

		if (ETimeElement == myElement || ETimeElement == myElementMother){
			count ++;
		}

		if (EDayElement == myElement || EDayElement == myElementMother){
			count ++;
		}

		if (HMonthElement == myElement || HMonthElement == myElementMother){
			count ++;
		}

		if (EMonthElement == myElementMother){
			count ++;
		}

		if (EMonthElement == myElement){
			count = count + 2;
		}

		if (HYearElement == myElement || HYearElement == myElementMother){
			count ++;
		}

		if (EYearElement == myElement || EYearElement == myElementMother){
			count ++;
		}

		if (myElement == "Water" || myElement == "Wood") {
			if (ET == 5 || ET == 2){
				count = count + 0.5;
			}
			if (ED == 5 || ED == 2){
				count = count + 0.5;
			}
		}


		let matchElement = [];

		if (count < 4) {
			matchElement.push(myElement);
			matchElement.push(myElementMother);
			if (HTimeElement == myElementMother || 
				EDayElement == myElementMother || 
				HMonthElement == myElementMother) {
				let myElementGrandMaIndex = motherElementIndex - 1;
				let myElementGrandma = (myElementGrandMaIndex == -1) ? bornElements[4] : bornElements[myElementGrandMaIndex];
				matchElement.push(myElementGrandma);
			}
		}

		if (count >= 4) {
			let sonElementIndex = myElementIndex + 1;
			sonElementIndex = (sonElementIndex == 5) ? 0 : sonElementIndex;
			let grandsonElementIndex = sonElementIndex + 1;
			grandsonElementIndex = (grandsonElementIndex == 5) ? 0 : grandsonElementIndex;
			matchElement = [];
			matchElement.push(bornElements[sonElementIndex]);
			matchElement.push(bornElements[grandsonElementIndex]);
		}


		// Special Case DT

		let elementDT;
		let elementDTIndex;


		if (allMyElements.filter(x => x == bornElements[0]).length >= 5) {
			elementDT = bornElements[0];
			elementDTIndex = 0;
		}
		if (allMyElements.filter(x => x == bornElements[1]).length >= 5) {
			elementDT = bornElements[1];
			elementDTIndex = 1;
		}
		if (allMyElements.filter(x => x == bornElements[2]).length >= 5) {
			elementDT = bornElements[2];
			elementDTIndex = 2;
		}
		if (allMyElements.filter(x => x == bornElements[3]).length >= 5) {
			elementDT = bornElements[3];
			elementDTIndex = 3
		}
		if (allMyElements.filter(x => x == bornElements[4]).length >= 5) {
			elementDT = bornElements[4];
			elementDTIndex = 4
		}

		console.log({elementDT, elementDTIndex});

		if (elementDT){
			matchElement = [];
			matchElement.push(elementDT);
			let dtMotherIndex = elementDTIndex - 1;
			let dtMother = (dtMotherIndex == -1) ? bornElements[4] : bornElements[dtMotherIndex];
			matchElement.push(dtMother);
		}


		console.log({count, matchElement});

		// console.log({HTimeElement, ETimeElement, HDayElement, EDayElement, HMonthElement,
		// 	EMonthElement, HYearElement, EYearElement});
		// console.log({count});
		

		// if (HD == )


		// Favorable Element
		// 4 Strong
		// Skip HD
		// Find the one that Create Them and Them Self
		// Ignore Sign + or -



		
		// this.router.navigate(['/tabs/tab1/result/{{personId}}']);

	}

	getYears(date){
		let rangeH = 10;
		let rangeE = 12;
		let HY = 7;
		let EY = 1;
		let startYear = moment("1/1/1900", "MM/DD/YYYY");
		let endDate = moment(date, "MM/DD/YYYY");
		let years = Math.abs(moment.duration(endDate.diff(startYear)).asYears());
		years = Math.floor(years);
		let getDate = parseInt(endDate.format('D'));
		let getMonth = parseInt(endDate.format('M'));
		let yearMonth = parseInt(endDate.format('M'));

		if (yearMonth == 12 && getDate >= 22){
			years ++;
		}

		let modHY = years % rangeH;
		let modEY = years % rangeE;

		HY = HY + modHY;
		EY = EY + modEY;

		HY = (HY > rangeH) ? HY % rangeH : HY;
		EY = (EY > rangeE) ? EY % rangeE : EY;

		console.log({modHY, modEY});

		return {HY: HY, EY: EY};
	}

	getMonths(date){
		let rangeH = 10;
		let rangeE = 12;
		let HM = 5;
		let EM = 3;
		let ALL = [8,6,4,5,5,6,7,7,7,7,8,7];
		let startYear = moment("1/1/1900", "MM/DD/YYYY");
		let startDate = moment("2/4/1900", "MM/DD/YYYY");
		let endDate = moment(date, "MM/DD/YYYY");

		let middleDate = moment(endDate, "MM/DD/YYYY");
		let getDate = parseInt(endDate.format('D'));
		let getMonth = parseInt(endDate.format('M'));
		let getYear = parseInt(endDate.format('Y'));

		getMonth = (getMonth == 12) ? 0 : getMonth;
		let leftDate = (getDate < 15) ? 15 - getDate : getDate;
		middleDate.add(leftDate, 'day');
		
		// let days = Math.abs(moment.duration(endDate.diff(startDate)).asDays());
		// days = Math.round(days);
		
		let months = Math.abs(moment.duration(endDate.diff(startDate)).asMonths());
		let middleMonth = Math.abs(moment.duration(middleDate.diff(startDate)).asMonths());
		let firstDateOfMonth = ALL[getMonth];
		let EMonth = getMonth;
		if (getDate >= firstDateOfMonth){
			EMonth = EMonth + 1;
		}


		let fMonths = Math.floor(months);
		let fMidMonth = Math.floor(middleMonth);

		if (getDate < firstDateOfMonth && fMonths == fMidMonth){
			months = Math.floor(months) - 1;
		}
		else{
			months = Math.floor(months);
		}

		let modHM = months % rangeH;
		let modEM = months % rangeE;

		HM = HM + modHM;
		EM = EM + modEM;

		HM = (HM > rangeH) ? HM % rangeH : HM;
		EM = (EM > rangeE) ? EM % rangeE : EM;

		HM = (EM < EMonth) ? HM + 1 : HM;
		if (HM > rangeH){
			HM = 1;
		}

		EM = (EM < EMonth) ? EM + 1 : EM;
		if (HM > rangeE){
			EM = 1;
		}

		console.log({modHM, modEM});

		return {HM: HM, EM: EM};
	}

	getDays(date){
		let rangeH = 10;
		let rangeE = 12;
		let HD = 5;
		let ED = 9;
		let startDate = moment("2/4/1900", "MM/DD/YYYY");
		let endDate = moment(date, "MM/DD/YYYY");
		let days = Math.abs(moment.duration(endDate.diff(startDate)).asDays());
		days = Math.round(days);

		let modHD = days % rangeH;
		let modED = days % rangeE;

		HD = HD + modHD;
		ED = ED + modED;

		HD = (HD > rangeH) ? HD % rangeH : HD;
		ED = (ED > rangeE) ? ED % rangeE : ED;

		return {HD: HD, ED: ED};
	}

	getTimes(HD, timeHour, timeMinute) {
		let timeTableH = {
			"H1": [1,2,3,4,5,6,7,8,9,10,2,2],
			"H2": [3,4,5,6,7,8,9,10,1,2,3,4],
			"H3": [5,7,8,9,10,1,2,3,4,5,6,7],
			"H4": [7,8,9,10,1,2,3,4,5,6,7,8],
			"H5": [9,10,1,2,3,4,5,6,7,8,9,10]
		}
		

		let ET = 1;

		if (timeHour < 23){
			ET = 12;
		}
		if (timeHour < 21){
			ET = 11;
		}
		if (timeHour < 19){
			ET = 10;
		}
		if (timeHour < 17){
			ET = 9;
		}
		if (timeHour < 15){
			ET = 8;
		}
		if (timeHour < 13){
			ET = 7;
		}
		if (timeHour < 11){
			ET = 6;
		}
		if (timeHour < 9){
			ET = 5;
		}
		if (timeHour < 7){
			ET = 4;
		}
		if (timeHour < 5){
			ET = 3;
		}
		if (timeHour < 3){
			ET = 2;
		}
		if (timeHour < 1){
			ET = 1;
		}


		let timeEIndex = ET - 1;
		
		timeEIndex = (timeEIndex == 0) ? 12 : timeEIndex;

		

		let HT = 1;
		if (HD == 1 || HD == 6){
			HT = timeTableH["H1"][timeEIndex];
		}
		else if (HD == 2 || HD == 7){
			HT = timeTableH["H2"][timeEIndex];
		}
		else if (HD == 3 || HD == 8){
			HT = timeTableH["H3"][timeEIndex];
		}
		else if (HD == 4 || HD == 9){
			HT = timeTableH["H4"][timeEIndex];
		}
		else if (HD == 5 || HD == 10){
			HT = timeTableH["H5"][timeEIndex];
		}

		return {HT: HT, ET: ET};

	}

	getVeyChors(gender, date){
		let HTable = {
			"H1": {
				"Element": "Wood",
				"Sign": "+",
				"Color": "Green"
			},
			"H2": {
				"Element": "Wood",
				"Sign": "-",
				"Color": "Green"
			},
			"H3": {
				"Element": "Fire",
				"Sign": "+",
				"Color": "Red"
			},
			"H4": {
				"Element": "Fire",
				"Sign": "-",
				"Color": "Red"
			},
			"H5": {
				"Element": "Earth",
				"Sign": "+",
				"Color": "Brown"
			},
			"H6": {
				"Element": "Earth",
				"Sign": "-",
				"Color": "Brown"
			},
			"H7": {
				"Element": "Metal",
				"Sign": "+",
				"Color": "Gray"
			},
			"H8": {
				"Element": "Metal",
				"Sign": "-",
				"Color": "Gray"
			},
			"H9": {
				"Element": "Water",
				"Sign": "+",
				"Color": "Blue"
			},
			"H10": {
				"Element": "Water",
				"Sign": "-",
				"Color": "Blue"
			}
		};

		let startDate = moment("2/4/1900", "MM/DD/YYYY");
		let endDate = moment(date, "MM/DD/YYYY");
		let myYear = this.getYears(date);
		let HY = myYear["HY"];
		let myMonth = this.getMonths(date);
		let HM = myMonth["HM"];
		let EM = myMonth["EM"];
		let getDate = parseInt(endDate.format('D'));
		let getMonth = parseInt(endDate.format('M'));
		let getYear = parseInt(endDate.format('Y'));
		let ALL = [8,6,4,5,5,6,7,7,7,7,8,7];

		let days = Math.abs(moment.duration(endDate.diff(startDate)).asDays());
		days = Math.round(days);
		// Count Forward
		let myYearH = HTable["H" + HY];
		let checkMonth = ALL[getMonth];
		let countMonth = getMonth;
		let firstNewMonth = ALL[countMonth];
		let newCountMonth = (countMonth == 0) ? 12 : countMonth;
		let veyChorYears = getYear;
		let countDirection = "Forward";
		//Count Backward
		if ((gender == "Female" && myYearH['Sign'] == "+") || 
			(gender == "Male" && myYearH['Sign'] == "-")){
			countDirection = "Backward";
			if (getDate < checkMonth){
				countMonth --;
			}
			firstNewMonth = ALL[countMonth];
			newCountMonth = (countMonth == 0) ? 12 : countMonth;
			veyChorYears = getYear;
			if (getDate < checkMonth && getMonth == 1){
				veyChorYears --;
			}
		}

		//Count Forward
		if ((gender == "Female" && myYearH['Sign'] == "-") || 
			(gender == "Male" && myYearH['Sign'] == "+")){
			countDirection = "Forward";
			if (getDate >= checkMonth){
				countMonth ++;
			}
		 	firstNewMonth = ALL[countMonth];
			newCountMonth = (countMonth == 0) ? 12 : countMonth;
			veyChorYears = getYear;
			if (getDate > checkMonth && getMonth == 12){
				veyChorYears ++;
			}
		}

		let newMonthFirstDay = moment(newCountMonth+"/"+firstNewMonth+"/"+veyChorYears, "MM/DD/YYYY");
		let diffVeyChorDays = Math.round(Math.abs(moment.duration(endDate.diff(newMonthFirstDay)).asDays()));
		let veyChor = Math.round(diffVeyChorDays / 3);
		// console.log({veyChor});
		// console.log('diffVeyChorDays => ' + newMonthFirstDay.format('l') + ' ' + endDate.format('l'), diffVeyChorDays);

		let countHM = HM;
		let countEM = EM;
		// console.log({countHM, countEM});
		let myVeyChors = [];

		for (let i = veyChor; i < 100; i = i + 10){
			
			if (countDirection == "Backward"){
				countHM --;
				countEM --;
				countHM = (countHM == 0) ? 10 : countHM;
				countEM = (countEM == 0) ? 12 : countEM;
			}
			if (countDirection == "Forward"){
				countHM ++;
				countEM ++;
				countHM = (countHM == 11) ? 1 : countHM;
				countEM = (countEM == 13) ? 1 : countEM;
			}

			let subVeyChors = {};
			subVeyChors[i] = countHM;
			subVeyChors[i+5] = countEM;
			// subVeyChors.push(countHM);
			// subVeyChors.push(countEM);
			myVeyChors.push(subVeyChors);
			// let eachH = HTable["H"+countHM];
			// let eachE = ETable["E"+countEM];
			// console.log(i + "-" + (i + 5), eachH["Element"] + eachH["Sign"]);
			// console.log((i + 5) + "-" + (i + 10), eachE["Zodiac"]);
			// console.log('--------');	
		}

		return myVeyChors;
	}
}
