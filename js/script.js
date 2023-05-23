//--------------------------------------Menu-SLIDEBAR-HEADER----------------------------------------
const header =document.querySelector("header")
    window.addEventListener("scroll",function(){
        x = window.pageYOffset
        if(x>0){
            header.classList.add("sticky")
        }else{
            header.classList.remove("sticky")
        }
    })
//--------------------------------------Menu-SLIDEBAR-CATEGORY----------------------------------------
const itemSlidebar = document.querySelectorAll(".category-left-li")
itemSlidebar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})