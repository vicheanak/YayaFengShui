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
		let HD = 5;
		let ED = 9;
		let HY = 7;
		let EY = 1;
		let HM = 5;
		let EM = 3;

		// let All12 = {
		// 	E1: [[8,12], [5,1]], 
		// 	E2: [[6,1], [3,2]],
		// 	E3: [[4,2], [4,3]],
		// 	E4: [[5,3], [4,4]],
		// 	E5: [[5,4], [5,5]],
		// 	E6: [[6,5], [6,6]],
		// 	E7: [[7,6], [6,7]],
		// 	E8: [[7,7], [6,8]],
		// 	E9: [[7,8], [6,9]],
		// 	E10: [[7,9], [7,10]],
		// 	E11: [[8,10], [6,11]],
		// 	E12: [[7,11], [7,12]]
		// };

		// let ALL = [[8,5],[6,3],[4,4],[5,4],[5,5],[6,6],[7,6],[7,6],[7,6],[7,7],[8,6],[7,7]];
		let ALL = [8,6,4,5,5,6,7,7,7,7,8,7];

		let rangeH = 10;
		let rangeE = 12;
		let startDate = moment("2/4/1900", "MM/DD/YYYY");
		let endDate = moment("12/25/1998", "MM/DD/YYYY"); //H8 E6
		let middleDate = moment(endDate, "MM/DD/YYYY");
		let getDate = parseInt(endDate.format('D'));
		let getMonth = parseInt(endDate.format('M'));
		getMonth = (getMonth == 12) ? 0 : getMonth;
		let leftDate = (getDate < 15) ? 15 - getDate : getDate; 
		middleDate.add(leftDate, 'day');
		// let endDate1 = moment("4/3/2000", "MM/DD/YYYY");
		// let endDate2 = moment("4/4/2000", "MM/DD/YYYY");
		// let endDate3 = moment("4/6/2000", "MM/DD/YYYY");
		
		let days = Math.abs(moment.duration(endDate.diff(startDate)).asDays());
		days = Math.round(days);

		let months = Math.abs(moment.duration(endDate.diff(startDate)).asMonths());
		console.log('Months ' + endDate.format('l'), months);

		let middleMonth = Math.abs(moment.duration(middleDate.diff(startDate)).asMonths());
		console.log('Middle Month', middleMonth);

		let firstDateOfMonth = ALL[getMonth];
		
		console.log('getDate', getDate);
		console.log('firstDateOfMonth', firstDateOfMonth);
		// console.log('getMonth', getMonth);
		let EMonth = getMonth;
		if (getDate >= firstDateOfMonth){
			EMonth = EMonth + 1;
		}
		console.log('Eearthly Month VERIFY:', EMonth);

		//Riya 7/6/1989 H7 - E7
		//VyLy 10/24/1984 H1 - E11
		//Robert 3/2/1984 H3 - E3
		//Boon 1/1/1977 H7 - E1
		// months = Math.floor(months);
		let fMonths = Math.floor(months);
		let fMidMonth = Math.floor(middleMonth);
		console.log({fMonths, fMidMonth});

		if (getDate < firstDateOfMonth && fMonths == fMidMonth){
			months = Math.floor(months) - 1;
		}
		else{
			months = Math.floor(months);
		}

		console.log({months});

		// console.log('Middle Month ', middleDate.format('l'));
		

		let years = Math.abs(moment.duration(endDate.diff(startDate)).asYears());
		// console.log('years ', years);
		years = Math.round(years);


		let modHD = days % rangeH;
		let modED = days % rangeE;
		let modHM = months % rangeH;
		let modEM = months % rangeE;
		let modHY = years % rangeH;
		let modEY = years % rangeE;
		

		HD = HD + modHD;
		ED = ED + modED;
		HM = HM + modHM;
		EM = EM + modEM;
		HY = HY + modHY;
		EY = EY + modEY;
		
		HD = (HD > rangeH) ? HD % rangeH : HD;
		ED = (ED > rangeE) ? ED % rangeE : ED;
		HM = (HM > rangeH) ? HM % rangeH : HM;
		EM = (EM > rangeE) ? EM % rangeE : EM;
		HY = (HY > rangeH) ? HY % rangeH : HY;
		EY = (EY > rangeE) ? EY % rangeE : EY;

		HM = (EM < EMonth) ? HM + 1 : HM;
		if (HM > rangeH){
			HM = 1;
		}

		EM = (EM < EMonth) ? EM + 1 : EM;
		if (HM > rangeE){
			EM = 1;
		}

		// console.log('HD', HD);
		// console.log('ED', ED);
		console.log('HM', HM);
		console.log('EM', EM);
		// console.log('HY', HY);
		// console.log('EY', EY);

		// console.log('Navigate Success!');
		// this.router.navigate(['/tabs/tab1/result/{{personId}}']);

	}
}
