import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
        <div><h1>{{title}}</h1>
             <pm-products></pm-products>
        </div>
        ` // Note the quote is back quotes not the regular quote '
  //templateUrl: './app.component.html',  
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
