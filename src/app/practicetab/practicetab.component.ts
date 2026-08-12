import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-practicetab',
  templateUrl: './practicetab.component.html',
  styleUrls: ['./practicetab.component.scss'],
})
export class PracticetabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

selectedSkill:string = 'angular'

onTab(e : string){
  this.selectedSkill = e
}

}
