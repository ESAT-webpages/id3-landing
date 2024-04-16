//assets\dist\js\plugins\debug.addIndicators.min.js

document.addEventListener('DOMContentLoaded', () => {
  const videoWrapper = document.querySelector('.video-slide-wrapper');
  const videoInner = videoWrapper.querySelector('.video-slide-inner');
  const vidRef = videoInner.querySelector('video');
  const playButton = videoWrapper.querySelector('.video-playbutton');
  const videoSlideBack = videoWrapper.querySelector('.video-slide-background');

  const initVideo = () => {

    if (vidRef.paused) {
      vidRef.play();
      
    } else {
      vidRef.pause();
    }

    videoSlideBack.style.display = "none"
  };

  playButton.addEventListener('click', initVideo);
});
 
document.querySelector('.reserve-link').addEventListener('click', function(e) {
  e.preventDefault();
  const formContact = document.querySelector('#formContact');
  if (formContact) {
    formContact.scrollIntoView({ behavior: 'smooth' });
  }
});


document.getElementById('termsOfService').addEventListener('click', function() {
  openModalLegal();
});

document.getElementById('privacyPolicy').addEventListener('click', function() {
  openModalPrivacy();
});

function openModalLegal() {
  // Code to open modal or popup for legal terms
  alert('Opening legal terms...');
}

function openModalPrivacy() {
  // Code to open modal or popup for privacy policy
  alert('Opening privacy policy...');
}

function openPrivacyModal() {
  document.getElementById('privacyModal').style.display = 'flex';
}

