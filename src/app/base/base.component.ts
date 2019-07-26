import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  nativeElement: any;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnInit() {
  }

}
