import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-net-background',
  standalone: true,
  imports: [CommonModule],
  template: `<div #vantaContainer class="absolute inset-0 -z-10"></div>`,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
  `]
})
export class NetBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('vantaContainer', { static: true }) vantaContainer!: ElementRef;
  private vantaEffect: any;

  ngAfterViewInit() {
    this.vantaEffect = NET({
      el: this.vantaContainer.nativeElement,
      THREE,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0f111a, // dark modern background
      color: 0x00ffff,           // cyan line color
      points: 20.0,
      spacing: 25.0,
      showDots: true
    });
  }

  ngOnDestroy() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
