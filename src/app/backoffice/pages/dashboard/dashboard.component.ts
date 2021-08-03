import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lastUpdated: Date;
  activeAlert: boolean = false;
  constructor() {
    const parts = localStorage.getItem('x-last-updated').split('-');
    this.lastUpdated = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    const lastDate = moment(this.lastUpdated).add(5, 'M');
    const nowDate = moment(new Date());
    const xd  = lastDate.add(5, 'M');

    if (lastDate.add(5, 'M').isBefore(nowDate)) this.activeAlert = true;
  }

  ngOnInit(): void {}
}
