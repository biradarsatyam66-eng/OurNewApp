import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabng-switch',
  templateUrl: './tabng-switch.component.html',
  styleUrls: ['./tabng-switch.component.scss']
})
export class TabngSwitchComponent implements OnInit {

  constructor() { }

  selectedTab  :string= 'node'
  ngOnInit(): void {
  }

  onclick(e:string){
    this.selectedTab = e
  }




  skillsArr = [
  {
    tabHeading: 'angular',
    tabContent: `<strong>Angular</strong> Lorem ipsum dolor sit amet, 
    quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
  },
  {
    tabHeading: 'node',
    tabContent: `<strong>Node</strong> Lorem ipsum dolor sit amet, 
    quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
  },
  {
    tabHeading: 'express',
    tabContent: `<strong>Express</strong> Lorem ipsum dolor sit amet, 
    quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
  },
  {
    tabHeading: 'javascript',
    tabContent: `<strong>JavaScript</strong> Lorem ipsum dolor sit amet, 
    quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
  },
  {
    tabHeading: 'typescript',
    tabContent: `<strong>TypeScript</strong> Lorem ipsum dolor sit amet, 
    quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
  },
  {
    tabHeading: 'bootstrap',
    tabContent: `<strong>Bootstrap</strong> Lorem ipsum dolor sit amet, 
    quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
  }
];

  selectedSkill : string = 'angular'

  onskilltab(e : string){
    this.selectedSkill = e
  }
}
