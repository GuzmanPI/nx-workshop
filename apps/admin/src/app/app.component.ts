import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'my-company-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: MyServiceService) {}
  greet$ = this.service.greeting$;
}
