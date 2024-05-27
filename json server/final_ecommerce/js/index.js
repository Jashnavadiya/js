const ui1=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-3-2-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-3-2');
      elements.forEach(el => {
        observer.observe(el, options);
      });
      setTimeout(ui3,1000)
}

const ui2=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-3-1-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-3-1');
      elements.forEach(el => {
        observer.observe(el, options);
      });
      setTimeout(ui1,3000)
}
ui2()
const ui3=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-3-3-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-3-3');
      elements.forEach(el => {
        observer.observe(el, options);
      });
}

const ui4=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-2-2-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-2-2');
      elements.forEach(el => {
        observer.observe(el, options);
      });
      setTimeout(ui6,500)
}

const ui5=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-2-1-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-2-1');
      elements.forEach(el => {
        observer.observe(el, options);
      });
      setTimeout(ui4,1000)
    }
ui5()
const ui6=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-2-3-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-2-3');
      elements.forEach(el => {
        observer.observe(el, options);
      });
}
const ui7=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-1-2-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-1-2');
      elements.forEach(el => {
        observer.observe(el, options);
      });
      setTimeout(ui9,1000)
}
const ui8=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-1-1-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-1-1');
      elements.forEach(el => {
        observer.observe(el, options);
      });
      setTimeout(ui7,1000)
}
setTimeout(ui8,2000)
const ui9=()=>{ 
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("slide-1-3-1", entry.isIntersecting);
        });
      };
      
      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 1 }; 
      
      const elements = document.querySelectorAll('.slider-1-3');
      elements.forEach(el => {
        observer.observe(el, options);
      });
}