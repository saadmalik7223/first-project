
function $(x) {
  return document.querySelector(`${x}`);
}
function $a(x) {
  return document.querySelectorAll(`${x}`);
}
function c(x){
  return console.log(x)}
  
 
 var hover=null;
 
  
  
  
  
  function svg(left,right,x)
  {
    
    //
  
 var cat=$a('.catalogue')[left].getClientRects()[0];
 var card=$a('.book_card')[right].getClientRects()[0];


var x1=cat.x+cat.width;
 var mid=cat.height/2;
 var y1=cat.y+mid;
 

 
 
 var x2=card.x;
 var mid2=card.height/2;
 var y2=card.y+mid2;
 
 var midx= (x2-x1)/2;
 x3= x1+midx;

 var p=`${x1} ${y1} , ${x3} ${y1}, ${x3} ${y1}, ${x3} ${y2}, ${x3} ${y2}, ${x2} ${y2}`;
 
 var st=$a('.st')[x];
 st.setAttribute('points',p);
}


var a=0;
function call(){
for(i=0;i<5;i++){
  for(j=0;j<4;j++){
    
    svg(i,j,a);
    a++;
  }
}
}
var touch;
var temp;
var row;

function clk(i,j,x){
 temp=x;
 row=x;
  var cat=$a('.catalogue');
  
  cat.forEach((e)=>{
    e.classList.remove('on');
  })

 touch=!touch;
  if(touch==true){
  
  hideall();
  show(i,j);
  cat[x].classList.add('on');
  $('.book_right').style='transform:scale(1)';
  call();
  }
  else{
    hideall();
    cat[x].classList.remove('on');
    $('.book_right').style='transform:scale(0)';
  }
}


function show(i,j){
  var st=$a('.st');
  for(i=i;i<j;i++){
    st[i].classList.toggle('st_show');
  }
}


function hoverit(i,j){
  if(touch==false||touch==null){
    hideall();
    show(i,j);
    $('.book_right').style='transform:scale(1)';
    call();
  }
}

function hoverout()
{
  if(touch==false||touch==null)
  {
    hideall();
    $('.book_right').style='transform:scale(0)';
  }
}

function hideall(){
  for(i=0;i<20;i++){
    $a('.st')[i].classList.remove('st_show')
  }
}


var catalogue=$a('.catalogue');
catalogue.forEach((e)=>{ 
  e.addEventListener('mouseout',()=>{
    hoverout();
});
});




function one(x){
  hideall();
  if(row!=0){
    row=row*4
  }
  x=row+x;
  show(x,x+1);
  row=temp;
  
}
