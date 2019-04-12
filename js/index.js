var buildMap = [
    [
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
var customs = 0;
var needList = [3,4,5,6];
var position = [15,39,21,94];
var winCondition = needList[customs];
var initPosition = position[customs];
var map = $("#box div");

//点击切换场景
$("#choicePass").click(function(){
    $("#init").addClass("hide");
    $("#box").removeClass("hide");
    customs = $('input:radio:checked').val();
    winCondition = needList[customs];
    initPosition = position[customs];
    map = $("#box div");
    init();
});
//创造箱子
function createBox(){
    var nums = 108;
    for(var i = 0 ;i<nums;i++){
        var odiv = $("<div></div>");
        $("#box").append(odiv);
    }
}
createBox();

//初始化地图
function init(){
    map.each(function(index){
        console.log(index)
        map.eq(index).removeClass();
    });
    map.each(function(index){
        if(buildMap[customs][index] != 0){
            map.eq(index).addClass("color"+buildMap[customs][index])
        }
    })
    map.eq(position[customs]).addClass("position")
}
init();
//移动判断
function move(){

}
//通关条件
function pass(){

}