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
    didContainer.style.display ='none';
    doingWrapper.style.display ='none';
    noteContainer.style.display ='none';
  }
});

// did - slide, tetris

const didContainer = document.querySelector('.did-container');
const $did = document.querySelector('nav> ul> li:nth-child(2)');
//const slideWrapper = document.querySelector('.slide-wrapper');


$did.addEventListener('click',()=>{
  console.log("did click");
  if(didContainer.style.display == 'block'){
    didContainer.style.display ='none';
  }else{
    didContainer.style.display = 'block';
    profile.style.display ='none';
    doingWrapper.style.display ='none';
    noteContainer.style.display ='none';
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
    didContainer.style.display ='none';
    noteContainer.style.display ='none';
  }
});


//note jswing
const $note = document.querySelector('nav> ul> li:nth-child(4)');
const noteContainer = document.querySelector('.note-container');

$note.addEventListener('click',()=>{
  console.log("note click");
  if(noteContainer.style.display == 'block'){
    noteContainer.style.display ='none';
  }else{
    noteContainer.style.display = 'block';
    profile.style.display ='none';
    didContainer.style.display ='none';
    doingWrapper.style.display ='none';
  }
});