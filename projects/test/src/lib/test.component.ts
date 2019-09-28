import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'lib-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

}
