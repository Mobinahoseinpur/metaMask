var element = document.body;

const desktopBtn = document.querySelector('#themeBtnDesktop')
const footLogo = document.querySelector('#themeBtnDesktop')
desktopBtn.addEventListener('click' , function(){
    element.classList.toggle("Tdark");
    if(element.classList=='Tdark'){
        document.getElementById('logoImgDesktop').src="assets/images/logodark.svg"
        document.querySelector('.footerLogo').src="assets/images/logodark.svg"
    }else{
        document.getElementById('logoImgDesktop').src="assets/images/logolight.svg"
        document.querySelector('.footerLogo').src="assets/images/logolight.svg"
    }
})
// themeBtnmobile
const mobileBtn = document.querySelector('#themeBtnmobile')
mobileBtn.addEventListener('click' , function(){
    if(element.classList=='Tdark'){
        element.classList.remove("Tdark")
        document.getElementById('logoImgMobile').src="assets/images/logolight.svg" 
        
    }else{
        element.classList.add("Tdark")
        document.getElementById('logoImgMobile').src="assets/images/logodark.svg"
    }
    }
    
)