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
//--------------------------------------Menu-SLIDEBAR-PRODUCT----------------------------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg =document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src=imgItem.src
    })
})
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display="none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display="block"
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display="none"
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display="block"
    })
}
const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeb")
    })
}