var buildMap = [ //地图
    [   //0代表不可抵达区域，1代表金币
        //2代表路径，3代表墙，4代表箱子
        0,0,3,3,3,3,3,0,0,0,0,0,
        0,0,3,2,2,2,3,0,0,0,0,0,
        0,0,3,2,4,4,3,0,3,3,3,0,
        0,0,3,2,4,2,3,0,3,1,3,0,
        0,0,3,3,3,2,3,3,3,1,3,0,
        0,0,0,3,3,2,2,2,2,1,3,0,
        0,0,0,3,2,2,2,3,2,2,3,0,
        0,0,0,3,2,2,2,3,3,3,3,0,
        0,0,0,3,3,3,3,3,0,0,0,0
    ],
    [
        0,0,3,3,3,3,3,3,3,0,0,0,
        0,0,3,2,2,2,2,2,3,3,3,0,
        0,3,3,4,3,3,3,2,2,2,3,0,
        0,3,2,2,2,4,2,2,4,2,3,0,
        0,3,2,1,1,3,2,4,2,3,3,0,
        0,3,3,1,1,3,2,2,2,3,0,0,
        0,0,3,3,3,3,3,3,3,3,0,0
    ],
    [
        0,0,0,0,3,3,3,3,3,3,3,0,
        0,0,0,3,3,2,2,3,2,2,3,0,
        0,0,0,3,2,2,2,3,2,2,3,0,
        0,0,0,3,4,2,4,2,4,2,3,0,
        0,0,0,3,2,4,3,3,2,2,3,0,
        0,3,3,3,2,4,2,3,2,3,3,0,
        0,3,1,1,1,1,1,2,2,3,0,0,
        0,3,3,3,3,3,3,3,3,3,0,0
    ],
    [
        0,0,3,3,3,3,3,3,3,3,3,0,
        0,0,3,2,2,3,3,2,2,2,3,0,
        0,0,3,2,2,2,4,2,2,2,3,0,
        0,0,3,4,2,3,3,3,2,4,3,0,
        0,0,3,2,3,1,1,1,3,2,3,0,
        0,3,3,2,3,1,1,1,3,2,3,3,
        0,3,2,4,2,2,4,2,2,4,2,3,
        0,3,2,2,2,2,2,3,2,2,2,3,
        0,3,3,3,3,3,3,3,3,3,3,3
    ],
]
var customs = 0;//初始化关卡
var needList = [3,4,5,6];//每一关的过关目标数
var position = [15,39,21,94];//初始化位置
var winCondition = needList[customs];//过关条件
var initPosition = position[customs];//位置
var map = $("#box div"); //取得每一个
var divNum=12;//跨越12个到下一行

//一开始选择关卡点击切换场景
$("#choicePass").click(function(){
    $("#init").addClass("hide");
    $("#box").removeClass("hide");
    customs = $('input:radio:checked').val();
    winCondition = needList[customs];
    initPosition = position[customs];
    map = $("#box div");
    init();
});
//下一关
function nextCustoms(){
    $(".next").click(function(){//跳转下一关
        $("#pass").addClass("hide");
        $("#box").removeClass("hide");
    });
}
//创造箱子
function createBox(){
    var nums = 108;
    for(var i = 0 ;i<nums;i++){
        var odiv = $("<div></div>");
        $("#box").append(odiv);
    }
}
//初始化地图
function init(){
    map.each(function(index){
        console.log(index)
        map.eq(index).removeClass();
    });
    map.each(function(index){
        if(buildMap[customs][index] != 0){
            map.eq(index).addClass("img"+buildMap[customs][index])
        }
    })
    map.eq(position[customs]).addClass("position")
}
//按下键盘移动人物及箱子（移动端滑动屏幕（未完善））
$(document).keydown(function(e){
    var key = e.keyCode;
    console.log(key)
    switch(key){
        //向上移动按w；
        case 87:
            move(-divNum);
        break;
        case 83:
            move(divNum);
        break;
        case 65:
            move(-1);
        break;
        case 68:
            move(1);
        break;
    }
    setTimeout(pass,2000);
})
//移动判断
function move(distance){
    //0代表不可抵达区域，1代表金币
        //2代表路径，3代表墙，4代表箱子
    var nowPosition = map.eq(initPosition);//现在的位置
    var nextPosition = map.eq(initPosition+distance);//下一时刻的位置
    var nextBoxPosition = map.eq(initPosition + 2*distance )
    if(!nextPosition.hasClass('img4') && (nextPosition.hasClass('img2') ||nextPosition.hasClass('img1'))){
        nowPosition.removeClass('position');
        nextPosition.addClass('position');
        initPosition += distance;
    }else if(nextPosition.hasClass('img4') && (!nextBoxPosition.hasClass('img4')) && (nextBoxPosition.hasClass('img1') || nextBoxPosition.hasClass('img2'))){
        nowPosition.removeClass('position');
        nextPosition.removeClass('img4');
        nextBoxPosition.addClass('img4');
        nextPosition.addClass('position').addClass('img2');
        initPosition += distance;
    }
}
//通关条件
function pass(){
    if($(".img1.img4").length == winCondition){
        if(customs<buildMap.length-1){
            $("#box").addClass("hide");
            $("#pass").removeClass("hide");
            nextCustoms();
            customs++;//关卡+1
            winCondition = needList[customs];//过关条件
            initPosition = position[customs];
            init();
        }else{//所有关卡都过了，按确定重置
            $("#box").addClass("hide");
            $("#pass").removeClass("hide");
            $("#pass p").text('所有关卡已通过，按确定重置关卡')
            $(".next").click(function(){//跳转下一关
                $("#pass").addClass("hide");
                $("#box").removeClass("hide");
            });
            customs = 0;
            winCondition = needList[customs];//过关条件
            initPosition = position[customs];
            init();
        }
    }
}
createBox();
init();