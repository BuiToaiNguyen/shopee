arr=[
    {
        id:1,
        img:"https://cf.shopee.vn/file/b51fadc9037f0e5f9144863f44c86d15_xhdpi",
        title:"Ưu đãi 50%"
    },
    
    {
        id:2,
        img:"https://cf.shopee.vn/file/b880528ac657788fdefde829d6d768de_xhdpi",
        title:"Mua là có quà"
    },
    {
        id:3,
        img:"https://cf.shopee.vn/file/fa6eac79f72a28a281507670ecb29b43_xhdpi",
        title:"Mua là có quà"
    },
    {
        id:4,
        img:"	https://cf.shopee.vn/file/c7b3b41eb5affd0bc38a8b1ac013c8f3_xhdpi",
        title:"Da khỏe sạch mụn"
    },
    {
        id:4,
        img:"	https://cf.shopee.vn/file/c7b3b41eb5affd0bc38a8b1ac013c8f3_xhdpi",
        title:"Da khỏe sạch mụn"
    },
    {
        id:5,
        img:"https://cf.shopee.vn/file/99728ebf39058be075344b88656dada1_xhdpi",
        title:"Mua là có quà"
    },
    {
        id:1,
        img:"https://cf.shopee.vn/file/b51fadc9037f0e5f9144863f44c86d15_xhdpi",
        title:"Ưu đãi 50%"
    },
    {
        id:2,
        img:"https://cf.shopee.vn/file/b880528ac657788fdefde829d6d768de_xhdpi",
        title:"Mua là có quà"
    },
    

]
var spm1 = document.querySelector(".row_spm_1")
var spm2 = document.querySelector(".row_spm_2")
var html=""
for(i=0;i<arr.length;i++) {
    html+=`<div class="col-3 item__spm">
    <a href="#" class="spm__link">
    <img src="${arr[i].img}"></ alt="">

        </a>
        <span class="spm__sale">${arr[i].title}</span>
</div>`
}
spm1.innerHTML=html
spm2.innerHTML=html

var header__pd_l = document.querySelector(".pd__left")
var header__pd_r = document.querySelector(".pd__right")
header__pd_l.addEventListener("click",()=>{
    header__pd_r.classList.remove("line__bottom")
    header__pd_l.classList.add("line__bottom")

})
header__pd_r.addEventListener("click",()=>{
    header__pd_l.classList.remove("line__bottom")
    header__pd_r.classList.add("line__bottom")

})

