import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @Input()
  slideshowTitle:string='';

  @Input()
  urls:string[] = [];
  activeIndex=0;
  constructor() { }

  ngOnInit(): void {

  }

  getActiveImageUrl(){
    return this.urls[this.activeIndex];
  }
  onNext(){
    this.activeIndex++;  
    if(this.activeIndex=== this.urls.length){
      this.activeIndex = 0;
    }
  }
  onPrev(){    
    this.activeIndex--;
    if(this.activeIndex < 0){
      this.activeIndex = this.urls.length - 1;
    }
  }

}