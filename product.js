var product = document.querySelector("#product")
var htmll=" "
var htmll2=" "
for(i=0;i<12;i++){
    htmll=htmll+`<div class="col-2 product__flex">
    <div class="product__content">
        <a href="#" class="product__content-link">

           <div class="product__content-header">
               <img class="product__header-img" src="https://cf.shopee.vn/file/461691071df30827265cc48e9b5e76f3">
               <div class="product__sale_left">
                   <span>yêu thích</span>
               </div>
               <div class="product__sale_right">
                   <div class="flash__sale flex-direc">
                       <span class="sale__persent">19%</span>
                       <span class="sale__low">Giảm</span>
           
                   </div>

               </div>

           
           </div>
           <div class="product__title">
               <div class="product__name">
                   <span>Dép sục thêu chữ đáng yê lam sục nữ thêu chữ CD01</span>

               </div>
               <div class="product__price">
                   <div class="pdpr__left">
                    <h3>
                        <span>đ</span>109.000
                    </h3>                                           
                </div>
                   <div class="pdpr__right">
                        <span>đã bán 120</span>
                   </div>
               </div>
           </div>
           <div class="product__hover">
               <span>tìm sản phẩm tương tự</span>
           </div>
        </a>

    </div>

</div>`
}
for(i=0;i<12;i++){
    htmll2=htmll2+`<div class="col-2 product__flex">
    <div class="product__content">
        <a href="#" class="product__content-link">

           <div class="product__content-header">
               <img class="product__header-img" src="https://cf.shopee.vn/file/c0d9b9d3f0fa53f98b7b631ce27792f4">
               <div class="product__sale_left">
                   <span>yêu thích</span>
               </div>
               <div class="product__sale_right">
                   <div class="flash__sale flex-direc">
                       <span class="sale__persent">20%</span>
                       <span class="sale__low">Tăng</span>
           
                   </div>

               </div>

           
           </div>
           <div class="product__title">
               <div class="product__name">
                   <span>giảm 10K đơn 50K] Áo croàu trắng điệu đàCD01</span>

               </div>
               <div class="product__price">
                   <div class="pdpr__left">
                    <h3>
                        <span>đ</span>109.000
                    </h3>                                           
                </div>
                   <div class="pdpr__right">
                        <span>đã bán 120</span>
                   </div>
               </div>
           </div>
           <div class="product__hover">
               <span>tìm sản phẩm tương tự</span>
           </div>
        </a>

    </div>

</div>`
}
    product.innerHTML=htmll

var header__pd_l = document.querySelector(".pd__left")
var header__pd_r = document.querySelector(".pd__right")
header__pd_l.addEventListener("click",()=>{
    header__pd_r.classList.remove("line__bottom")
    header__pd_l.classList.add("line__bottom")
    product.innerHTML=htmll


})
header__pd_r.addEventListener("click",()=>{
    header__pd_l.classList.remove("line__bottom")
    header__pd_r.classList.add("line__bottom")
    product.innerHTML=htmll2

})
