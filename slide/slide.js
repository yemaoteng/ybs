
slider = document.querySelector('.slide');

//弹出侧边栏目
document.querySelector("#btn_out").addEventListener("click",function(){
    slider.style.transform = "translate(0)";
});
//收回侧边栏目
document.querySelector("#btn_in").addEventListener("click",function(){
    slider.style.transform = "translate(-100vw)";
});
document.querySelector('.btn_back').addEventListener('click',function(){
    slider.style.transform = "translate(-100vw)";
});

//侧边栏滚动
(function(){
    var firstPoint = 0;
    var nowPoint = 0;
    var dex = 0;
    var startPoint = 0;
    var vr = 0;

    slider.addEventListener('touchstart',function(e){
        firstPoint = e.changedTouches[0].clientY;       
        if(dex + startPoint>0){
            startPoint = 0;
        }     
    });
    slider.addEventListener('touchmove',function(e){
        e.preventDefault();//底层不要跟着瞎起哄 
        nowPoint = e.changedTouches[0].clientY;
        dex = nowPoint - firstPoint;
        vr = startPoint + dex;
        if(vr>0){
            vr = 0;
        }
        if(vr<window.innerHeight - slider.offsetHeight){
            vr = window.innerHeight - slider.offsetHeight;
        }
        console.log(vr);
        slider.style.top = vr + 'px';
    });
    slider.addEventListener('touchend',function(e){
        startPoint += dex;
        if(startPoint<window.innerHeight - slider.offsetHeight){
            startPoint = window.innerHeight - slider.offsetHeight;
        }
    });

})();