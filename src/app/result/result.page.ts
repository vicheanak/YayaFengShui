import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(private router: Router){}

	navigate(elementIds){
		console.log('Navigate Success!');
		this.router.navigate(['/tabs/tab1/element/{{elementIds}}']);
	}

  ngOnInit() {
  }

}
