import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

@Component({
  selector: 'app-background',
  template: `<div #vantaBg class="absolute top-0 left-0 w-full h-full -z-10"></div>`,
})
export class BackgroundComponent implements AfterViewInit, OnDestroy {
  private vantaEffect: any;
  @ViewChild('vantaBg', { static: true }) vantaRef!: ElementRef;

  ngAfterViewInit() {
    this.vantaEffect = GLOBE({
        el: this.vantaRef.nativeElement,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0f172a, // slate-900 dark background
      color: 0x7c3aed,           // violet
      color2: 0x2563eb,          // blue
      size: 1.2,
      materialOptions: { vertexColors: true }
    });

  }

  ngOnDestroy() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
