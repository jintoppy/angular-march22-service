import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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

  @Output()
  slideshowEnded: EventEmitter<void> = new EventEmitter();

  
  activeIndex=0;
  constructor() { }

  ngOnInit(): void {

  }

  getActiveImageUrl(){
    return this.urls[this.activeIndex];
  }
  onNext(){
    if(this.activeIndex === this.urls.length-1){
      return;
    }
    this.activeIndex++;
    if(this.activeIndex === this.urls.length-1){
      //last item reached
      this.slideshowEnded.emit();
    }
    
  }
  onPrev(){    
    this.activeIndex--;
    if(this.activeIndex < 0){
      this.activeIndex = this.urls.length - 1;
    }
  }

}