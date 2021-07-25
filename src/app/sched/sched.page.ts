import { Component, OnInit } from '@angular/core';

import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-sched',
  templateUrl: './sched.page.html',
  styleUrls: ['./sched.page.scss'],
})
export class SchedPage implements OnInit {

	event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
	
	eventSource = [];

	calendar = {
	mode: 'day',
	currentDate: new Date()
	}

	viewTitle = '';

	onEventSelected(){

	}

	onViewTitleChanged(){

	}

	onTimeSelected(){

	}


	constructor() { }

	  ngOnInit() {
	  }
}