let idStats = "test";
class Counter {  
    constructor (start, end, elm, time) {
      idStats = this.elm;
      this.start = start;
      this.end = end;
      this.elm = document.querySelector(elm);
      this.time = time;
    }
    show () {
      let t0 = new Date(),
          self = this;
      this.update(0);
      requestAnimationFrame(function update(){
        let t = new Date(),
            dt = t - t0;
        self.update(Math.min(dt / self.time, 1));
        if (dt < self.time) {
          requestAnimationFrame(update);
        }
      });
    }
    update (t) {
      t = Math.round(this.start + (this.end - this.start) * t);
      if(this.elm.getAttribute('id') === "three") {
        this.elm.textContent = t+"%";
      } else {
        this.elm.textContent = t;
      }
    }
  }
  
  const counter1 = new Counter(0, 120, '#one', 5000);
  const counter2 = new Counter(0, 12, '#two', 5000);
  const counter3 = new Counter(0, 98, '#three', 5000);
  


  /*
  Intersection Observer About Us: 
  */

  const aboutUsText = document.getElementsByClassName('about-us-text-wrapper');

const aboutUsTextObserverCallback = (aboutUsTextToWatch, aboutUsTextObserver ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
    aboutUsTextToWatch.forEach(element => {
        if(element.isIntersecting) {
            // console.log(element.target);
            element.target.classList.add('show');
            aboutUsTextObserver.unobserve(element.target);
        }
    
    });
    
}
const aboutUsTextObserverOPtions = {
    treshhold: .7
}

const aboutUsTextObserver = new IntersectionObserver(aboutUsTextObserverCallback, aboutUsTextObserverOPtions);
let i = 0;
for(i ; i<aboutUsText.length; i++) {
  aboutUsTextObserver.observe(aboutUsText[i]);
}


/* 
Intersection Observer About Us Images:
*/
const aboutUsImages = document.getElementsByClassName('about-us--images');

const aboutUsImagesObserverCallback = (aboutUsImagesToWatch, aboutUsImagesObserver ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
    aboutUsImagesToWatch.forEach(element => {
        if(element.isIntersecting) {
            // console.log(element.target);
            element.target.classList.add('show');
            aboutUsImagesObserver.unobserve(element.target);
        }
    
    });
    
}
const aboutUsImagesObserverOPtions = {
    treshhold: .7
}

const aboutUsImagesObserver = new IntersectionObserver(aboutUsImagesObserverCallback, aboutUsImagesObserverOPtions);
i = 0;
for(i ; i<aboutUsImages.length; i++) {
  aboutUsImagesObserver.observe(aboutUsImages[i]);
}


/* Stats1 intersection observer : */
const stats1 = document.getElementsByClassName('stats-wrapper--stat1');

const stats1ObserverCallback = (stats1ToWatch, stats1Observer ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
      stats1ToWatch.forEach(element => {
        if(element.isIntersecting) {
            // console.log(element.target);
            element.target.classList.add('show');
            counter1.show();
            stats1Observer.unobserve(element.target);
        }
    
    });
    
}
const stats1ObserverOPtions = {
    treshhold: .7
}

const stats1Observer = new IntersectionObserver(stats1ObserverCallback, stats1ObserverOPtions);
stats1Observer.observe(stats1[0]);

/* Stats2 intersection observer : */
const stats2 = document.getElementsByClassName('stats-wrapper--stat2');

const stats2ObserverCallback = (stats2ToWatch, stats2Observer ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
      stats2ToWatch.forEach(element => {
        if(element.isIntersecting) {
            // console.log(element.target);
            element.target.classList.add('show');
            counter2.show();
            stats2Observer.unobserve(element.target);
        }
    
    });
    
}
const stats2ObserverOPtions = {
    treshhold: .7
}

const stats2Observer = new IntersectionObserver(stats2ObserverCallback, stats2ObserverOPtions);
stats2Observer.observe(stats2[0]);

/* Stats3 intersection observer : */
const stats3 = document.getElementsByClassName('stats-wrapper--stat3');

