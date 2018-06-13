$(document).ready(function(){

$('.slider>li').each(function(index){
$('.slider>li').first().find('.ani').eq(index).delay(index*400).animate({scale:0.2,top:0,opacity:1},800,'easeOutBack',function(){
$('.slider>li').first().find('.ani').animate({scale:1},800,'easeOutElastic')
})
})

//start Interval
var now=0
var total=$('.slider>li').length
var now1=1
var total1=$('.slider>li').length
$('.pager_num').html('<b>'+now1+'</b>/'+total1)
setInterval(function(){
$('.ani').css({top:70,opacity:0})
$('.slider').stop().animate({left:'-=100%'},800,function(){
if (now==total-1)
{
	now=-1
	
}
now++
$('.pager>li>a').removeClass('on')
$('.pager>li>a').eq(now).addClass('on')
if (now1==total1)
{
	now1=0
}
now1++
$('.pager_num').html('<b>'+now1+'</b>/'+total1)

$('.slider>li').each(function(index){
$(this).find('.ani').each(function(index){
$(this).delay(index*400).animate({scale:0.2,top:0,opacity:1},800,'easeOutBack',function(){
$(this).stop().animate({scale:1},800,'easeOutElastic')
})
})
})
$('.slider>li').first().appendTo('.slider')
$('.slider').css({left:0})
})
},10000)//end Interval

$('.gnb>li>a').each(function(index){
$(this).on('mouseenter focus',function(){
var pos=$(this).position()
$('.headerbg').stop().slideDown()
$('.gnb>li>a').css({color:'#4b4b4b'})
$(this).css({color:'#2099d4'})
$('.gnb>li>ul').stop().fadeIn(1000)
$('.header_menu>a').css({borderLeftColor:'#ddd'})
$('.header h1').find('img').attr({src:'image/logo1.png'})
$('.header_menu>a').not('.a1').css({color:'#333'})
$('.a2>img').attr({src:'image/ico_gnbUtil_cart1.png'})
$('.a2').css({color:'#333'})
$('.a3>img').attr({src:'image/gnb_srch_btn1.png'})
$('.a4>img').attr({src:'image/gnb_allMenu_btn1.png'})
$('.gnbstroke').show()
$('.gnbstroke').stop().animate({opacity:1,left:pos.left})
})//enter
$('.gnb>li>ul>li>a').on('mouseenter focus',function(){
$('.gnb>li>ul>li>a').removeClass('gnbon')
$(this).addClass('gnbon')
})

$('.header').on('mouseleave blur',function(){
$('.headerbg').stop().slideUp(function(){
$('.gnb>li>a').css({color:'#fff'})
$('.header h1').find('img').attr({src:'image/logo.png'})
$('.header_menu>a').not('.a1').css({color:'#fff'})
$('.header').css({borderBottomColor:'#969696'})
$('.header_menu>a').css({borderLeftColor:'#969696'})
$('.a2>img').attr({src:'image/ico_gnbUtil_cart.png'})
$('.a3>img').attr({src:'image/gnb_srch_btn.png'})
$('.a4>img').attr({src:'image/gnb_allMenu_btn.png'})
})
$('.gnb>li>ul').stop().fadeOut()
$('.gnbstroke').hide()
})//leave
})//each

//반응형 스크립트 start
$(window).on('load resize',function(){
var width=$(window).width()
var height=$(window).height()
$('.mask').width(width)
$('.slide').width(width)
$('.slide').height(height)
})
//반응형 스크립트 end

//next start
$('.next').on('click',function(){
$('.ani').css({top:70,opacity:0})
$('.slider').stop().animate({left:'-=100%'},800,function(){
if (now==total-1)
{
	now=-1
	
}
now++
$('.pager>li>a').removeClass('on')
$('.pager>li>a').eq(now).addClass('on')
if (now1==total1)
{
	now1=0
}
now1++
$('.pager_num').html('<b>'+now1+'</b>/'+total1)

$('.slider>li').each(function(index){
$(this).find('.ani').each(function(index){
$(this).delay(index*400).animate({scale:0.2,top:0,opacity:1},800,'easeOutBack',function(){
$(this).stop().animate({scale:1},800,'easeOutElastic')
})
})
})
$('.slider>li').first().appendTo('.slider')
$('.slider').css({left:0})
})
})
//next end

//prev start
$('.prev').on('click',function(){
$('.ani').css({top:70,opacity:0})
$('.slider>li').last().prependTo('.slider')
$('.slider').css({left:'-100%'})
$('.slider').stop().animate({left:'+=100%'},800,function(){
if (now==0)
{
	now=total
	
}
now--
$('.pager>li>a').removeClass('on')
$('.pager>li>a').eq(now).addClass('on')
if (now1==1)
{
	now1=total1+1
}
now1--
$('.pager_num').html('<b>'+now1+'</b>/'+total1)

$('.slider>li').each(function(index){
$(this).find('.ani').each(function(index){
$(this).delay(index*400).animate({scale:0.2,top:0,opacity:1},800,'easeOutBack',function(){
$(this).stop().animate({scale:1},800,'easeOutElastic')
})
})
})
})
})
//prev end
var mouse=setInterval(function(){
$('.mouse').stop().animate({bottom:90,opacity:0},800,function(){
$('.mouse').stop().animate({bottom:80,opacity:1},800)
})
},6000)
$('.product>div').on('mouseenter focus',function(){
$(this).siblings().stop().animate({width:'45%'},400)
$(this).stop().animate({width:'55%'},400)
})



$(window).on('load resize scroll',function(){
var top=$(window).scrollTop()
var width=$(window).width()
if (top>1400)
{
	$('.support_text').each(function(index){
	$(this).find('.ani1').each(function(index){
	$(this).delay(index*200).animate({top:0,opacity:1},800)
	})
	})
	if (width>=1800)
	{
     $('.supportmove').stop().animate({left:0},1000)
	}
}if (top>2100){
	$('.ani2').each(function(index){
	$(this).delay(index*400).animate({top:0,opacity:1},800)
	})
var nwidth=$('.news_menu').width()/3
$('.news_pager>a').each(function(index){
$(this).on('click',function(){
$('.news_pager>a').removeClass('on1')
$(this).addClass('on1')
$('.news_menu>li').stop().animate({left:index*-nwidth},400)
return false
})
})
    }
})

$('.familysite>a').on('click',function(){
var src=$(this).find('img').attr('src')
if (src=='image/footer_family_arrowUp.png')
{
	$(this).find('img').attr({src:'image/footer_family_arrowDown.png'})
	$('.familysiteinner').stop().slideDown(50)
}else{
	$(this).find('img').attr({src:'image/footer_family_arrowUp.png'})
    $('.familysiteinner').stop().slideUp(50)
	
}
return false
})
$(window).on('scroll',function(){
var top=$(window).scrollTop()
if (top>800)
{
	$('.topbtn').fadeIn()
}else{
    $('.topbtn').fadeOut()
}
if (top>2700)
{
	$('.topbtn').css({bottom:380})
}else{
$('.topbtn').css({bottom:40})
}
})
$('.topbtn').on('click',function(){
$('body,html').stop().animate({scrollTop:0},1000)
return false
})

$('.searchmenu').on('click',function(){
$('.productsearch').stop().slideDown()
})
$('.productsearch_close').on('click',function(){
$('.productsearch').stop().slideUp()
})
$('.productsearch_top>ul>li>a').each(function(index){
$(this).on('click',function(){
$('.productsearch_top>ul>li>a').removeClass('on99')
$(this).addClass('on99')
$('.tab').hide()
$('.tab').eq(index).show()
})
})
$('.a3').on('click',function(){
$('.searchshow').toggle()
})
$('.a4').on('click',function(){
$('.allmenu').show()
$('.body,html').css({overflowX:'hidden'})
$('.allmenu').stop().animate({left:0},function(){
$('.wrap').hide()
})
})
$('.allmenuclose').on('click',function(){
$('.wrap').show()
$('.allmenu').stop().animate({left:'100%'},function(){
$('.body,html').css({overflowX:'visible'})
$('.allmenu').hide()
})
})

/* $('a').focus(function(){
this.blur()
}) */

$('#popp27 img').on('click',function(){
var href=$(this).parent().parent().attr('data-href')
window.open(href)
})


})//ready