

//处理技能进度条百分比的问题
var ems = document.querySelectorAll(".skill_list em");
var spans = document.querySelectorAll(".skill_list li>span");

for(let i=0;i<ems.length;i++){
    ems[i].style.width = spans[i].innerHTML;
}

//点击项目展开对应
var h2s = document.querySelectorAll('.case_list h2');
var casespan = document.querySelectorAll('.case_list h2 span');
for(let i=0;i<h2s.length;i++){
    h2s[i].onoff = false;
    h2s[i].index = i;
    h2s[0].onoff = true;
    h2s[i].onclick = function () {
        if(this.nextElementSibling){
            if(this.onoff){
                this.nextElementSibling.style.display = 'none';
                casespan[this.index].className = '';
                console.log("i = "+i);
                console.log("this.index" + this.index);
            }else{
                this.nextElementSibling.style.display = 'block';
                casespan[this.index].className = 'active';
            }
            this.onoff = !this.onoff;
        }
    }
}

//点击li现实对应的内容
var lis = document.querySelectorAll('.case_content li');
var contents = document.querySelectorAll('.list_content li');
var listContent = document.querySelector('.list_content');
var icon = document.querySelector('.list_content .icon');
console.log(icon);

icon.onclick = function() {
    listContent.style.transition = 'transform .2s';
    listContent.style.transform = 'translateX(100vw)';
}

for(let i=0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onclick = function () {
        //先全部li关掉
        for(let j=0;j<lis.length;j++){
            lis[j].className = '';
            contents[j].style.display = 'none';
        }
        this.className = 'checked';
        contents[this.index].style.display = 'block';
        if(getSize()=='xs'){
            listContent.style.transition = 'transform .2s';
            listContent.style.transform = 'translateX(0)';
        }
    }
}

//检测屏幕大小
function getSize() {
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth;
    if(diviceWidth<960){
        return 'xs';
    }else{
        return 'lg';
    }
}

//当屏幕重新调整大小时
window.onresize = function() {
    if(getSize()=='lg'){
        listContent.sytle.transform = 'translateX(0)';
    }
}