import { Component } from '@angular/core';
import { SlideshowService } from './slideshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-app';
  dogSlideshowTitle = 'Dog slideshow title from class';
  activeImgUrl = 'https://media.istockphoto.com/photos/cat-world-picture-id1311993425?s=612x612';
  dogList:string[] = [];
  catList:string[] = [];
  constructor(private slideshowService: SlideshowService){

  }

  ngOnInit(){
    this.catList = this.slideshowService.getCats();
    this.dogList = this.slideshowService.getDogs();
  }
}
