import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent extends BaseComponent {
  someProperty: boolean = true;
}
