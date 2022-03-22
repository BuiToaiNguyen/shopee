var fl = document.querySelector(".flash__sale-box")
var htmm="";
for(i=0;i<15;i++){
    htmm=htmm+`                <div class="col flash__box">
    <a href="" class="flash__link">
    <div class="flash__box-link">
        <div class="flash-img">
            <img src="https://cf.shopee.vn/file/d186fe53104ec75c8ca1526d23d13239" alt="" class="img__product-sale">
        </div>
        <div class="flash__sale flex-direc">
            <span class="sale__persent">19%</span>
            <span class="sale__low">Giảm</span>

        </div>
        <div class="bg__sale">
            
            <h3><span>đ</span>299999</h3>
            <div class="progress__sale">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${i*7}%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress__bg">
                    Đã Bán ${i*7}

                </div>

            </div>
        </div>
       

    </div>
    <!-- <div class="flash__title">
        <div class="flash__price">
            

        </div>


    </div> -->

    </a>
</div>`
}
fl.innerHTML=htmm