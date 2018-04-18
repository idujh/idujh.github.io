$(document).ready(function(){
/* $('a').on('focus',function(){
$(this).blur()
}) */
$('.gnb>li>a').each(function(index){
$('<div class="gnbstroke">').appendTo($(this))
$(this).on('mouseenter focus',function(){
$('.gnb>li>ul').hide()
$(this).next().stop().fadeIn()
$('.gnb>li>a').removeClass('on99')
$(this).addClass('on99')
$(this).find('.gnbstroke').animate({width:'100%'},600,function(){
$(this).animate({width:0,left:'100%'},600,function(){
$(this).css({left:0})
})
})

})//enter
})//each

$('.headerwrap').on('mouseleave blur',function(){
$('.gnb>li>ul').stop().fadeOut()
})
$('.gnb>li>ul>li>a:last()').on('blur',function(){
$('.gnb>li>ul').stop().fadeOut()
})

$('.slide>li').hide()
$('.slide>li').first().show()
$('.slide>li').first().find('img').stop().animate({scale:1.02},4000)
var now=1
var total=$('.slide>li').length
var loop=setInterval(function(){
if (now==total)
{
	now=0
}
now++
$('.pager>a').removeClass('on88')
$('.pager>a').eq(now-1).addClass('on88')
$('.slide>li').fadeOut(1000)
$('.slide>li').find('img').stop().animate({scale:1},1000)
$('.f'+now).fadeIn(1200)
$('.f'+now).find('img').stop().animate({scale:1.02},4000)
},8000)
//interval


$('.next').on('click',function(){
if (now==total)
{
	now=0
}
now++
$('.pager>a').removeClass('on88')
$('.pager>a').eq(now-1).addClass('on88')
$('.slide>li').fadeOut(1000)
$('.slide>li').find('img').stop().animate({scale:1},1000)
$('.f'+now).fadeIn(1200)
$('.f'+now).find('img').stop().animate({scale:1.02},4000)
return false
})//next


$('.prev').on('click',function(){
if (now==1)
{
	now=total+1
}
now--
$('.pager>a').removeClass('on88')
$('.pager>a').eq(now-1).addClass('on88')
$('.slide>li').fadeOut(1000)
$('.slide>li').find('img').stop().animate({scale:1},1000)
$('.f'+now).fadeIn(1200)
$('.f'+now).find('img').stop().animate({scale:1.02},4000)
return false
})//prev

$('.play').on('click',function(){
clearInterval(loop)
loop=setInterval(function(){
if (now==total)
{
	now=0
}
now++
$('.pager>a').removeClass('on88')
$('.pager>a').eq(now-1).addClass('on88')
$('.slide>li').fadeOut(1000)
$('.slide>li').find('img').stop().animate({scale:1},1000)
$('.f'+now).fadeIn(1200)
$('.f'+now).find('img').stop().animate({scale:1.02},4000)
},8000)
return false
})//play

$('.stop').on('click',function(){
clearInterval(loop)
return false
})//stop


$('.slide>li').each(function(index){
$('<a href="#"></a>').appendTo($(this).parent().next().find('.pager'))
$('.pager>a').first().addClass('on88')
})

$('.hfirst').css({borderTop:'2px solid #fff',borderRight:'2px solid #fff'})
$('.hlast').css({borderBottom:'2px solid #fff'})
$('#mediaright>h2>span').each(function(index){
var b=$(this).html()
$(this).on('click',function(){
if (b=='News room')
{
$('#mediaright>h2>span').css({border:'none'})
$('.hfirst').css({borderTop:'2px solid #fff',borderRight:'2px solid #fff'})
$('.hlast').css({borderBottom:'2px solid #fff'})
}else{
$('#mediaright>h2>span').css({border:'none'})
$('.hfirst').css({borderBottom:'2px solid #fff'})
$('.hlast').css({borderTop:'2px solid #fff',borderLeft:'2px solid #fff'})
}
$('.stroke').hide()
$('.stroke').eq(index).fadeIn()
$('.nw').hide()
$('.nw').eq(index).fadeIn()
$('#mediaright>h2>span').removeClass('on77')
$(this).addClass('on77')
})
})

//새창열기
$('.newpage').on('click',function(){
window.open('http://www.samsungdisplay.com/kor/report/securityPop.jsp','new','top=0,left=0,width=600,height=500,scrollbars=no,resize=yes')
return false
})
$('.newpage1').on('click',function(){
window.open('http://www.samsungdisplay.com/kor/popup/eppt/gsrm_Popup.jsp','new1','top=0,left=0,width=600,height=500,scrollbars=no,resize=yes')
return false
})
//새창열기
$('.slidebtn>a').on({
click:function(){
$('.slidebtn>a').removeClass('active')
$(this).addClass('active')
}
})


})//ready