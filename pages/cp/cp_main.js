var btn=document.querySelector('.control_button_touch');
var main_cp_dis=document.querySelector('.main_cp');


var strk=document.querySelectorAll('.point');
var blur =document.querySelector('.blur');
var per=document.querySelector('.percent')
/* BRIGHTNESS CONTROLL*/

var input=document.querySelector('#range_brightness');

input.addEventListener('change',()=>{
  var a=input.value/100;
  per.innerHTML=` ${input.value} %`
  let root = document.documentElement;
  root.style.setProperty('--brightness',a);

});
/**/


var all_main_sub=document.querySelectorAll('.all_main');
function main_sub(d){
  all_main_sub.forEach(e=>{
  e.style.transform='scale(0)'
});
all_main_sub[d].style.transform='scale(1)';
}






var btn_cont= document.querySelector('.control_button_touch');
var btn_on_off=document.querySelector('.on_off');
function on_cp(){
  btn_on_off.classList.toggle('on_off_on');
  blur.classList.toggle('blur_off');
  if(blur.classList.contains('blur_off'))
  {document.querySelector('#status').innerHTML='ON'
    document.querySelector('.screen').style='color:green';
    hide_all_stroke();
    show_stroke(0);
    main_sub(0);
    show_btn(0);
    btn_cont.classList.add('off_btn');
  }
  else{
    document.querySelector('#status').innerHTML='OFF'
    document.querySelector('.screen').style='color:red';
    hide_all_stroke();
    hide_all_main();
    hide_all_btn();
    btn_cont.classList.remove('off_btn');
}

}



function hide_all_main(){
  all_main_sub.forEach(e=>{
  e.style.transform='scale(0)';
    });
}


/*
WHEN CLICK ON BUTTON FOR CHANGING THE DIV 
TOUCH BUTTON KE LIE HAI YE SAB YAR ....
*/

var btn_touch= document.querySelectorAll('.btn_cp');
btn_touch.forEach((e)=>{
   e.addEventListener('click',(e)=>{
    var tar=e.target.id;
    hide_all_btn();
    hide_all_stroke();
    show_stroke(tar);
    main_sub(tar);
    show_btn(tar);
  });
});


function hide_all_btn(){
  btn_touch.forEach(d=>{
    d.classList.remove('btn_cp_a');
  });
}

function show_btn(d){
  btn_touch[d].classList.add('btn_cp_a');
}

/**/



function show_stroke(d)
{
              strk[d].classList.add('point_a');
}

function hide_all_stroke(){
             strk.forEach((d)=>{
             d.classList.remove('point_a');
              });
}


/*
 CREATE ALL ASTORKE RETURN TO NO ONE 
*/


for(i=0;i<5;i++){
stroke_c(i);
}
function stroke_c(i)
{
var det=btn_touch[i].getClientRects()[0];
var bada=document.querySelector('.main_cp');
bada= bada.getClientRects()[0];
var x2= bada.x+bada.width;
var y2=bada.y+bada.height/2;
var y=det.y+det.height/2;
var x=det.x;
/*bich piint */
var mid=det.x-(x2);
mid=mid/2;
var x3=x2+mid;


p=`${x} ${y}, ${x3} ${y}, ${x3} ${y} ,${x3} ${y2},${x3} ${y2} ,${x2} ${y2}`;
var pnt=`.st${i}`
 var all=document.querySelector(pnt).setAttribute('points',p);
 
 
 var socket=document.querySelector('.socket');
 socket= socket.getClientRects()[0];
 
 var handle=document.querySelector('.cp_handle');
 handle= handle.getClientRects()[0];
 
 var s4= socket.y+socket.width;
 var mid_socket=socket.width/2;
 var s3 =socket.x+mid_socket;

var s2= handle.y+handle.height;
 var mid_handle=handle.width/2;
 var s1 =handle.x+mid_handle;

 var q =`${s1} ${s2},${s1} ${s2+30} ,${s3} ${s2+30},${s3} ${s4}`;
  var all=document.querySelector('.socket_line').setAttribute('points',q);

}





/**/


var pt=document.querySelector('.st4');
 let c=pt.getTotalLength(); 
document.documentElement.style.setProperty('--l',c);

/*For rating */


var star1= document.querySelectorAll('.s1');
var star2= document.querySelectorAll('.s2');

var rating1;
var rating2;
function rat1(c){
  rating1=c+1;
  star1.forEach((e)=>{
    e.classList.add('not');
  });
  for(i=0;i<=c;i++){
  star1[i].classList.remove('not');
  }
}

function rat2(b){
  rating2=b+1;
  star2.forEach((e)=>{
    e.classList.add('not');
  });
  for(i=0;i<b+1;i++){
  star2[i].classList.remove('not');
  }
}

function feed(){
  alert(`${rating1} STAR FOR WEB PAGE ${rating2} STAR FOR FRIEND SUGGETION THATS AWESOEM THANK YOU FOR FEDBACK WE WILL TOOK THIS FEEDBACK FOR IMPROVE YOUR FUTURE EXPERIENCE ON OUR WEB PAGE `);
  rat1(4);
  rat2(4);
}


function main_switch(){
  var main_switch= document.querySelectorAll('.to_hide');
  var sub=document.querySelector('.on_off');
  var sokt=document.querySelector('.socket');
  
  
  sokt.classList.toggle('socket_a');
  main_switch[0].classList.toggle('to_hide_sub');
  main_switch[1].classList.toggle('to_hide_sub');
  sub.classList.toggle('fully_off');
  
  if (sub.classList.contains('on_off_on')) {
    on_cp();
  }
}
 
