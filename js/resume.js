var ems = document.querySelectorAll(".skill_list em");
var spans = document.querySelectorAll(".skill_list li>span");

for(let i=0;i<ems.length;i++){
    ems[i].style.width = spans[i].innerHTML;
}