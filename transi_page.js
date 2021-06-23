const allBandes = document.querySelectorAll('.bande');
const TLAnim = new TimelineMax();
var time = 0.09;

//temps d'attente entre l'execution de leave et enter
function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
  })
}

// utilisation de la libraire barba.js
barba.init({
    sync: true,
    transitions: [
      {
        // quand on quitte la page 
        async leave(){
        
          const done = this.async();
        // animation avec la librairie GSAP 
          TLAnim.to(allBandes, {height: '100%', stagger: time})
        // avant de rentrer sur la nouvelle page
          await delay(800);
          done();
        },
        // quand on rentre sur la nouvelle page
        enter(){

          TLAnim.to(allBandes, {height: '0%', stagger: time})
        }
      }
    ]
})
