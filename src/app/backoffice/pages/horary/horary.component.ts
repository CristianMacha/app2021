import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-horary',
  templateUrl: './horary.component.html',
  styleUrls: ['./horary.component.scss']
})
export class HoraryComponent implements OnInit {
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
