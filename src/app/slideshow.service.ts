import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  constructor() { }

  getDogs(){
    return [
        'https://media.istockphoto.com/photos/furry-dog-smiling-with-tongue-out-picture-id1287452200?s=612x612',
        'https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?s=612x612',
        'https://media.istockphoto.com/photos/active-ethnic-senior-woman-enjoying-the-outdoors-with-her-pet-dog-picture-id1325997469?s=612x612'
       ];
  }
}
