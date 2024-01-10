var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists =document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
for(var i = 0; i< tabs.length; i++){
    tabs[i].onclick = showlist;
}



function showlist(){
    for( var i = 0; i<tabs.length; i++){
        if( tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else {
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}

var seckillNav = document.getElementById("seckillNav");
window.onscroll = function(){ 
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
    
    if( scrollTop >= 260){
        seckillNav.className = "seckill-nav seckill-navfixed"
    }else {
        seckillNav.className = "seckill-nav";
    }
    console.log(scrollTop);
}

//距离开始倒计时

var time = document.getElementById("time");

//倒计时结束时间
var endTime = new Date("2024-1-13 18:00");


//每一秒修改值

play();
setInterval(play,1000);

function play(){
    //当前时间
    var nowTime = new Date();
    //剩余时间秒
    var lessTime = (endTime-nowTime)/1000;
    var h = Math.floor(lessTime /(60*60));
    var m = Math.floor(lessTime / 60 % 60);
    var s = Math.floor(lessTime % 60);
    // var h = parseInt(lessTime / (60*60));
    // var m = parseInt((lessTime - h*60*60)/60);
    // var s = parseInt((lessTime - h*60*60 - m*60));

    time.innerText = nTS(h) +":"+ nTS(m) +":" + nTS(s);
}
function nTS(num){
    if(num < 10){
        return "0"+ num;
    }
    return num;
}
