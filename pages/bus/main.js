
function $(x) {
  return document.querySelector(`${x}`);
}
function $a(x) {
  return document.querySelectorAll(`${x}`);
}
function c(x){
  return console.log(x)
}



var add=[
  'CET&R ',
  'CET',
  'BAHERI',
  'IZZATNAGAR',
  'SATEILLITE',
  'SHUBHASH-NAGAR',
  'ROADWAYS',
  'JUNCTION ',
  'CITY-STATION ',
  'AIR-FORCE ',
  'CIRCUIT-HOUSE',
  ]
  
  var bus=['NO FIR SAME ROUTE'];
  
 add.forEach(e=>{
    
 
    $('.inp1').innerHTML+=`<option value="${e}">${e}</option>`;
  $('.inp2').innerHTML+=`<option value="${e}">${e}</option>`;
    
  });
  
  
  var BAHERI=['UP25 1503 AD'];
 
  var IZZATNAGAR=['UP25 1502 AD','UP25 1643 AG'];

  var SATEILLITE=['UP25 1503 AD','UP25 1643 AG','UP25 5445HH'];

  var SHUBHASH=['UP25 1503 AD','UP25 6678 CD','UP25 6789 GF'];

  var ROADWAYS=['UP25 1503 AD','UP25 5463 AD','UP25 4515FD','UP45 2332 HR'];
  
  var JUNCTION=['UP25 1503 AD','UP25 4551 AF','UP25 6501 GH'];
  
  var CITY=['UP25 1503 AD','UP25 6789 IJ','UP25 6714 GH','UP25 6789 GH','UP25 1502 GH','UP25 4551 AF'];
  
  var AIRFORCE=['UP25 1503 AD'];
  var CIRCUITHOUSE=['UP25 1503 AD'];
  
// IF YOU SELECT COLLEGE THEN FROM.SECODN OPTION COLLEGE WILL NOT SHOW BY THIS PRPGRAM 
  
  $('.inp1').addEventListener('change',()=>{
    var value=document.input.from.value;
    if(value==add[0]||value==add[1])
{
  fill('.inp2',2,add.length)
}
 else{
   fill('.inp2',0,2);
 }
  });
  
  $('.inp2').addEventListener('change',()=>{
    var val=document.input.to.value;
    if(val==add[0]||val==add[1])
{
  fill('.inp1',2,add.length)
}
 else{
   fill('.inp1',0,2);
 }
  });
  
// FUNXTION FOR FILL DETAIL IN SELECT //
 
 
 

function fill(x,u,v){
  $(x).innerHTML='';
  for(i=u;i<v;i++)
  $(x).innerHTML+=`<option value="${add[i]}">${add[i]}</option>`;
}

var a=$('.st');


var btn=$('.btn').getClientRects()[0];
var detl=$('.detail_input').getClientRects()[0];

var x1=btn.x+btn.width;
var mid=btn.height/2;
var y1=btn.y+mid;



var x2=detl.x;
var mid2=detl.height/2;
var y2=detl.y+mid2;

var x3= (x2-x1)/2;
var p=`${x1} ${y1} ,${x1+x3} ${y1} ,${x1+x3} ${y1}, ${x1+x3} ${y2} ,${x1+x3} ${y2}, ${x2} ${y2}`;

a.setAttribute('points',p);


// svg & select option change end hete 











// button working 
var your_stop;
var target;
$('.btn').addEventListener('click',()=>{
  var from=document.input.from.value;
  var to=document.input.to.value;
  var x=add.length;
  

  
  
  
  // toogle main page //
  
  

  // FOR SEARCH ING VALUE OF BUS FROM WHRE , TO WHERR 
  for(i=0;i<x;i++){
    if(from==add[i]){
      your_stop=i;
      break;
    }
  }
  for (i = 0; i < x; i++) {
    if (to== add[i]) {
      target= i;
      break;
    }}
    
    
 
    // for bus geeeting main part is this //
    
    
    for(i=2;i<add.length;i++){
      
    
    if(to==add[i]||from==add[i])
    {
     
     
      switch (i){
       
       case 2: bus=BAHERI;break;
       case 3: bus=IZZATNAGAR;break;
       case 4:bus=SATEILLITE;break;
       case 5:bus=SHUBHASH;break;
       case 6:bus=ROADWAYS;break;
       case 7:bus=JUNCTION;break;
       case 8:bus=CITY;break;
       case 9:bus=AIRFORCE;break;
       case 10:bus=CIRCUITHOUSE;break;
      }
      break;
    }
}
    
    
    
    
    
    
    
    
    
    // FILING DETAIL FOR BUA PAGE 
    $('.route').innerHTML=`ROUTE :   ${add[your_stop]} TO ${add[target]} `;
  
  
    if(from==add[0]||from==add[1]){
      var arive=' 4:10 P.M';
      var dep='4:59 P.M';
      $('.arival_time').innerHTML=`ARRIVAL-TIME : ${arive}`;
  
  $('.dep_time').innerHTML=`DEPARTER-TIME : ${dep}`;
  
    }
   
 
 //  
 $('.st').classList.toggle('st1');
 
 
 $('.st').addEventListener('transitionend',()=>{
 var l = bus.length;
 bus_det(l);  

 })
 

});

// BUTTON CKICK EVENT END FROM HERE //



// FOR MAIKNG ARRAY FOR BUS FOR SPECIFIC TARGET 

function bus_det(x){
  $('.detail_input').innerHTML='';
  for(i=0;i<x;i++){
  
  $('.detail_input').innerHTML+=`
  <div class="bus_det">
  <div class="icon"></div>
  <div id="bus_no" class="bus_no">${bus[i]}</div>
  </div>`
}

/* FOR FILLING BUS NO ON BASIC OF CLICKING DIV BUS NO CARD */
var temp=$a('.bus_det');
temp.forEach(e=>{
  e.addEventListener('click',(e)=>{
    var bus=e.target.childNodes[3].innerHTML;
    $('.bus_number').innerHTML=` BUS-NO : ${bus}`;
    $('.bus_animation').classList.toggle('show');
  });
});

}
/*
var x=$('.btn').getClientRects()[0];
var y=$('.bus_schedule_main').getClientRects()[0];

var i=null;
function animate(){
 i+=9.8;
  if(i=="100")
  return;
  
 $('.btn').style.transform=`translateY(${i}px)`;
 
 
  window.requestAnimationFrame(animate);
}
 window.requestAnimationFrame(animate);
*/


function backhome(){
  $('.bus_animation').classList.toggle('show');
}
