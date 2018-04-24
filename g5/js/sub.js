$(document).ready(function(){
var now=1
var total=$('.slide>li>a').length
$('<div class="pager"></div>').appendTo('.mask')
$('.pager').html('<b>'+now+'</b>/'+total)
$('.slide>li>a').eq(2).css({width:300,height:300,marginTop:0})

$('.slide>li>a').each(function(index){
var alt=$(this).find('img').attr('alt')
$('<div class="alt">'+alt+'</div>').appendTo($(this))
$('.alt').hide()
$('.slide>li>a').eq(2).find('.alt').show()
})
var loop=setInterval(function(){
$('.slide').stop().animate({left:'-=354'},1000,function(){
$('.slide>li').first().appendTo('.slide')
$('.slide>li>a').css({width:240,height:240,marginTop:50})
$('.slide>li>a').eq(2).css({width:300,height:300,marginTop:0})
$('.alt').hide()
$('.slide>li>a').eq(2).find('.alt').fadeIn(1000)
$('.slide').css({left:0})
if (now==total)
{
	now=0
}
now++
$('.pager').html('<b>'+now+'</b>/'+total)
})//ani
},6000)//interval

$('.next').on('click',function(){
$('.slide').stop().animate({left:'-=354'},400,function(){
$('.slide>li').first().appendTo('.slide')
$('.slide>li>a').css({width:240,height:240,marginTop:50})
$('.slide>li>a').eq(2).css({width:300,height:300,marginTop:0})
$('.alt').hide()
$('.slide>li>a').eq(2).find('.alt').fadeIn(800)
$('.slide').css({left:0})
if (now==total)
{
	now=0
}
now++
$('.pager').html('<b>'+now+'</b>/'+total)
})//ani
return false
})//next

$('.prev').on('click',function(){
$('.slide>li').last().prependTo('.slide')
$('.slide').css({left:-354})
$('.slide').stop().animate({left:'+=354'},400)
$('.slide>li>a').css({width:240,height:240,marginTop:50})
$('.slide>li>a').eq(2).css({width:300,height:300,marginTop:0})
$('.alt').hide()
$('.slide>li>a').eq(2).find('.alt').fadeIn(800)
if (now==1)
{
	now=total+1
}
now--
$('.pager').html('<b>'+now+'</b>/'+total)
return false
})//prev






$('.gnb>li>a').each(function(index){
$(this).on('mouseenter focus',function(){
$('.topimg a,.topbg,.gnb>li>ul').stop().slideDown()
$('.topimg a').css({background:'url(../image/topimg'+(index+1)+'.png) 50% 75% no-repeat',backgroundSize:'100px'})
$('.topimg a').html($(this).attr('data-title'))
})//enter
})//each
$('.header').on('mouseleave blur',function(){
$('.topimg a,.topbg,.gnb>li>ul').stop().slideUp()
})//leave
$('.gnb>li>ul>a').each(function(index){
$(this).on('mouseenter focus',function(){
$('.topimg a,.topbg,.gnb>li>ul').stop().slideDown()
$('.topimg a').css({background:'url(../image/topimg'+(index+1)+'.png) 50% 75% no-repeat',backgroundSize:'100px'})
$('.topimg a').html($(this).parent().parent().find('a').attr('data-title'))
})
})
$('.box').each(function(index){
$(window).on('scroll',function(){
var pos=$(window).scrollTop()
if (pos>200)
{
    $('.boxwrap').stop().animate({opacity:1},4000)
	$('.box').eq(index).delay(index*400).animate({top:0,opacity:1},600)
}
})
})
$('.move').each(function(index){
$(window).on('scroll',function(){
var pos=$(window).scrollTop()
if (pos>1000)
{
	$('.move').eq(index).delay(index*400).animate({top:0,opacity:1},600)
}
})
})
var arrow=setInterval(function(){
$('.arrow a img').stop().animate({top:10},800,function(){
$('.arrow a img').stop().animate({top:0},800)
})
},2000)


$('.gnb1>li>a').each(function(){
$(this).on('click',function(){
var plus=$(this).find('span').html()
if (plus=='+')
{
	$('.gnb1').find('span').html('+')
	$(this).find('span').html('-')
	$('.gnb1>li>ul').stop().slideUp()
	$(this).next().stop().slideDown()
}
})
})

var height=$(window).height()
$('.list').on('click',function(){
$('.gnbwrap').stop().animate({left:0},200)
$('.gnbwrap').height(height)
})
$('.close').on('click',function(){
$('.gnbwrap').stop().animate({left:'-110%'},200)
})

$(window).on('scroll',function(){
var top=$(window).scrollTop()
if (top>500)
{
	$('.topbtn').fadeIn()
	$('.topbtn').on('click',function(){
    $('body,html').stop().animate({scrollTop:0},600)
    return false
    })//click
}else{
    $('.topbtn').fadeOut()
}
})
$('.search1').on('click',function(){
$('.form').fadeIn()
})

$('.gallery ul>li>a').each(function(index){
$('<div class="over"></div>').appendTo($(this))
$('.over').html('<a href="#">클릭&nbsp;+</br>크게보기</a>')
$(this).on('mouseenter focus',function(){
$('.gallery ul>li>a').removeClass('on')
$('.over').hide()
$('.gallery ul>li>a>img').css({opacity:1})
$(this).addClass('on')
$(this).find('.over').stop().fadeIn()
$(this).find('img').css({opacity:0.6})
})//enter
$(this).on('click',function(){
$('.bigimg img').attr({src:$(this).find('img').attr('src')})
return false
})
})

 $('.sub1_bottom>ul>li>a').each(function(index){
$(this).on('click',function(){
$('.tab').hide()
$('.tab').eq(index).stop().fadeIn(300)
 $('.sub1_bottom>ul>li>a').removeClass('on1')
$(this).addClass('on1')
return false
})//click  
})//each

$('.sub1_list>li').on('mouseenter focus',function(){
$('.sub1_list>li img').css({opacity:1})
$(this).find('img').css({opacity:0.8})
$('.sub1_list>li a').css({backgroundColor:'none'})
$(this).find('a').css({backgroundColor:'#000'})
$('.bdwidth').css({backgroundColor:'#fff'})
$(this).find('.bdwidth').css({backgroundColor:'#156a8f'})
$('.sub1_list>li').find('h3,p').css({color:'#414141'})
$(this).find('h3,p').css({color:'#fff'})
})

})//ready