const stats3ObserverCallback = (stats3ToWatch, stats3Observer ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
      stats3ToWatch.forEach(element => {
        if(element.isIntersecting) {
            element.target.classList.add('show');
            counter3.show();
            stats3Observer.unobserve(element.target);
        }
    
    });
    
}
const stats3ObserverOPtions = {
    treshhold: .7
}

const stats3Observer = new IntersectionObserver(stats3ObserverCallback, stats3ObserverOPtions);
stats3Observer.observe(stats3[0]);

/* Mijn carousel: */

var Tripousel = function (options) {

	var _this = this;
	
	
	// Initialize public variables
	_this.target = options.target || document.body;
	_this.items = options.items || [];
	_this.animDuration = options.duration || 500;
	_this.container = document.createElement('div');
	_this.center = 0;
	_this.left = _this.items.length - 1;
	_this.right = 1;
	
	
	// Animate carousel movement
	_this.slide = function (dir) {
		var 
		inViewRight = _this.container.querySelector('.carousel__panel--inView.carousel__panel--right'),
		inViewCenter = _this.container.querySelector('.carousel__panel--inView.carousel__panel--center'),
		inViewLeft = _this.container.querySelector('.carousel__panel--inView.carousel__panel--left'),
		outView = _this.container.querySelector('.carousel__panel--outView'),
		dur = _this.duration,
		del = 50;
		
		// Remove transition of invisible element
		outView.classList.add('static');
		
		// Set positioning of invisible element
		setTimeout(function () {
			outView.classList.remove('carousel__panel--left');
			outView.classList.remove('carousel__panel--right');
			dir == 1 
				? outView.classList.add('carousel__panel--right') 
				: outView.classList.add('carousel__panel--left');
			
			// Allow transition of invisible element
			setTimeout(function () {
				outView.classList.remove('static');
				
				// Set new classnames of all elements
				setTimeout(function () {
					switch (dir == 1) {
						case true:
							inViewRight.classList.remove('carousel__panel--right');
							inViewRight.classList.add('carousel__panel--center');
							
							inViewCenter.classList.remove('carousel__panel--center');
							inViewCenter.classList.add('carousel__panel--left');
							
							inViewLeft.classList.remove('carousel__panel--inView');
							inViewLeft.classList.add('carousel__panel--outView');
							
							outView.classList.remove('carousel__panel--outView');
							outView.classList.add('carousel__panel--inView');
						break;
							
						case false:
							inViewRight.classList.remove('carousel__panel--inView');
							inViewRight.classList.add('carousel__panel--outView');
							
							inViewCenter.classList.remove('carousel__panel--center');
							inViewCenter.classList.add('carousel__panel--right');
							
							inViewLeft.classList.remove('carousel__panel--left');
							inViewLeft.classList.add('carousel__panel--center');
							
							outView.classList.remove('carousel__panel--outView');
							outView.classList.add('carousel__panel--inView');
						break;
					}
				}, del)
			}, del);
		}, del);
	};
	
	
	// Update carousel content
	_this.updateContent = function (e) {
		var outView = _this.container.querySelector('.carousel__panel--outView');
		
		// Set direction to 1 if clicking right or -1 if clicking left
		if (!e) { // <- for when we need this to auto-advance through items
			dir = 1;
		} else {
			dir = (e.target.className.indexOf('right') > -1) ? 1 : -1;
		}
		
		// Set the new indeces of each visible slide after animation
		switch (dir == 1) {
			case true:
				_this.left = _this.left < _this.items.length - 1 ? _this.left + 1 : 0;
				_this.center = _this.center < _this.items.length - 1 ? _this.center + 1 : 0;
				_this.right = _this.right < _this.items.length - 1 ? _this.right + 1 : 0;
				
				outView.style.backgroundImage = 'url("' + _this.items[_this.right].image + '")'
				// outView.innerHTML = _this.items[_this.right].copy;
			break;
				
			case false:
				_this.left = _this.left > 0 ? _this.left - 1 : _this.items.length - 1;
				_this.center = _this.center > 0 ? _this.center - 1 : _this.items.length - 1;
				_this.right = _this.right > 0 ? _this.right - 1 : _this.items.length - 1;
				
				outView.style.backgroundImage = 'url("' + _this.items[_this.left].image + '")'
				// outView.innerHTML = _this.items[_this.left].copy;
			break;
		}
		
		// Send to animator with parameter of whether this is going left (-1) or right (1)
		_this.slide(dir);
	};
	
	
	// Attach event listeners
	_this.eventListeners = function (els) {
		els.arrows.forEach(function (arrow) {
			arrow.addEventListener('click', _this.updateContent);
		})
	};
	
	
	// Create all carousel elements
	_this.populate = function () {
		var elements = {};
		elements.panels = {};
		elements.arrows = {};
		
		// Create elements
		elements.panels.inViewLeft = document.createElement('div');
		elements.panels.inViewRight = document.createElement('div');
		elements.panels.inViewCenter = document.createElement('div');
		elements.panels.outView = document.createElement('div');
		
		elements.arrows.left = document.createElement('div');
		elements.arrows.right = document.createElement('div');
		
		
		// Assign classes
		_this.container.classList.add('carousel');	
	
		elements.panels.inViewLeft.classList.add('carousel__panel');
		elements.panels.inViewLeft.classList.add('carousel__panel--inView');
		elements.panels.inViewLeft.classList.add('carousel__panel--left');
		
		elements.panels.inViewRight.classList.add('carousel__panel');
		elements.panels.inViewRight.classList.add('carousel__panel--inView');
		elements.panels.inViewRight.classList.add('carousel__panel--right');
		
		elements.panels.inViewCenter.classList.add('carousel__panel');
		elements.panels.inViewCenter.classList.add('carousel__panel--inView');
		elements.panels.inViewCenter.classList.add('carousel__panel--center');
		
		elements.panels.outView.classList.add('carousel__panel');
		elements.panels.outView.classList.add('carousel__panel--outView');
		elements.panels.outView.classList.add('carousel__panel--right');
	
		elements.arrows.left.classList.add('carousel__arrow');
		elements.arrows.left.classList.add('carousel__arrow--left');
		
		elements.arrows.right.classList.add('carousel__arrow');
		elements.arrows.right.classList.add('carousel__arrow--right');
		
		
		// Assign inline styles and content
		Object.assign(elements.panels.inViewLeft.style, {
			backgroundImage: 'url("' + _this.items[_this.left].image + '")',
			backgroundSize: 'contain',
		});
		// elements.panels.inViewLeft.innerHTML = _this.items[_this.left].copy;
		
		Object.assign(elements.panels.inViewCenter.style, {
			backgroundImage: 'url("' + _this.items[_this.center].image + '")',
			backgroundSize: 'contain',
		});
		// elements.panels.inViewCenter.innerHTML = _this.items[_this.center].copy;
		
		Object.assign(elements.panels.inViewRight.style, {
			backgroundImage: 'url("' + _this.items[_this.right].image + '")',
			backgroundSize: 'contain',
			
		});
		// elements.panels.inViewRight.innerHTML = _this.items[_this.right].copy;
		
		elements.arrows.left.innerHTML = '&laquo;';
		elements.arrows.right.innerHTML = '&raquo;';
		
		
		// Write elements to the DOM
		for (var type in elements) {
			for (var el in elements[type]) {
				_this.container.appendChild(elements[type][el]);
			}
		}
		
		_this.target.appendChild(_this.container);
		
		
		// Send necessary elements to eventListeners
		_this.eventListeners({
			arrows: [
				elements.arrows.left,
				elements.arrows.right
			]
		})
	};
	
	
	// Aliasing
	_this.animate = _this.updateContent;
	
	
	// Initialize
	_this.populate();
};

