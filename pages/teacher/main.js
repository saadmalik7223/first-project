console.log('Hello World!');

// all variable here //

var inp=0;
var photo=document.querySelector('.fac_photo');
var name_head=document.querySelector('.one');
var fac_more_det=document.querySelector('.three');
var card_main=document.querySelector('.card_facultie_detail');
var shadow=document.querySelector('.shadow');


console.log(card_main.getBoundingClientRect());
// array for facultie detail /// 
var fac_detail=['<h3>ANKUR KUMAR </h3><h6>DEAN ACADEMICS</h6>',
'<h3>RITU SINGH</h3><h6>PRINCIPLE</h6>',
'<h3>SANJAY SIR</h3><h6>H.O.D OF DEP.</h6>',
'<h3>RAJEEV KUMAR</h3><h6>CHIEIF PROCTER</h6>',
'<h3>ROSHNI KAPOOR</h3><h6>COA TEACHER</h6>',
'<h3>NEHA SHARMA</h3><h6>D.S.T.L LAB TEACHER</h6>',
'<h3>SACHIN RAJ</h3><h6>CSS TEACHER</h6>',
'<h3>MOHD SHOEB</h3><h6>MATHMATICS TEACHER</h6>',
'<h3>ANKIT K</h3><h6>B.E TEACHER</h6>',
'<h3>SMITI SAXENA</h3><h6>UHV TEACHER</h6>'
];

var fac_more=['ASSISTANCE PROFESSOR & DEAN <br>Computer Science & Engineer <br><br>QUALIFICATION :M.Tech, B.Tech <br><br> EXPERIENCE:13 year',

'ASSISTANCE PROFESSOR & PRINCIPLE <br>Computer Science & Engineer <br><br>QUALIFICATION :P.HD, M.Sc, B.sc <br><br> EXPERIENCE:16 year',

'PROFESSOR  & H.O.D <br>Master of Computer Application <br><br>QUALIFICATION :P.hd <br><br> EXPERIENCE:21 year',
  
  'ASSISTANCE PROFESSOR  <br>Computer Science & Engineer <br><br>QUALIFICATION :M.Tech, B.Tech <br><br> EXPERIENCE:13 year',
  
  'ASSISTANCE PROFESSOR  <br>Computer Science & Engineer <br><br>QUALIFICATION :M.Tech, B.Tech <br><br> EXPERIENCE:13 year',
  
  'ASSISTANCE PROFESSOR  <br>Computer Science & Engineer <br><br>QUALIFICATION :M.Tech, B.Tech <br><br> EXPERIENCE:13 year',
  
  'ASSISTANCE PROFESSOR  <br>Computer Science & Engineer <br><br>QUALIFICATION :M.Tech, B.Tech <br><br> EXPERIENCE:13 year',
  
  'ASSISTANCE PROFESSOR  <br>Computer Science & Engineer <br><br>QUALIFICATION :M.Tech, B.Tech <br><br> EXPERIENCE:13 year',
  
  'ASSISTANCE PROFESSOR  <br>Computer Science & Engineer <br><br>QUALIFICATION :M.Tech, B.Tech <br><br> EXPERIENCE:13 year',
  
  'ASSISTANCE PROFESSOR  <br>Computer Science & Engineer <br><br>QUALIFICATION :M.Tech, B.Tech <br><br> EXPERIENCE:13 year'
  ]
  
 

name_head.innerHTML=fac_detail[0];
fac_more_det.innerHTML=fac_more[0];


//button function //

//previous button //
function prev1(){
 inp--;
  if(inp<0){inp=9}
  shadow.classList.toggle('shadow_a');
card_main.classList.toggle('card_facultie_detail_a');
  photo.style=`background-image:url(fac_image/${inp}.png)`;
  name_head.innerHTML=fac_detail[inp];
  fac_more_det.innerHTML=fac_more[inp];
  
}




// next button //
function next1(){
 inp++;
 if(inp>9){inp=0}
 shadow.classList.toggle('shadow_a');
card_main.classList.toggle('card_facultie_detail_a');
  photo.style=`background-image:url(fac_image/${inp}.png)`;
    name_head.innerHTML=fac_detail[inp];
    fac_more_det.innerHTML=fac_more[inp];
}
