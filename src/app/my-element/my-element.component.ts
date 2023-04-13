import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-element',
  templateUrl: './my-element.component.html',
  styleUrls: ['./my-element.component.css'],
})
export class MyElementComponent implements OnInit, AfterViewInit {
  @Input() myInput = '';

  ngOnInit() {
    console.assert(!!this.myInput, 'myInput is not available in ngOnInit()');
  }

  ngAfterViewInit() {
    console.assert(
      !!this.myInput,
      'myInput is not available in ngAfterViewInit()'
    );
    setTimeout(() => {
      console.assert(
        !!this.myInput,
        'myInput is not available in a queued task in ngAfterViewInit()'
      );
    });
  }
}
