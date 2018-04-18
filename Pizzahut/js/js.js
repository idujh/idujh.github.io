$(document).ready(function(){
$('.headertop h1').on('mouseenter focus',function(){
$(this).stop().transition({rotateX:'+=360deg'},400,'snap')
})
$('.allmenu').on('mouseenter focus',function(){
$('.allmenu_pbg').stop().fadeToggle()
$('.allmenu_p').stop().fadeToggle()
})

$(window).on('load resize',function(){
var height=$(window).height()
$('.content_mwrap').css({height:height})
})
$('.allmenu_m').on('click',function(){
$('.list_m>li>a>span').first().html('-')
$('.list_m>li>a').first().next().show()
$('#tab1').show()
$('.content_mwrap').stop().fadeToggle()
})
$('.m_close').on('click',function(){
$('.content_mwrap').stop().fadeToggle()
})
$('.list_m>li>a').each(function(index){
$(this).on('click',function(){
var src=$(this).find('span').html()
if (src=='+')
{
$('.list_m>li>ul').hide()
$('.tab').hide()
$('.list_m>li>a>span').html('+')
$('.list_m>li>ul>li>a').removeClass('on')
$(this).next().find('a').first().addClass('on')
$(this).next().show()
$(this).next().next().show()
$(this).find('span').html('-')
}else{
$(this).next().hide()
$('.tab').hide()
$(this).find('span').html('+')
}
})
})
$('.list_m>li>ul>li>a').each(function(index){
$(this).on('click',function(){
$('.tab').hide()
$('.tab').eq(index).show()
$('.list_m>li>ul>li>a').removeClass('on')
$(this).addClass('on')
})
})


$('.headerwrap').on('mouseleave blur',function(){
$('.allmenu_pbg').stop().hide()
$('.allmenu_p').stop().hide()
})


$('.gnb>li>a').on('mouseenter focus',function(){
var width=$(window).width()
if (width<=1200)
{
$(this).next().hide()
}else{
$('.gnb>li>ul').hide()
$(this).next().show()
$('.gnbbg').show()
}
})

$(window).on('load',function(){
$('.movetext').textillate({
loop:true,
in:{effect:'bounceInDown',
delay:150,
delayScale:1.5},
out:{effect:'flash',
delay:150,
delayScale:1.5},
})
})

$('.gnb>li>a:eq(1)').on('mouseenter focus',function(){
$('.gnbbg').hide()
})
$('.headerwrap').on('mouseleave blur',function(){
$('.gnb>li>ul').hide()
$('.gnbbg').hide()
})
$('.content>ul>li>a').on('mouseenter focus',function(){
$(this).stop().transition({skewY:'-2deg',scale:'1.05'},800,'snap')
})
$('.content>ul>li>a').on('mouseleave blur',function(){
$(this).stop().transition({skewY:'0deg',scale:'1'},800,'snap')
})


$('.footericon>a').first().css({color:'#70a401'})
$('.footericon>a').on('mouseenter focus',function(){
$(this).stop().transition({scale:1.1},'snap')
})
$('.footericon>a').on('mouseleave blur',function(){
$(this).stop().animate({scale:1})
})

$('.content_mwrap').on('mouseleave blur',function(){
$(this).hide()
})

$(window).on('scroll',function(){
var top=$(window).scrollTop()
$('.quickmenu').stop().animate({top:top},1200,'easeOutBounce')
})
$('.quick_last').on('click',function(){
$('body,html').stop().animate({scrollTop:0})
})

var now=0
var total=$('.pager>a').length

var loop=setInterval(function(){
$('.slider').stop().animate({left:'-=100%'},600,function(){
$('.slider>li').first().appendTo('.slider')
$('.slider').css({left:0})
})
if (now==total-1)
{
	now=-1
}
now++
$('.pager>a').css({width:13,backgroundColor:'#666'})
$('.pager>a').eq(now).css({backgroundColor:'#ff5151'})
$('.pager>a').eq(now).stop().animate({width:26},100)
},10000)

$('.next').on('click',function(){
$('.slider').stop().animate({left:'-=100%'},600,function(){
$('.slider>li').first().appendTo('.slider')
$('.slider').css({left:0})
})
if (now==total-1)
{
	now=-1
}
now++
$('.pager>a').css({width:13,backgroundColor:'#666'})
$('.pager>a').eq(now).css({backgroundColor:'#ff5151'})
$('.pager>a').eq(now).stop().animate({width:26},100)
return false
})

$('.prev').on('click',function(){
$('.slider>li').last().prependTo('.slider')
$('.slider').css({left:'-100%'})
$('.slider').stop().animate({left:'+=100%'},600)
if (now==0)
{
	now=total
}
now--
$('.pager>a').css({width:13,backgroundColor:'#666'})
$('.pager>a').eq(now).css({backgroundColor:'#ff5151'})
$('.pager>a').eq(now).stop().animate({width:26},100)
return false
})

$(window).on('load resize',function(){
var width=$(window).width()
if (width<1200)
{
$('.slider>li').width(width)
$('.slider>li>a>img').width(width)
}else{
$('.slider>li').width(1180)
$('.slider>li>a>img').width('100%')
}
})

/* $('a').on('focus',function(){
$(this).blur()
}) */


$('.quickmenu>img').on('click',function(){
var href=$(this).parent().attr('data-href')
location.href=href
})

var index=0
var total1=3
var loop00=setInterval(function(){
$('.ani'+index).css({border:'1px solid orange',borderRadius:'100%'}).animate({scale:1.2},400,function(){
$('.ani'+index).animate({rotate:'+=360deg'},1000,'easeOutBack',function(){
$('.ani'+index).animate({scale:1},1000,'easeOutElastic',function(){
$('.ani'+index).css({border:'none'})
if (index==total1)
{
	index=-1
}
index++
})
})
})
},10000)



})//ready