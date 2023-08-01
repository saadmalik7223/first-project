var circle= document.querySelectorAll('.menu_bar');

var icon= document.querySelectorAll('.all_icon');

var prev= document.querySelector('.prev');
var next1= document.querySelector('.next');

var head_name= document.querySelector('.heading_of_icon');
var name_arr=['E-BOOK LIBRARY',
'BUS SCHEDULE',
'FACULTIE DETAIL',
'CONTROL PANEL',
  ]


console.log(circle[0]);



function rotate(){
 circle[0].classList.add('three_a');
 circle[1].classList.add('two_a');
 circle[2].classList.add('one_a');
 circle[3].classList.add('one_a');
}

function rotate_out(){
 circle[0].classList.remove('three_a');
 circle[1].classList.remove('two_a');
 circle[2].classList.remove('one_a');
 circle[3].classList.remove('one_a');
}


/*  FOR PREVIUS BUTTON ICIN CHANGE */

var count=0;
prev.addEventListener('click',()=>{
  rotate();
  press();
   count--;
   if(count<0){count=3}
   show_icon(count);
   prev.classList.toggle('prev_a');
  
});

/*transition end pe rotate off krde */

circle[0].addEventListener('animationend',rotate_out);




/* FOR NEXT BUTTON ICON CHABGE */

next1.addEventListener('click',()=>{
  rotate();
  press();
  count++; 
  if(count>3){count=0}
  show_icon(count);
    next1.classList.toggle('next_a');
   
});




/* PROTOTYPE FOR NEXT AND PREVIUS BUTTON */

function show_icon(c){
  for(i=0;i<icon.length;i++){
  icon[i].classList.add('hide');
}
icon[c].classList.remove('hide');
head_name.innerHTML=name_arr[count];
}


/**/
function press(){
  console.log('hhhh')
  circle[0].classList.toggle('press');
  circle[2].classList.toggle('press2');
}



/*REDIRECTING FROM MAIN PAGE TO ANOTHER PAGE */


icon.forEach((e)=>{
   e.addEventListener('click',sh);
});

function sh(e){
 var e=e.target.id;
 window.location.href=`/pages/${e}/index.html`
}


/**/
