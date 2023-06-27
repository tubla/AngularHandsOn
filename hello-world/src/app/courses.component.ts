import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: '<courses>',
  template: `
    <!--<button class="btn btn-primary" [class.active]="isActive">Save</button> // CLASS BINDING-->
    <!--<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'grey'" >Save</button> // STYLE BINDING -->
    <!--Event Bubbling-->
    <div (click)="onDivClicked()">
      <!-- After onSave(), onDivClicked() will be executed-->
      <button (click)="onSave($event)">Save</button>
    </div>
    <!--Event Filter-->
    <input
      (keyup)="onKeyUpWithout_Filter($event)"
      placeholder="Key capture without filter"
    />
    <input
      (keyup.enter)="onKeyUpWith_Filter()"
      placeholder="Key capture with filter"
    />

    <!--How to get input values-->

    <!--through event parameter-->
    <input
      (keyup.enter)="onKeyUp_GetValues_Through_Event_Parameter($event)"
      placeholder="through event parameter"
    />

    <!--through template variable-->
    <input
      #email
      (keyup.enter)="onKeyUp_GetValues_Through_Template_Variable(email.value)"
      placeholder="through template variable"
    />

    <!--2 WAY BINDING
        Must import FormsModule to app.module.ts to use NgModel
    -->

    <input
      [(ngModel)]="email1"
      (keyup.enter)="onKeyUp_2_Way_Binding()"
      placeholder="2 way binding"
    />
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  isActive = true;

  // VARIABLE FOR 2 WAY BINDING
  email1 = 'abc@example.com';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onDivClicked() {
    console.log('Div is clicked');
  }

  onSave($event: any) {
    $event.stopPropagation(); // This line will stop event bubbling
    console.log('Button is clicked', $event);
  }

  onKeyUpWithout_Filter($event: any) {
    if ($event.keyCode === 13) console.log('ENTER is pressed');
  }

  onKeyUpWith_Filter() {
    console.log('ENTER is pressed');
  }

  onKeyUp_GetValues_Through_Event_Parameter($event: any) {
    console.log($event.target.value);
  }

  onKeyUp_GetValues_Through_Template_Variable(email: any) {
    console.log(email);
  }

  onKeyUp_2_Way_Binding() {
    console.log(this.email1);
  }
}
