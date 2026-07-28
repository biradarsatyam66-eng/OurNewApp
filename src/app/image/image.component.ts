import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  styles: [`
    .example-card {
      background-color: darkgray;
    }
    mat-card-subtitle{
      color: yellow;
    }
    mat-card-title{
      color: brown;
    }
  `] 
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  images = [
  {
    pname: 'Samsung Galaxy S24',
    rating: 4.7,
    img: 'https://picsum.photos/seed/samsung1/600/400',
    description: 'Experience the future with AI-powered camera and long-lasting battery. A perfect blend of style and performance.'
  },
  {
    pname: 'iPhone 15 Pro Max',
    rating: 4.9,
    img: 'https://picsum.photos/seed/iphone1/600/400',
    description: 'Titanium design, A17 Pro chip, and an advanced camera system that redefines mobile photography.'
  },
  {
    pname: 'Sony WH-1000XM5',
    rating: 4.8,
    img: 'https://picsum.photos/seed/sony1/600/400',
    description: 'Industry-leading noise cancellation with exceptional sound quality. Comfortable for all-day listening.'
  },
  {
    pname: 'LG C3 OLED TV',
    rating: 4.6,
    img: 'https://picsum.photos/seed/lg1/600/400',
    description: 'Self-lit OLED pixels for perfect black and infinite contrast. Elevate your home cinema experience.'
  },
  {
    pname: 'OnePlus 12',
    rating: 4.5,
    img: 'https://picsum.photos/seed/oneplus1/600/400',
    description: 'Snapdragon 8 Gen 3, 100W fast charging, and a stunning 120Hz display. Flagship killer reborn.'
  },
  {
    pname: 'Google Pixel 8 Pro',
    rating: 4.8,
    img: 'https://picsum.photos/seed/pixel1/600/400',
    description: 'Pure Android experience with Tensor G3, amazing computational photography, and 7 years of updates.'
  },
  {
    pname: 'Xiaomi 14 Ultra',
    rating: 4.4,
    img: 'https://picsum.photos/seed/xiaomi1/600/400',
    description: 'Leica optics, 1-inch sensor, and premium build. A photography powerhouse at a competitive price.'
  },
  {
    pname: 'Realme GT 5 Pro',
    rating: 4.3,
    img: 'https://picsum.photos/seed/realme1/600/400',
    description: 'Snapdragon 8 Gen 3, 120W charging, and a vibrant AMOLED display. Speed meets affordability.'
  },
  {
    pname: 'Apple MacBook Pro 16"',
    rating: 4.9,
    img: 'https://picsum.photos/seed/macbook1/600/400',
    description: 'M3 Max chip, 22-hour battery life, and a stunning Liquid Retina XDR display. Built for pros.'
  },
  {
    pname: 'Dell XPS 16',
    rating: 4.6,
    img: 'https://picsum.photos/seed/dell1/600/400',
    description: 'InfinityEdge display, Intel Core Ultra, and premium build. The ultimate Windows laptop for creators.'
  },
  {
    pname: 'Bose QuietComfort Ultra',
    rating: 4.7,
    img: 'https://picsum.photos/seed/bose1/600/400',
    description: 'Immersive audio with spatial sound and adjustable noise cancellation. Travel in peace.'
  },
  {
    pname: 'Samsung Galaxy Tab S9 Ultra',
    rating: 4.5,
    img: 'https://picsum.photos/seed/samsungtab1/600/400',
    description: '14.6-inch Super AMOLED, S Pen included, and DeX mode. A tablet that replaces your laptop.'
  },
  {
    pname: 'iPad Pro 13" M4',
    rating: 4.9,
    img: 'https://picsum.photos/seed/ipad1/600/400',
    description: 'Ultra Retina XDR, M4 chip, and Apple Pencil hover. The ultimate tablet for creativity and productivity.'
  },
  {
    pname: 'Sony A7 IV Camera',
    rating: 4.8,
    img: 'https://picsum.photos/seed/sonycam1/600/400',
    description: '33MP full-frame sensor, 4K 60p video, and real-time tracking. A versatile workhorse for photographers.'
  },
  {
    pname: 'Canon EOS R6 Mark II',
    rating: 4.7,
    img: 'https://picsum.photos/seed/canon1/600/400',
    description: '24MP sensor, 40 fps burst, and advanced AF. Perfect for sports, wildlife, and events.'
  },
  {
    pname: 'GoPro Hero 12 Black',
    rating: 4.4,
    img: 'https://picsum.photos/seed/gopro1/600/400',
    description: '5.3K video, HyperSmooth 6.0, and waterproof. Capture every adventure with stunning clarity.'
  },
  {
    pname: 'DJI Mini 4 Pro Drone',
    rating: 4.6,
    img: 'https://picsum.photos/seed/dji1/600/400',
    description: 'Under 249g, 4K 60fps, and omnidirectional obstacle sensing. Fly anywhere with confidence.'
  },
  {
    pname: 'Kindle Paperwhite (2024)',
    rating: 4.5,
    img: 'https://picsum.photos/seed/kindle1/600/400',
    description: '6.8" glare-free display, waterproof, and weeks of battery. The ultimate reading companion.'
  },
  {
    pname: 'Fitbit Charge 6',
    rating: 4.3,
    img: 'https://picsum.photos/seed/fitbit1/600/400',
    description: 'Advanced health metrics, GPS, and 7-day battery. Stay on top of your fitness journey.'
  },
  {
    pname: 'Apple Watch Ultra 2',
    rating: 4.8,
    img: 'https://picsum.photos/seed/applewatch1/600/400',
    description: 'Titanium case, 3000 nits brightness, and precise GPS. Built for the most extreme adventures.'
  },
  {
    pname: 'Garmin Fenix 7X',
    rating: 4.7,
    img: 'https://picsum.photos/seed/garmin1/600/400',
    description: 'Solar charging, multi-band GPS, and advanced training metrics. The ultimate outdoor smartwatch.'
  },
  {
    pname: 'Logitech MX Master 3S',
    rating: 4.6,
    img: 'https://picsum.photos/seed/logitech1/600/400',
    description: 'Ultra-fast scrolling, 8K DPI, and silent clicks. The best mouse for productivity and design.'
  },
  {
    pname: 'SteelSeries Arctis Nova Pro',
    rating: 4.5,
    img: 'https://picsum.photos/seed/steelseries1/600/400',
    description: 'High-fidelity audio, dual wireless, and AI-powered noise cancellation. A gamer\'s dream headset.'
  },
  {
    pname: 'Razer Blade 16',
    rating: 4.4,
    img: 'https://picsum.photos/seed/razer1/600/400',
    description: 'RTX 4090, OLED 240Hz, and CNC aluminum chassis. The ultimate gaming laptop with a sleek design.'
  },
  {
    pname: 'Anker 737 Power Bank',
    rating: 4.3,
    img: 'https://picsum.photos/seed/anker1/600/400',
    description: '24,000mAh, 140W output, and smart digital display. Never run out of power on the go.'
  }
];
}
