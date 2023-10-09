const acc = document.querySelectorAll(".mobileMenuTitle")
const ham =document.querySelector('.ham')
const MDorpDown =document.querySelector('.mobileDropDownMenu')

ham.addEventListener('click' , function(){
    MDorpDown.classList.toggle('mobileDropDownMenuShow')
})

acc.forEach(item => {
    item.addEventListener("click" , function(){
        item.classList.toggle('active')
        const content = item.nextElementSibling
        if(content.style.height){
            content.style.height=null
        }else{
            content.style.height = content.scrollHeight+'px'
        }
    })
})