function openLegalModal() {
  document.getElementById('legalModal').style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

  var header;
  var altHeader;
   
  var body;

  var botSubmit;
  
  var botAvanza;
  
  var elem = document.getElementById('caja');
  var direction = 1;
  var x = 0,
  y = direction * 100;
  
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  }); 
  
  window.onload = console.log('CARGADO!!!');


  var arrNomProfes;
  
  var controller; 
  
  var controllerSrrollTo = new ScrollMagic.Controller();
  
  var arrSecGoes;
  var arrScenesScroll;
  
  var videoPerson = document.getElementById('in_video_person');
  
  var menu_bot ;
  
  var navMenu ;
  
  var arrMenuUp ;
  
  var arrBotsPrograma;
  
  var imgRefAncho ;
  var arrBtnsRefAncho;

  const swiper = new Swiper('.swiper-container', {
    // Parameters
    slidesPerView: 1, // Adjust based on your needs
    spaceBetween: 30,
    loop: false, // Loop mode disabled
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1080: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 70,
      },
    },
  });
  
  function initWeb(){
  
    menu_bot = document.getElementById('menu_bot');
  
    navMenu = document.getElementById('nav-menu');
  
    body = document.getElementById('body');
  
  
      header = document.getElementById('header');
  
      altHeader = header.getBoundingClientRect();
      altHeader = altHeader.height;
  
      // init controller
        controller = new ScrollMagic.Controller();
  
      //console.log(controller);
  
  
        new ScrollMagic.Scene({
          triggerElement : '#t_pres',  
        }).setClassToggle('#header', 'hide_header')
        //.addIndicators()
        .addTo(controller);
  
  
        
      //  hazScrollingMenu();
  
  
  
    //  var miVideoFondo = document.getElementById('videoFondo');
  
     // miVideoFondo.play();
  
/*       if(miVideoFondo){
  
          var promise = miVideoFondo.play();
  
          if (promise !== undefined) {
            promise.then(_ => {
              // Autoplay started!
            }).catch(error => {
              console.log(error);
              // Autoplay was prevented.
              // Show a "Play" button so that user can start playback.
            });
          }
  
  
      } */
  
  
        hazMenuMovil();
  
        hazScrollingMenu();
  
        hazScrollers();
  
/*         hazProfes(); 
  
        hazVideoCoche();
  
        hazPrograma(); 
  
        hazGaleria();

        hazGaleriaMovil();

        hazGaleriaPasos();

        hazForm(); */
  
        //videoPerson = document.getElementById('in_video_person');
  
        resizea();
  
  
        imgRefAncho = document.getElementById('img_texto_ref');
  
        arrBtnsRefAncho = document.querySelectorAll('.btn_ref_ancho_img');
  
        hazEventScroll();


        checkIphone();

        checkSize();

        iniciaLineas();
  
   
  }


  function checkIphone(){

    var videoComp1=document.getElementById("video_compare_1");
    var videoComp2=document.getElementById("video_compare_2");

    var img_midas_render= document.getElementById("img_midas_render");;
    var img_midas_wire= document.getElementById("img_midas_wire");;

    var img_iphone = document.getElementById('img_iphone');
    // Verificar si el agente de usuario contiene las cadenas "iPhone" o "iPad"
   // if (  !(/iPhone|iPad/i.test(navigator.userAgent) ) ) {

  //  if (  /iPhone|iPad/i.test(navigator.userAgent)  ) {

  var checkThunder = true;

 // if (  /iPhone/i.test(navigator.userAgent)  ) { // checkThunder==true ||

 if(window.innerWidth<992){

      // Estás navegando desde un iPhone o un iPad
      //console.log("SI Estás navegando desde un iPhone o un iPad.");

      console.log("Móvil");

     // img_iphone.addEventListener('click', (ev)=>{
       // ev.preventDefault();
      if(img_iphone){
            img_iphone.classList.remove('d-none');
      }




        img_midas_render.classList.remove('d-none');
        img_midas_wire.classList.remove('d-none');


        videoComp1.classList.add('d-none');
        videoComp2.classList.add('d-none');


 

        // videoComp1.play();
        // videoComp2.play();


    //  })


    } 
  }


  function muestroMensaje(_el, _msg){

    var tmpMsg = document.querySelector(_el);

    tmpMsg.innerHTML = _msg;

    tmpMsg.classList.remove('d-none');


    window.setTimeout(function(){

      tmpMsg.classList.add('d-none');

    }, 3000);


  }

 


  function enviaMailOk(){
   
    console.log('ENvÍO MAIL');

 
    var miForm = document.querySelector("#formlanding");

    console.log(miForm);

    //miForm.submit();


    document.getElementById("formlanding").submit();

  }


  function okCampo(_el ){

    var tmpMsg = document.querySelector(_el);

    tmpMsg.classList.add('d-none');

  }


  function hazForm(){

    var tmpCampoMail;
    var tmpCampoEdad;
    var tmpCampoNombre;



  }
  
  function hazEventScroll(){
  
    // console.log('HAZ EVENT SCROLL!!!!'); 
    // document.addEventListener("scroll", (event) => {
    //   lastKnownScrollPosition = window.scrollY;
    
    //   console.log('scrolling');;
    //   console.log(lastKnownScrollPosition);
      
    
    //   if (!ticking) {
    //     window.requestAnimationFrame(() => {
    //       doSomething(lastKnownScrollPosition);
    //       ticking = false;
    //     });
    
    //     ticking = true;
    //   }
    // });
  
  
    // console.log('//HAZ EVENT SCROLL!!!!');
    
  
  }
  
  
  
  
  
  var altDuracion ;
  var secDuracion ;
  
  var anchDuracion ; 
  
  var arrFotosGaleria;
  var cont_galeria;
  
  var radio = 250;
  
  var pm;
  
  var pmObj;
  
  var contenedor_galeria;
  
  function hazGaleria(){
  
    pm = document.querySelector('#punto_medio');
  
    pmObj = pm.getBoundingClientRect();
  
    console.log('pmObj' );
    console.log(pmObj);
    console.log('/pmObj' );
    
  
    secDuracion = document.getElementById('contenedor_galeria');
  
    contenedor_galeria = secDuracion.getBoundingClientRect();;
  
    console.log('>>>> secDuracion');
    console.log(secDuracion);
  
    altDuracion = secDuracion.offsetHeight;
  
    anchDuracion = secDuracion.offsetWidth; 
  
    // console.log('altDuracion ' + altDuracion );
    // console.log('anchDuracion ' + anchDuracion ); 
    // console.log(' /// altDuracion ' + altDuracion ); 
  
    radio = altDuracion  ;

 
  
  
    // var sheet = document.styleSheets[0];  
    // sheet.insertRule(":root{--radio:" +radio+"px}");
  
    document.documentElement.style.setProperty('--radio', radio+"px");
  
    arrFotosGaleria = document.querySelectorAll('.img_gal');
  
    var preSign = 1 ;
  
    arrFotosGaleria.forEach(f=>{
      var ang = Math.random()*360;
  
      console.log('ANG');
      console.log(ang);
  
      var tmpFBox = f.getBoundingClientRect();
  
      //ang =( ang*Math.PI )/ 180;
  
      // var tmpRadio = 50 +  Math.random()*(radio * 0.6);
  
  
      var tmpRadio =( Math.random()*(radio / 2 ) )  ;
  
      console.log('tmpRadio');
      console.log(tmpRadio);
  
       
      // var ranX = pmObj.x - tmpFBox.width/2  + (tmpRadio * Math.sin(ang)) ;
      // var ranY = (pmObj.y - tmpFBox.width/2 -  contenedor_galeria.y)  +  (tmpRadio * Math.cos(ang)) ;
      var tmpSignX = 2 * ( Math.round( Math.random()) - 0.5 );
      var tmpSignY = 2 * ( Math.round( Math.random()) - 0.5 );
   
  
  
      var tmpRanX = tmpSignX * Math.random()*tmpRadio * 0.5;
      var tmpRanY = tmpSignY * Math.random()*tmpRadio;
  
      
      console.log('tmpRanX / + '+ tmpRanX +' / tmpRanY ' + tmpRanY);
  
      var ranX = (pmObj.x - tmpFBox.width/2)   + tmpRanX  ;
      var ranY =  (pmObj.y -  contenedor_galeria.y - tmpFBox.height/2)  + tmpRanY   ;
  
  
  
      console.log('RX / + '+ ranX +' / RY ' + ranY);
  
     f.style.left = ranX + 'px';
     f.style.top = ranY + 'px';
  
      var tmpSignDeg = 2 * ( Math.round( Math.random()) - 0.5 );
  
      if(tmpSignDeg == preSign){
        tmpSignDeg*=-1;
      }
  
      preSign = tmpSignDeg;
  
      var tmpAng = tmpSignDeg * (5 + Math.random()*15);
  
      console.log('tmpAng ' + tmpAng);
  
      let inImg = f.querySelector('img');
  
  
      inImg.style.transform = 'rotate(' + tmpAng +'deg)';
  
      Draggable.create(f, {
        type:"x,y", edgeResistance:0.65, bounds:"#contenedor_galeria",
        onPress: function() {
      
          console.log(f);
      
          f.classList.add('activoFoto');
      
      
      
        },
        onRelease: function() {
      
          console.log(f);
      
          f.classList.remove('activoFoto');
      
        },
      onDrag: function(){
      
      }
      });
       
  
    }) ;
  } //hazGaleria


  function hazGaleriaMovil(){


    var swiperGaleria = new Swiper(".mySwiper_galeria", {
      slidesPerView: 1.25,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: "#next_gal",
        prevEl: "#prev_gal",
      },
    });


    swiperGaleria.slideTo(1, false,false);

  } //hazGaleriaMovil


  function hazGaleriaPasos(){

    console.log('HAZ GALERIA PASOS');


    var swiperGaleria = new Swiper("#swiper_pasos", {
      slidesPerView: 1,
      spaceBetween: 30,
      effect: 'fade', 
      loop: true,
      navigation: {
        nextEl: "#next_pasos",
        prevEl: "#prev_pasos",
      },
    });


    swiperGaleria.slideTo(1, false,false);

  } //hazGaleriaMovil

  
  
  
  
  function enterFrame(){
  
  
  
  
  }
  
  function arrastroFoto(f){
  
    console.log(f);
   
  }
  
  
  function sueltoFoto(f){
  
    console.log(f);
   
  }
  
  
  
  
  var globalZ = 0;
  
  
  function clickFoto(ev){
    ev.preventDefault();
    let tmpFoto = ev.currentTarget;
  
    //tmpFoto.parentNode.style.zIndex = globalZ;
  
    tmpFoto.style.zIndex = globalZ;
  
    console.log('TMPFOTO');
    console.log(tmpFoto);
   
    globalZ++;
  
  }
  
  /*
  menu_open
  menu_close
  */
  
  var videoControl;
  var controlesVideo;
  
  var arrColoresBot;
  
  
  // console.log(arrColoresBot ); 
  
  // console.log(arrColoresBot[0]);
  
  
  function hazVideoCoche(){
  
  
    arrColoresBot = ['#00429d', '#2e59a8', '#4771b2', '#5d8abd', '#73a2c6', '#8abccf', '#a5d5d8', '#c5eddf', '#ffffe0'];
  
    console.log('HAZ VIDEO COCHE');
  
    videoControl = document.getElementById('video_controles');
    controlesVideo = document.querySelectorAll('.botones_video');
  
    var arrControlesVideo = Array.prototype.slice.call(controlesVideo); // Now it's an Array.
   
  
    console.log('controlesVideo');
    console.log(controlesVideo);
  
    var cont = 0;
  
    controlesVideo.forEach(bot=>{
  
      //  bot.innerHTML=""; 
      //  console.log(arrColoresBot[cont]);
      // console.log('BOT!');
      // console.log(bot);
  
     bot.style.backgroundColor = '#000' ; /* arrColoresBot[cont];*/
  
      bot.addEventListener('click', (ev)=>{
        ev.preventDefault();
        var  tmpBot =  (ev.currentTarget);
  
       var  posBot = arrControlesVideo.indexOf(tmpBot);
        console.log('>>>>> tmpBot ' + posBot );
  
        switch(posBot){
  
  
          case 0:
  
            goToPlayStop(videoControl, 0,4);
  
          break;
  
          case 1:
  
  
           goToPlayStop(videoControl, 4,7);
  
          break;
  
          case 2:
    
            //videoControl.currentTime = 4 ;// posBot*5;
            //videoControl.play();
        //   goToPlayStop(videoControl, 4,5);
    
            
            videoControl.currentTime = 6 ; //posBot*5;
            videoControl.play(); 
        
    
  
          break;
 
  
  
        }
   
        
        //console.log(controlesVideo.indexOf(tmpBot) );
      }) //CLICK
  
      cont++;
    });
  
  
  /*
  video_coche
  botones_video
  bot_video_1
  */
  
  }
  
  var miTempo;
  
  function goToPlayStop(_vi, _from, _to){
  
    var difTime = _to - _from;
  
    difTime*=1000;
  
    console.log('difTime');
    console.log(difTime);
  
    var tmpVideo = _vi;
    
          tmpVideo.currentTime = _from ;// posBot*5;
          tmpVideo.play();
  
    miTempo = setTimeout(()=>{
      tmpVideo.pause();
      console.log('PARO VÍDEO');
    }, difTime );
   
  
  }
  
  
  function hazPrograma(){
  
    arrBotsPrograma = document.querySelectorAll('.bot_tit_programa');
  
    console.log('ARR PROGRAMAS');
    console.log(arrBotsPrograma);
  
    arrBotsPrograma.forEach(b=>{
      b.addEventListener('click', (ev)=>{
        ev.preventDefault();
        ev.currentTarget.classList.toggle('open_capitulo');
        var tmpExpli = ev.currentTarget.nextElementSibling;
        tmpExpli.classList.toggle('d-none');
      })
    });
   var liCont=1;
    //document.open();
  
  
  
    // document.write('<style>  \n');
  
  
  
  
    // document.write('</style>  \n');
  
   // document.close();
  
  //https://codepen.io/Gorbulin/pen/odVQVL
  
  
  
  }
  
  
  function hazProfes(){
  
    arrNomProfes = document.querySelectorAll('.nom_profe');
  
  
  
    arrNomProfes.forEach(n=>{
  
      n.addEventListener('click', b=>{
  
  
        let clickedElement = b.target;
        console.log('clickedElement');
        console.log(clickedElement);
       
        // check if the clicked element is a div
        let isDiv = clickedElement instanceof HTMLDivElement;
        if (isDiv) {
           console.log( "You have clicked the div element, and its inner HTML is " + clickedElement.innerHTML );
        }
  
  
  
        let tmpNext = b.currentTarget.parentNode.nextElementSibling;
       // console.log(b.currentTarget.nextElementSibling );
        tmpNext.classList.toggle('show_d');
  
        let tmpBot = b.currentTarget.parentNode;
       // console.log('tmpBot');
      //  console.log(tmpBot);
  
  
       // console.log('b.currentTarget');
       // console.log(b.currentTarget);
  
        tmpBot.classList.toggle('giraPlus');
  
  
  
      }, false);
  
    });
  
  
  }
  
  
  function hazMenuMovil(){
  
    arrMenuUp = document.querySelectorAll('.nav-link');
  
    arrMenuUp.forEach(m=>{
        m.addEventListener('click', (b)=>{
  
  
          menu_bot.classList.remove('open_menu');
  
          body.classList.remove('open_menu_body');
  
          navMenu.classList.remove('open_menu_nav');
        });
  
  
  
    })
  
  
  
    menu_bot.addEventListener('click', (ev)=>{
  
      ev.preventDefault();
      
      ev.currentTarget.classList.toggle('open_menu');
  
      body.classList.toggle('open_menu_body');
  
      navMenu.classList.toggle('open_menu_nav');
  
  
  
  
    })
  
  
  }
  
  
  function hazScrollers(){
  
    //console.log('HAZ SCROLLERS');
  
    new ScrollMagic.Scene({triggerElement: "#home" , duration :'200%', offset:window.innerHeight/1.5  })
    .setTween(".img_logo_txt", {y: "-200%", ease: Linear.easeNone})
    ////.addIndicators()
    .addTo(controller);
  
  
    //Botón flecha
  
   // gsap.to( window, { duration: 1, scrollTo: { y: "#section1" + ( index + 1 ), offsetY:70 } } );
  
  
  
  
 
  
  }
  
  function hazScrollingMenu(){
      
    arrSecGoes = document.querySelectorAll('.seccion_menu');
    arrScenesScroll = new Array();;
  
    
      if(arrSecGoes.length>0){
  
  
            arrSecGoes.forEach(sec=>{
  
              let tmpMenu = sec.dataset.menu;
  
              console.log('tmpMenu'); 
              console.log(tmpMenu);
  
              let tmpAltSec = sec.getBoundingClientRect();
  
              tmpAltSec = tmpAltSec.height;
  
              // console.log('tmpAltSec');
              // console.log(tmpAltSec);
  
              // console.log('sec');
              // console.log(sec.id);
  
  
              // triggerElement: '#profesores',
            var tmpScene =  new ScrollMagic.Scene({
              triggerElement: sec,
              duration :tmpAltSec  
            
            }) 
              .setClassToggle( '#'+ tmpMenu, "active") // add class toggle
            // //.addIndicators() // add indicators (requires plugin)
              .addTo(controller)
              .on('progress', function(e){
              //console.log(e);
                //miPlayVideo(e.progress);
              });
              
  
            // console.log('tmpScene');
            // console.log(tmpScene);
  
            arrScenesScroll.push(tmpScene);
  
            });
        
      }
  
  
  //AQUÍ
  
  
  
   
  }
  
  
 
   
  let timeVideo = 0;
  
  let contVideo = 0;
  let vueltas  = 0;
  function miPlayVideo(p){
  
    // console.log('p');
    // console.log(p);
  
    // console.log('VIDEO ' + video.duration);
  
    // console.log(  (( 100 / video.duration ) * p)  );
  
  
    // video.currentTime = Math.floor( ( 100 / video.duration ) * p );
  
    /*
  
    z yo = (x yo – mínimo (x)) / (máximo (x) – mínimo (x)) * 100
  
  dónde:
  
  z i : El i- ésimo valor normalizado en el conjunto de datos
  x i : el i- ésimo valor en el conjunto de datos
  min (x) : el valor mínimo en el conjunto de datos
  max (x): el valor máximo en el conjunto de datos
   */
    let goF = p*10 ;
  
    // console.log('goF ' + goF + ' DURATION ' +video.duration );
    // console.log((goF%video.duration));
  
  vueltas  =  (goF%video.duration);
  
    console.log('VUELTAS ' + vueltas + ' DURATION ' + video.duration);
  
    // console.log('VUELTAS Z ' + (goF/video.duration));

    // if(video.duration) {
    //     video.currentTime = vueltas ; //video.duration * scrollPercent *1
    // }  

    console.log('P !!! ' + p*10);
    
   // video.currentTime = p*10;
   
  
   if(window.innerWidth>1024){
  
    timeVideo+=0.2;
  
   }else{
  
    timeVideo+=0.05;
  
   }
  
   if(timeVideo>10){
    timeVideo = 0;
   }
  
   console.log('timeVideo >>>>>>> ');
   console.log(timeVideo);
  
   video.currentTime = timeVideo;
  
  
  
  }
  
  
  const registerVideo = (bound, video) => {
    bound = document.querySelector(bound);
    video = document.querySelector(video);
    const scrollVideo = ()=>{
      if(video.duration) {
        const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
        const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
        const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
         
        video.currentTime = video.duration * percentScrolled;
  
  
      }
      //requestAnimationFrame(scrollVideo);
    }
    //requestAnimationFrame(scrollVideo);
  }
  
  //registerVideo("#cont_video_person", "#cont_video_person video");
  
  
  // registerVideo("#bound-one", "#bound-one video");
  
  // registerVideo("#bound-two", "#bound-two video")
  
  // registerVideo("#bound-three", "#bound-three video")
  
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  
  var bound = document.querySelector("#cont_video_person");
   var video = document.querySelector("#cont_video_person video");
  
  function doSomething(scrollPos) {
    // Do something with the scroll position
  
    // console.log('scrollPos');
    // console.log(scrollPos);
  
    let scrollTop = window.scrollY;
    var cont_todo= document.getElementById('cont_todo');
    let docHeight =   cont_todo.offsetHeight;
    let winHeight =  window.innerHeight;
  
  
    if(scrollPos>altHeader){
      header.classList.add('hide_header')
    }else{
      header.classList.remove('hide_header')
    }
  
  
      //   console.log('scrollTop');
      //   console.log(scrollTop);
      //   console.log('docHeight');
      //   console.log(docHeight);
      //   console.log('winHeight');
      //   console.log(winHeight);

      let scrollPercent = scrollTop / (docHeight - winHeight);
  
  
  
      let scrollPercentRounded = Math.round(scrollPercent * 100);
   
  
  }
  
  
  
  
  
  window.addEventListener('resize' , resizea);
  
  var preWSize = window.innerWidth;
  
  function resizea(){
  
  
   
  
      if(videoPerson){
  
        console.log('REHAY VÏDEO HERO!!!');
  
        console.log(videoPerson);
    
        let tmpAnchVideo = videoPerson.getBoundingClientRect();
        tmpAnchVideo = tmpAnchVideo.width;
    
        videoPerson.style.height = tmpAnchVideo+'px';
    
    
      }
  
  
      imgRefAncho = document.getElementById('img_texto_ref');
  
      arrBtnsRefAncho = document.querySelectorAll('.btn_ref_ancho_img');
      
    console.log('RESIZEO!!! imgRefAncho');
    console.log(imgRefAncho);
  
    /*
    imgRefAncho
    arrBtnsRefAncho
    */
  
    if(imgRefAncho){
    
      console.log('HAY imgRefANcho');
      console.log(imgRefAncho);
      let tmpBoxImgRef = imgRefAncho.getBoundingClientRect();
    
      let tmpBoxImgRefAncho = tmpBoxImgRef.width;
    
      console.log('ANCHO IMG REF');
    
      console.log(tmpBoxImgRefAncho);
    
      if(arrBtnsRefAncho.length>0){
        arrBtnsRefAncho.forEach( img=>{
    
          img.style.width = tmpBoxImgRefAncho +'px';
    
        })
      }
    
    }

    preWSize = window.innerWidth;

    checkSize();


    preWSize = window.innerWidth;
    
}   

