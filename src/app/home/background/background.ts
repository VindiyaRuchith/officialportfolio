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
  
        // Color theme: purple-blue-violet
      color: 0x8a2be2,          // main nodes color (blue-violet)
      backgroundColor: 0x2a1a4d, // dark purple background
      points: 15.0,              // optional tweak: increase node density
      maxDistance: 25.0,         // optional: distance between nodes
      spacing: 15.0,             // optional: controls mesh detail
      materialOptions: { vertexColors: true }
    });

  }

  ngOnDestroy() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