var slides = [
	// {
	// 	copy: 'Slide 1',
	// 	image: 'https://unsplash.it/800/600/?image=109'
	// },
	// {
	// 	copy: 'Slide 2',
	// 	image: 'https://unsplash.it/800/600/?image=1079'
	// },
	// {
	// 	copy: 'Slide 3',
	// 	image: 'https://unsplash.it/800/600/?image=907'
	// },
	// {
	// 	copy: 'Slide 4',
	// 	image: 'https://unsplash.it/800/600/?image=654'
	// },
	// {
	// 	copy: 'Slide 5',
	// 	image: 'https://unsplash.it/800/600/?image=977'
	// },
	// {
	// 	copy: 'Slide 6',
	// 	image: 'https://unsplash.it/800/600/?image=977'
	// },
	// {
	// 	copy: 'Slide 7',
	// 	image: 'https://unsplash.it/800/600/?image=977'
	// },
	// {
	// 	copy: 'Slide 8',
	// 	image: 'https://unsplash.it/800/600/?image=977'
	// },
	{
		image: '../img/nevc1.jpg'
	},
	{
		image: '../img/nevc2.jpg'
	},
	{
		image: '../img/nevc3.jpg'
	},
	{
		image: '../img/nevc4.jpg'
	},
	{
		image: '../img/nevc5.jpg'
	},
	{
		image: '../img/nevc6.jpg'
	},
	{
		image: '../img/nevc7.jpg'
	},
	{
		image: '../img/nevc8.jpg'
	},
	{
		image: '../img/nevc9.jpg'
	},
	{
		image: '../img/nevc10.jpg'
	},
	{
		image: '../img/nevc11.jpg'
	},
	{
		image: '../img/nevc12.jpg'
	},
	{
		image: '../img/nevc13.jpg'
	},
	{
		image: '../img/nevc15.jpg'
	},
	{
		image: '../img/nevc16.jpg'
	}
];

