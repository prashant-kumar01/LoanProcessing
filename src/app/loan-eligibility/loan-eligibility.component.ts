import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-eligibility',
  templateUrl: './loan.html',
  styleUrls: ['./loan-eligibility.component.css']
})
export class LoanEligibilityComponent implements OnInit {

  
  lamount=0;
  lyear=0;
  result=0;
    constructor() { }
  
    ngOnInit(): void {
    }
    personal():void{
      this.result =this.lamount+(this.lamount*this.lyear*6)/100;
    }
}
