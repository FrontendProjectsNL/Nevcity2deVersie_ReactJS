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
  counter1.show();
  counter2.show();
  counter3.show();