var arrDesp = document.querySelectorAll('.tit_desp_baix');
var pestAbierta;


function checkAbierta(){

  console.log('cHECK! ABIERTA!');
  console.log(pestAbierta);
  if(arrDesp){

      arrDesp.forEach(d=>{

        console.log('D!!!');
        console.log(d);

        if(pestAbierta!== d){

          console.log('FOUND!!!');
          console.log(d);

         d.classList.remove('abro_pest_baix');

        }


      });

  }


}

function quitaClicks(){

  

  arrDesp.forEach(d=>{

    d.removeEventListener('click', abroPestInfo);

  });


}

function abroPestInfo(ev){

 

    if(window.innerWidth < 767 ){


      var tmpB = ev.currentTarget;

      console.log('CLICK!!!');
      console.log(tmpB);
      // console.log('CLICK!!! PRINCIPIO pestAbierta');
      // console.log(pestAbierta);

      // console.log('CLICK!!! pestAbierta');
      // console.log(pestAbierta);
      // console.log('// CLICK!!! // pestAbierta');
      // console.log('IGUALES pestAbierta===tmpB');
      // console.log(pestAbierta===tmpB);

      if( tmpB.classList.contains('abro_pest_baix') ){

        console.log('tiene');

        tmpB.classList.remove('abro_pest_baix');
      }else{

        console.log('no tiene');

        tmpB.classList.add('abro_pest_baix');
      }



      pestAbierta = tmpB;

      
      console.log('CLICK!!!');
      console.log(tmpB);

       checkAbierta();
     

      // if( pestAbierta &&  ( pestAbierta != tmpB)){

      //   console.log('dISTINTO!');

      //       pestAbierta.classList.remove('abro_pest_baix');
      //       tmpB.classList.add('abro_pest_baix');


      // }else if( pestAbierta &&  ( pestAbierta == tmpB)){

      //   console.log('cIERRO!');

      //   pestAbierta.classList.remove('abro_pest_baix');
      // }else{

      //   console.log('abro!');
      //   tmpB.classList.add('abro_pest_baix');


      // }

   

      //pestAbierta = document.querySelector('.abro_pest_baix');


    

  }

//   ev.stopPropagation();

 

}

function checkSize(){



  arrDesp = document.querySelectorAll('.tit_desp_baix');

 quitaClicks();

  console.log('checkSize');

 // if(window.innerWidth < 767 ){

    arrDesp.forEach(d=>{

      console.log('BOtón!! ');
      console.log(d);

      d.addEventListener('click' , abroPestInfo );

      
    })

 

//  }else{

    if(window.innerWidth > 767 ){

        arrDesp.forEach(d=>{

          d.classList.remove('abro_pest_baix');
    
        });


    }


    if( preWSize<1024 &&  window.innerWidth>1024  ){

      hazGaleria()

    }





//  }


}


function iniciaLineas(){

  var arrLineas = document.querySelectorAll('.linea_claim');

  arrLineas.forEach( (li)=>{

    li.classList.add('llegada_line');


  })


}







