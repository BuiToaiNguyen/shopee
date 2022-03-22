
var log = document.querySelector(".log")
function login(){
    // var loginBtn = document.getElementById("login");
    
    log.classList.toggle("toggleLog")
    
    
}
var cancelLog = document.querySelector(".transparent")
cancelLog.addEventListener("click", ()=>{
    log.classList.add("toggleLog")
})
var searchMouseDown = document.querySelector(".search")
var search_recomend =document.querySelector(".search_recomend")
searchMouseDown.addEventListener("click", ()=>{
    search_recomend.classList.remove("toggleLog")

})

searchMouseDown.addEventListener("mouseover", ()=>{
    search_recomend.classList.add("toggleLog")

})
var clickAll = document.querySelectorAll('div:not([class="header__box-search"]  )');

// clickall= Array.from(clickAll)

// clickall.forEach((item)=>{
//     item.addEventListener("mouseover",()=>{
//         search_recomend.classList.add("toggleLog")
        
//     })
//     console.log(1)
// })

var section_cate =Array.from(document.querySelectorAll(".section__category-icon")) 
// console.log(section_cate[0])
section_cate[1].style.display = "none";
 section_cate[0].addEventListener("click",()=>{
     var header__section= document.querySelector(".header__section")
     header__section.style.animation = `fadeLeft .5s ease  forwards`;
     section_cate[0].style.display = "none"
     section_cate[1].style.display = "block"

 })
 section_cate[1].addEventListener("click",()=>{
     var header__section= document.querySelector(".header__section")
     header__section.style.animation = `fadeRight .5s ease  forwards`;
     section_cate[1].style.display = "none"
     section_cate[0].style.display = "block"


 })
time=(h,m,s)=>{
    var hi=h>0?h-1:24,hj=h>1?h-2:23;
    var si=s>0?s-1:59,sj=s>1?s-2:58;
    var mi=m>0?m-1:59,mj=m>1?m-2:58;
    var hours= document.querySelector(".hoursx")
    var minutes= document.querySelector(".minutesx")
    var seconds= document.querySelector(".secondsx")
    var arrSecond=[si,sj]
    var arrMinute=[mi,mj]
    var arrHour=[hi,hj]
    var temp=true

const inter =  setInterval(()=>{
    
    if(temp){
        temp=false;
        var newsecond = document.createElement("div")
        var newsecond2 = document.createElement("div")
        newsecond.classList.add(`seconds-i${si}`);
        newsecond2.classList.add(`seconds-j${sj}`);
        newsecond.innerText=si<10?"0"+(si):si;
        newsecond2.innerText=sj<10?"0"+sj:sj;
        seconds.appendChild(newsecond);
        seconds.appendChild(newsecond2);
        var newminute = document.createElement("div")
        var newminute2 = document.createElement("div")
        newminute.classList.add(`minutes-i${mi}`);
        newminute2.classList.add(`minutes-j${mj}` );
        newminute.innerText=mi<10?"0"+(mi):mi;
        newminute2.innerText=mj<10?"0"+(mj):mj;
        minutes.appendChild(newminute);
        minutes.appendChild(newminute2);
        var newhour = document.createElement("div")
        var newhour2 = document.createElement("div")
        newhour.classList.add(`hours-i${hi}`);
        newhour2.classList.add(`hours-j${hj}` );
        newhour.innerText=hi<10?"0"+hi:hi;
        newhour2.innerText=hj<10?"0"+(hj):hj;
        hours.appendChild(newhour);
        hours.appendChild(newhour2);

    }
    // if(hi==0&&mi==1&&si==1){
    //     clearInterval(inter);

    //     console.log("helo1")
    // }
    var newsecond = document.createElement("div")
    var newsecond2 = document.createElement("div")
    newsecond.classList.add(`seconds-i${si}`,"abx");
    newsecond2.classList.add(`seconds-j${sj}`,"abx" );
    newsecond.innerText=si<10?"0"+si:si;
    newsecond2.innerText=sj<10?"0"+sj:sj;
    seconds.appendChild(newsecond);
    seconds.appendChild(newsecond2);
    oldsecond=document.querySelector(`.seconds-i${arrSecond[0]}`);
    oldsecond2=document.querySelector(`.seconds-j${arrSecond[1]}`)
    arrSecond.splice(0,2,si,sj)
    si=(si+59)%60
    sj=(sj+59)%60
    
    seconds.removeChild(oldsecond)
    seconds.removeChild(oldsecond2)
    if(si==59){
        if(hi==0&&mi==1){
            clearInterval(inter);
            var newsecond3 = document.createElement("div")
            newsecond3.classList.add(`seconds-j${sj}`,"abx" );
            newsecond3.innerText="00";
            oldsecond3=document.querySelector(`.seconds-i0`);

            seconds.appendChild(newsecond3);
            seconds.removeChild(oldsecond3)


            console.log("helo2")
        }


        var newminute = document.createElement("div")
        var newminute2 = document.createElement("div")
        newminute.classList.add(`minutes-i${mi}`,"abx");
        newminute2.classList.add(`minutes-j${mj}`,"abx" );
        newminute.innerText=mi<10?"0"+mi:mi;
        newminute2.innerText=mj<10?"0"+mj:mj;
        minutes.appendChild(newminute);
        minutes.appendChild(newminute2);
        oldminute=document.querySelector(`.minutes-i${arrMinute[0]}`)
        oldminute2=document.querySelector(`.minutes-j${arrMinute[1]}`)
        arrMinute.splice(0,2,mi,mj)
        mi=(mi+59)%60;
        mj=(mj+59)%60;
        minutes.removeChild(oldminute)
        minutes.removeChild(oldminute2)
        if(mi==59){
            if(hi==0){
                clearInterval(inter);

                console.log("helo3")
            }else{

                var newhour = document.createElement("div")
                var newhour2 = document.createElement("div")
                newhour.classList.add(`hours-i${hi}`,"abx");
                newhour2.classList.add(`hours-j${hj}`,"abx" );
                newhour.innerText=hi<10?"0"+hi:hi;
                newhour2.innerText=hj<10?"0"+hj:hj;
                hours.appendChild(newhour);
                hours.appendChild(newhour2);
                oldhour=document.querySelector(`.hours-i${arrHour[0]}`)
                oldhour2=document.querySelector(`.hours-j${arrHour[1]}`)
                arrHour.splice(0,2,hi,hj)
                hi=(hi+23)%24
                hj=(hj+23)%24
                console.log(hi,hj)
          
        
                hours.removeChild(oldhour)
                hours.removeChild(oldhour2)
            }
  

        }
    }

 


    },1000)


}

time(3,0,5)


