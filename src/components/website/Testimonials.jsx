/* eslint-disable jsx-a11y/anchor-is-valid */
import LandingPolygon from "./polygon";
import { Carousel } from 'flowbite';

// const items = [
//     {
//         position: 0,
//         el: document.getElementById('carousel-item-1')
//     },
//     {
//         position: 1,
//         el: document.getElementById('carousel-item-2')
//     },
//     {
//         position: 2,
//         el: document.getElementById('carousel-item-3')
//     },
//     {
//         position: 3,
//         el: document.getElementById('carousel-item-4')
//     },
// ];

// const options = {
//     defaultPosition: 1,
//     interval: 3000,
    
//     indicators: {
//         activeclassNamees: 'bg-white dark:bg-gray-800',
//         inactiveclassNamees: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
//         items: [
//             {
//                 position: 0,
//                 el: document.getElementById('carousel-indicator-1')
//             },
//             {
//                 position: 1,
//                 el: document.getElementById('carousel-indicator-2')
//             },
//             {
//                 position: 2,
//                 el: document.getElementById('carousel-indicator-3')
//             },
//             {
//                 position: 3,
//                 el: document.getElementById('carousel-indicator-4')
//             },
//         ]
//     },
    
//     // callback functions
//     onNext: () => {
//         console.log('next slider item is shown');
//     },
//     onPrev: ( ) => {
//         console.log('previous slider item is shown');
//     },
//     onChange: ( ) => {
//         console.log('new slider item has been shown');
//     }
// };

// const carousel = new Carousel(items, options);

// const $prevButton = document.getElementById('data-carousel-prev');
// const $nextButton = document.getElementById('data-carousel-next');

// $prevButton.addEventListener('click', () => {
//     carousel.prev();
// });

// $nextButton.addEventListener('click', () => {
//     carousel.next();
// });
  
export default function LandingTestimonials() {
    return (
        <>
            <LandingPolygon/>
            
            <div className="relative w-full">
                <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    <div id="carousel-item-1" className="hidden duration-700 ease-in-out">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEpr0_ZwAhwRgLaCe2aW0RlT5acsxBL3T2w&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div id="carousel-item-2" className="hidden duration-700 ease-in-out">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEpr0_ZwAhwRgLaCe2aW0RlT5acsxBL3T2w&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div id="carousel-item-3" className="hidden duration-700 ease-in-out">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEpr0_ZwAhwRgLaCe2aW0RlT5acsxBL3T2w&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div id="carousel-item-4" className="hidden duration-700 ease-in-out">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEpr0_ZwAhwRgLaCe2aW0RlT5acsxBL3T2w&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
                    <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
                    <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
                    <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
                </div>
                <button id="data-carousel-prev" type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button id="data-carousel-next" type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>
        </>
    )
  }
  