'user strict';

// profile
const mrKim = document.querySelector('nav> ul> li:nth-child(1)');
const profile = document.querySelector('.profile');

mrKim.addEventListener('click',()=>{
  console.log("profile click");
  if(profile.style.display == 'flex'){
    profile.style.display ='none';
  }else{
    profile.style.display = 'flex';
    slideWrapper.style.display ='none';
    doingWrapper.style.display ='none';
  }
});

// did - slide
const $did = document.querySelector('nav> ul> li:nth-child(2)');
const slideWrapper = document.querySelector('.slide-wrapper');

$did.addEventListener('click',()=>{
  console.log("did click");
  if(slideWrapper.style.display == 'block'){
    slideWrapper.style.display ='none';
  }else{
    slideWrapper.style.display = 'block';
    profile.style.display ='none';
    doingWrapper.style.display ='none';
  }
});

// doing 
const $doing = document.querySelector('nav> ul> li:nth-child(3)');
const doingWrapper = document.querySelector('.doing-wrapper');

$doing.addEventListener('click',()=>{
  console.log("doing click");
  if(doingWrapper.style.display == 'block'){
    doingWrapper.style.display ='none';
  }else{
    doingWrapper.style.display = 'block';
    profile.style.display ='none';
    slideWrapper.style.display ='none';
  }
});