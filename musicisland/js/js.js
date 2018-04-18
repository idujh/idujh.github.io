$(document).ready(function(){
var audio1=new Audio('music/bg.mp3')
$(window).on('load',function(){
audio1.play();
audio1.loop=true;
})

$(window).on('load resize',function(){
var width=$(window).width()
if (width>1024)
{
$('.gnb>li>a').on('mouseenter focus',function(){
$(this).css({color:'#ef4035'})
$('.gnbbg').stop().slideDown()
$('.gnb>li>ul').stop().fadeIn()
})
$('.gnb>li>a').on('mouseleave blur',function(){
$(this).css({color:'#fff'})
})
$('.gnb>li>ul>li>a').on('mouseenter focus',function(){
$(this).css({color:'#ef4035',fontWeight:400})
})
$('.gnb>li>ul>li>a').on('mouseleave blur',function(){
$(this).css({color:'#fff',fontWeight:200})
})
$('.header').on('mouseleave blur',function(){
$('.gnbbg').stop().slideUp()
$('.gnb>li>ul').stop().fadeOut()
})
$('.gnbbg').on('mouseenter focus',function(){
$('.gnbbg').stop().slideDown()
$('.gnb>li>ul').stop().fadeIn()
})
}else{
$('.gnb>li>a').on('mouseenter focus',function(){
$(this).css({color:'#ef4035'})
$('.gnbbg').stop()
$('.gnbbg').hide()
$('.gnb>li>ul').stop()
})
$('.gnb>li>a').on('mouseleave blur',function(){
$(this).css({color:'#fff'})
})
$('.gnb>li>ul>li>a').on('mouseenter focus',function(){
$(this).css({color:'#ef4035',fontWeight:400})
})
$('.gnb>li>ul>li>a').on('mouseleave blur',function(){
$(this).css({color:'#fff',fontWeight:200})
})
$('.header').on('mouseleave blur',function(){
$('.gnbbg').stop()
$('.gnb>li>ul').stop()
})
$('.gnbbg').on('mouseenter focus',function(){
$('.gnbbg').stop()
$('.gnb>li>ul').stop()
})
}
})


$(window).on('load resize',function(){
var imageheight=$('.slide>li>a>img').height()
var maskwidth=$('.mask').width()
var mediaworkmovie=$('.mediaworkmovie>iframe').width()
var width=$(window).width()
var height=$(window).height()
$('.video-foreground iframe').height(height)
$('.video-foreground iframe').width(width)
$('.mediaworkmovie>iframe').height(mediaworkmovie/2)
$('.mask').height(imageheight)
$('.slide>li>a>img').width(maskwidth)
$('.imagelistwrap').height(imageheight)
$('.piano_image>img').css({width:'100%'})
})


var imageheight=$('.slide>li>a>img').height()
var maskwidth=$('.mask').width()
var mediaworkmovie=$('.mediaworkmovie>iframe').width()
$('.mediaworkmovie>iframe').height(mediaworkmovie/2)
$('.mask').height(imageheight)
$('.slide>li>a>img').width(maskwidth)
$('.imagelistwrap').height(imageheight)
$('.piano_image>img').css({width:'100%'})

var loop=setInterval(function(){
var imageheight=$('.slide>li>a>img').height()
var maskwidth=$('.mask').width()
$('.mask').height(imageheight)
$('.slide>li>a>img').width(maskwidth)
$('.imagelistwrap').height(imageheight)
$('.slide').stop().animate({left:'-=100%'},1000,function(){
$('.slide>li').first().appendTo('.slide')
$('.slide').css({left:0})
})
},6000)

$('.imagelistwrap>a').on('mouseenter focus',function(){
$(this).find('div').css({backgroundColor:'rgba(0,0,0,0.2)',color:'#9d140d',fontWeight:'bold'})
$(this).find('div').find('img').css({backgroundColor:'rgba(191,23,15,0.8)'})
$(this).find('div').find('img').stop().animate({scale:1.1})
})
$('.imagelistwrap>a').on('mouseleave blur',function(){
$(this).find('div').css({backgroundColor:'rgba(0,0,0,0.7)',color:'#fff',fontWeight:'normal'})
$(this).find('div').find('img').css({backgroundColor:'transparent'})
$(this).find('div').find('img').stop().animate({scale:1})
})

//m_start
$('.m_menu').on('click',function(){
$('.m_wrap').fadeIn()
$('.m_menuwrap').css({display:'block'})
$('.m_menuwrap').stop().animate({left:0},400,function(){
$('.m_wrap').css({position:'fixed'})
})
})
$('.closebtn').on('click',function(){
$('.m_wrap').fadeOut(1200)
$('.m_menuwrap').animate({left:'-200%'},1200,'easeInOutBack',function(){
$('.m_wrap').css({position:'absolute'})
$('.m_menuwrap').css({display:'none'})
})
})
//m_end
$(window).on('load resize',function(){
var width=$(window).width()
if (width>640)
{
$('.m_wrap').fadeOut(1200)
$('.m_menuwrap').css({display:'none',left:'-200%'})
}
})

})//ready