var trip = new Tripousel({
	target: document.querySelector('.carouselContainer'),
	items: slides
});

var rotateNTimes = 15;
var rotate = setInterval(function () {
	if (rotateNTimes) {
		trip.animate();
		--rotateNTimes;
	} else {
		clearInterval(rotate);
	}
}, 2000);


/* mijn price card javascript voor hover effect previous price card: */
const mouseTargetItem1 = document.getElementById('item1');
const mouseTargetItem2 = document.getElementById('item2');
const mouseTargetItem3 = document.getElementById('item3');

mouseTargetItem1.addEventListener('mouseenter', e => {
    mouseTargetItem1.style.transform = 'scale(1.15)';
	// mouseTargetItem1.style.boxShadow = '0 0 10px #000';
	mouseTargetItem1.style.zIndex = '4';

	mouseTargetItem2.style.transform = 'scale(1)';

    // mouseTargetItem2.style.border = '5px solid orange';
    // mouseTargetItem2.style.transform = 'scale(1.2)';

});

mouseTargetItem1.addEventListener('mouseleave', e => {
    mouseTargetItem1.style.transform = 'scale(1)';
	mouseTargetItem1.style.zIndex = '0';

	mouseTargetItem2.style.transform = 'scale(1.15)';
    // mouseTargetItem2.style.border = '1px solid #333';
    // mouseTargetItem2.style.transform = 'scale(1)';
    
  });

// mouseTargetItem2.addEventListener('mouseenter', e => {
//     mouseTargetItem2.style.border = '5px solid orange';
//     mouseTargetItem2.style.transform = 'scale(1)';

// });

// mouseTargetItem2.addEventListener('mouseleave', e => {
//     mouseTargetItem2.style.border = '1px solid #333';
//     mouseTargetItem2.style.transform = 'scale(1.2)';

    
//   });


	mouseTargetItem3.addEventListener('mouseenter', e => {
    mouseTargetItem3.style.transform = 'scale(1.15)';
	// mouseTargetItem3.style.boxShadow = '0 0 10px #000';
	mouseTargetItem3.style.zIndex = '4';

	mouseTargetItem2.style.transform = 'scale(1)';

    // mouseTargetItem2.style.border = '5px solid orange';
    // mouseTargetItem2.style.transform = 'scale(1.2)';

});

mouseTargetItem3.addEventListener('mouseleave', e => {
    mouseTargetItem3.style.transform = 'scale(1)';
	mouseTargetItem3.style.zIndex = '0';

	mouseTargetItem2.style.transform = 'scale(1.15)';

    // mouseTargetItem2.style.border = '1px solid #333';
    // mouseTargetItem2.style.transform = 'scale(1)';
    
  });


 // To prevent #item2 being 1.15 bigger on smartphones en tablets:
 function myFunction(x) {
	if (x.matches) { // If media query matches
		mouseTargetItem2.style.transform = 'scale(1)'
	} 
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
