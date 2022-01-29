function makeGreen(){
  document.body.style.backgroundColor='green';
}

const pink= document.getElementById('make-pink');
pink.addEventListener('click' , pinkColor);
function pinkColor() {
  document.body.style.backgroundColor = "#FFC0CB";
}

const cayan=document.getElementById('make-cayan');
cayan.addEventListener('click',function(){
  document.body.style.backgroundColor='#00FFFF';
});

document.getElementById('make-ash').addEventListener('click',function(){
    document.body.style.backgroundColor='#B2BEB5';
});