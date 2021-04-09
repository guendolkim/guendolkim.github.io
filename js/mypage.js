'user strict';

const mrKim = document.querySelector('nav> ul> li:nth-child(1)');
const profile = document.querySelector('.profile');

mrKim.addEventListener('click',()=>{
  console.log("profile click");
  if(profile.style.display == 'flex'){
    profile.style.display ='none';
  }else{
    profile.style.display = 'flex';
    slideWrapper.style.display ='none';
  }
});

const $did = document.querySelector('nav> ul> li:nth-child(2)');
const slideWrapper = document.querySelector('.slide-wrapper');

$did.addEventListener('click',()=>{
  console.log("did click");
  if(slideWrapper.style.display == 'block'){
    slideWrapper.style.display ='none';
  }else{
    slideWrapper.style.display = 'block';
    profile.style.display ='none';
  }
});