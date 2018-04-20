$(document).ready(function(){

var height1=$(window).height()
var height2=$('.header').height()
$('.intro').height(height1-height2)
$(window).on('load',function(){
$('.ani').each(function(index){
$('body,html').css({overflow:'hidden'})
$(this).delay(index*200).animate({top:0,opacity:1},600,function(){
$('.intro').delay(600).stop().animate({scale:1.2,opacity:0},2000,function(){
$('body,html').css({overflow:'visible'})
$('.intro').hide()
})
})
})
})//load

$(window).on('load resize',function(){
var height1=$(window).height()
var height2=$('.header').height()
var width=$(window).width()
if (width>=640)
{
$('.footer').css({position:'static',float:'left'})
$('.c').css({width:'33.33%'})
$('.c>div').height(height1-height2)
$('.c').height(height1-height2)
}else{
$('.footer').css({position:'static',float:'left'})
$('.c').css({width:'100%'})
$('.c>div').height((height1-height2)/3)
$('.c').height((height1-height2)/3)
}
})

$('.family').on('click',function(){
var src=$(this).find('img').attr('src')
if (src=="image/family_icon_off.png")
{
$('.formup').slideDown()
$(this).find('img').attr({src:src.replace('_off','_on')})
}else{
$('.formup').slideUp()
$(this).find('img').attr({src:src.replace('_on','_off')})
}
return false
})

$('.c').on('mouseenter focus',function(){
$('.c>div').css({opacity:0.5})
$(this).find('div').stop().animate({opacity:1},200)
})
$('.content').on('mouseleave blur',function(){
$('.c>div').stop().animate({opacity:1},600)
})

$('.menuicon').on('click',function(){
$('body,html').css({overflow:'hidden'})
$('.menuwrap').show().stop().animate({left:0,opacity:1},800,function(){
$('.footer').hide()
})

})

$('.menuclose').on('click',function(){
$('.menuwrap').stop().animate({left:'100%',opacity:0},800,function(){
$('.menuwrap').hide()
$('.footer').show()
$('body,html').css({overflow:'visible'})
})
})

$(window).on('load resize',function(){
$('.text').stop().animate({top:'55%',left:'10%',margin:0,scale:1})
var width=$(window).width()
if (width>=640)
{
$('.c').on({
click:function(){
$('.c').css({width:'10%'})
$('.text').find('.stroke,h3,p').hide()
$('.text h2').css({width:0,fontSize:'20px'})
$(this).find('.stroke,h3,p').show()
$(this).find('h2').css({fontSize:'2.5em'})
$(this).stop().animate({width:'80%'},100,function(){
$('.text').stop().animate({top:'55%',left:'10%',margin:0,scale:1})
$(this).find('.text').stop().animate({left:'50%',top:'50%',marginLeft:-$(this).find('.text').width()/2,marginTop:-$(this).find('.text').height()/2},1000,function(){
$(this).stop().animate({scale:1.2},600,'easeOutExpo')
})
})
return false
}//click
})//on
}else{
$('.text').find('h3').show()
$('.c').on({
click:function(){
$('.c').css({width:'100%'})
$('.text').find('.stroke,p').hide()
$('.text').find('h3').show()
$('.text h2').css({width:0,fontSize:'20px'})
$(this).find('.stroke,p,h3').show()
$(this).find('h2').css({fontSize:'2.5em'})
$(this).stop().animate({height:'80%'},100,function(){
$('.text').stop().animate({top:'55%',left:'10%',margin:0,scale:1})
$(this).find('.text').stop().animate({left:'50%',top:'50%',marginLeft:-$(this).find('.text').width()/2,marginTop:-$(this).find('.text').height()/2},1000,function(){
$(this).stop().animate({scale:1.05},600,'easeOutExpo')
})
})
return false
}//click
})//on
}
})





})//ready