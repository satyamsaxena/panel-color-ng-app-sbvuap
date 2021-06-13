import { Component, ViewContainerRef } from '@angular/core';

import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public arrayColors: any = {
    color1: '#0433ff'
  };

  public selectedColor: string = 'color1';

  public color1: string = '#0433ff';

  public cmykColor: Cmyk = new Cmyk(0, 0, 0, 0);

  constructor(
    public vcRef: ViewContainerRef,
    private cpService: ColorPickerService
  ) {}

  public onEventLog(event: string, data: any): void {
    console.log(event, data);
  }
}
