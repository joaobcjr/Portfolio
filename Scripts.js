  var giro = true;
  
  function girar (elemento)
  {
    if (giro){
      elemento.classList.toggle('is-flipped');
      giro = false;
    }
    
  }
  
 function girar2 (elemento)
  {
    if (!giro){
      elemento.classList.toggle('is-flipped');
      giro = true;
    }
    
  }
  
 $(function(){ 
     $("[id$='circle']").percircle();
     
     $("#clock").percircle({
         perclock: true
     });
 });
