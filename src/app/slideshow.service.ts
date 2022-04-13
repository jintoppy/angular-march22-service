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

  getCats(){
    return [
      'https://media.istockphoto.com/photos/kitten-exploring-domestic-setting-picture-id1335433001?s=612x612',
      'https://media.istockphoto.com/photos/happy-long-haired-brown-tabby-cat-is-relaxing-on-a-felt-cat-bed-at-picture-id1298824982?s=612x612',
      'https://media.istockphoto.com/photos/cat-world-picture-id1311993425?s=612x612'
    ]
  }
}
