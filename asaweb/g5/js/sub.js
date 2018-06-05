$(document).ready(function(){

//헤더
$(window).on('load',function(){
var botheight=$('.header_bot').height()
var sheight=$('.sub_slide>li>a>img').height()
$('.gnb>li>a').css({height:botheight,lineHeight:botheight+'px'})
$('.gnb>li>ul').css({top:botheight})
$('.gnbbg').css({top:botheight})
$('.sub_mask').height(sheight)
})

$('.gnb>li>a').on('mouseenter focus',function(){
$('.gnb>li>ul').stop().fadeOut(400)
$(this).next().stop().fadeIn(800)
$('.gnbbg').stop().fadeIn(800)
$('.gnb>li>a').removeClass('on')
$(this).addClass('on')
})

$('.header').on('mouseleave blur',function(){
$('.gnb>li>ul,.gnbbg').stop().fadeOut(400)
})

//서브컨텐츠
$('.sub_slide>li').hide()
$('.sub_slide>li:first').show()
var snow=1
var stotal=$('.sub_slide>li').length
var sloop=setInterval(function(){
if (snow==stotal)
{
	snow=0
}
snow++
$('.sub_slide>li').stop().fadeOut(400)
$('.sub_slide>li').eq(snow-1).stop().fadeIn(800)
},8000)

$('.left_list>li>a').on('mouseenter focus',function(){
$('.left_list>li>a').removeClass('on')
$(this).addClass('on')
})




})//ready