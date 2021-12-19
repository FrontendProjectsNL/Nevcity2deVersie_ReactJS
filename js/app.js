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
