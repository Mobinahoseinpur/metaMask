const mdd =document.querySelector('.mobileDropDownMenu')
// 
let myMediaQuery = window.matchMedia('(min-width: 992px)');
function widthChangeCallback(myMediaQuery) {
    if(myMediaQuery.matches) {
      mdd.classList.add('mobileDropDownMenuDisplay') 
     }else{
      mdd.classList.remove('mobileDropDownMenuDisplay') 
     }
  }
  myMediaQuery.addEventListener('change', widthChangeCallback);