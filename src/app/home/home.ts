import { Component } from '@angular/core';
import { BackgroundComponent } from "./background/background";

@Component({
  selector: 'app-home',
  imports: [BackgroundComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
