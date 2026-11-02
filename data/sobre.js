let sobre = document.getElementById("sobre")
const music = document.getElementById('music');
let sobreParams = document.getElementById('sobreParams');
let translateY = sobreParams.getAttribute('translateY');
let duration = sobreParams.getAttribute('duration');

sobre.addEventListener("click",()=>{
    music.play()
    loadGsap()
})

function loadGsap(){
    gsap.set('.event',{
        y:'6vw',
        scale:0
    })
    gsap.set('.person',{
        scale:0
    })
    
    gsap.set('.age',{
        y:'14vw'
    })
    
    gsap.set('.mensaje',{
        scale:0
    })
    
    gsap.set('.tarjet',{
        x:'-90vw'
    })
    

    
    gsap.set('.date',{
        y:'6vw',
        scale:0
    })

    // gsap.set('.nombre-titulo',{
    //     y:'6vw',
    //     scale:0
    // })
    
    
    gsap.set('.decorations',{
        opacity:0,
    })

    // gsap.set('.nombre-titulo',{
    //     y: '14vw',
    //     scale:1
    // })

    gsap.to('.date',{
        delay:1.0,
        duration:1,
        y:0,
        scale:1
    })
    
    gsap.to('.sello',{
        duration:0.5,
        opacity:0,
    })
    gsap.to('.first',{
        delay:0.0,
        duration:3,
        y:'-100%'
    })
    gsap.to('.second',{
        delay:0.0,
        duration:duration,
        y:translateY,
        onComplete: function() {
            document.querySelector('.sobre').remove();
        }
    })

    gsap.to('.age',{
        delay:2.8,
        duration:2,
        y:0
    })
    
    gsap.to('.decorations',{
        delay:4.3,
        duration:1.5,
        opacity:1,
    })

    gsap.timeline()
    .to('.event',{
        delay:1.8,
        duration:0.6,
        rotation:360,
        y:0,
        scale:1
    })

    .to('.person',{
        duration:0.7,
        scale:1
    })
    .to('.tarjet',{
        duration:0.7,
        x:0
    })
    .to('.person-name',{
        duration:0.7,
        scale:1
    })
    .to('.mensaje',{
        duration:0.7,
        scale:1
    })
    
}